import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Education from '../../components/Education/Education'
import Experience from '../../components/Experience/Experience'
import Contacts from '../../components/Contacts/Contacts'
import Projects from '../../components/Projects/Projects'
import Services from '../../components/Services/Services'
import Achievement from '../../components/Achievement/Achievement'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />
            <div role='document'>
                <h1 className='sr-only-heading'>{headerData.name} Portfolio</h1>
                <Landing />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Achievement />
                <Services />
                {/* <Testimonials /> */}
                {/* <Blog /> */}
                <Contacts />
            </div>
            <Footer />
        </div>
    )
}

export default Main
