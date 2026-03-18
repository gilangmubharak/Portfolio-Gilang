import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div
                    className='testimonials'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='testimonials--header'>
                        <h2 style={{ color: theme.secondary }}>Testimonials</h2>
                    </div>
                    <div className='testimonials--body'>
                        <FaQuoteLeft
                            className='quote'
                            style={{ color: theme.secondary }}
                        />
                        <div
                            className='testimonials--slider'
                            style={{ backgroundColor: theme.primary }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div
                                        className='single--testimony'
                                        key={test.id}
                                    >
                                        <div className='testimonials--container'>
                                            <div
                                                className='review--img'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                }}
                                            >
                                                <img
                                                    src={test.image}
                                                    alt={test.name}
                                                    width='90'
                                                    height='90'
                                                    loading='lazy'
                                                    decoding='async'
                                                />
                                            </div>
                                            <div
                                                className='review--content'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <p>{test.text}</p>
                                                <h3>{test.name}</h3>
                                                <p className='review-title'>{test.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.secondary }}
                                aria-label='Previous testimonial'
                            >
                                <FaArrowLeft
                                    style={{ color: theme.primary }}
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.secondary }}
                                aria-label='Next testimonial'
                            >
                                <FaArrowRight
                                    style={{ color: theme.primary }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;
