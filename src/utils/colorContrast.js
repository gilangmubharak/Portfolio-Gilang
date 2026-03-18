const normalizeHex = (hexColor) => {
    if (!hexColor) return null;
    const normalized = hexColor.replace('#', '');
    if (normalized.length === 6) return normalized;
    if (normalized.length === 3) {
        return normalized
            .split('')
            .map((ch) => ch + ch)
            .join('');
    }
    return null;
};

export const getReadableTextColor = (backgroundHex, dark = '#111111', light = '#f5f5f5') => {
    const hex = normalizeHex(backgroundHex);
    if (!hex) return dark;

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.6 ? dark : light;
};
