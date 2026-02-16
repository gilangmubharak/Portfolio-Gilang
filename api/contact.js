const nodemailer = require('nodemailer');

const isValidEmail = (email) =>
    typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    let parsedBody = {};

    try {
        parsedBody =
            typeof req.body === 'string'
                ? JSON.parse(req.body || '{}')
                : req.body || {};
    } catch (error) {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    const { name, email, message } = parsedBody;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }

    const {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_SECURE,
        SMTP_USER,
        SMTP_PASS,
        CONTACT_RECEIVER_EMAIL,
        CONTACT_SENDER_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER_EMAIL) {
        return res.status(500).json({
            message:
                'Email service is not configured. Please set SMTP and contact environment variables.',
        });
    }

    const parsedPort = Number(SMTP_PORT || 465);
    const secure =
        typeof SMTP_SECURE === 'string'
            ? SMTP_SECURE.toLowerCase() === 'true'
            : parsedPort === 465;

    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parsedPort,
        secure,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    try {
        await transporter.sendMail({
            from: CONTACT_SENDER_EMAIL || SMTP_USER,
            to: CONTACT_RECEIVER_EMAIL,
            replyTo: email,
            subject: `New portfolio message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h2>New Portfolio Contact Message</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage.replace(/\n/g, '<br/>')}</p>
            `,
        });

        return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact API send error:', error);
        return res.status(500).json({ message: 'Failed to send message' });
    }
};
