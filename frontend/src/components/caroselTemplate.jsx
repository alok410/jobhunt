import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className="carousel-item-content">
                            <button>{item}</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
