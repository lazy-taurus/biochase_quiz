import React, { useState, useEffect } from 'react';
import './slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const changeSlide = () => {
      
      if (!isPaused) {
        // Remove 'can-zoom' class from all slides
        document.querySelectorAll('.zoom-container').forEach((container) => {
          container.classList.remove('can-zoom');
        });

        // Set the active slide
        const activeSlide = document.getElementById(`s${currentSlide}`);
        if (activeSlide) {
          activeSlide.checked = true;
        }

        // Add 'can-zoom' class to the active slide
        const activeContainer = document.querySelector(`.zoom-container[data-slide="${currentSlide}"]`);
        if (activeContainer) {
          activeContainer.classList.add('can-zoom');
        }

        // Move to the next slide
        setCurrentSlide((prevSlide) => (prevSlide === 5 ? 1 : prevSlide + 1));
      }
    };

    // Start the auto-scroll
    const slideInterval = setInterval(changeSlide, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentSlide, isPaused]);

  const pauseSlide = () => {
    setIsPaused(true);
  };

  const resumeSlide = () => {
    setIsPaused(true);
  };

  return (
    <section id="slider" className='sli' onMouseEnter={pauseSlide} onMouseLeave={resumeSlide}>
      <input type="radio" name="slider" id="s1" data-slide="1" checked={currentSlide === 1} className="slider-input" />
      <input type="radio" name="slider" id="s2" data-slide="2" checked={currentSlide === 2} className="slider-input" />
      <input type="radio" name="slider" id="s3" data-slide="3" checked={currentSlide === 3} className="slider-input" />
      <input type="radio" name="slider" id="s4" data-slide="4" checked={currentSlide === 4} className="slider-input" />
      <input type="radio" name="slider" id="s5" data-slide="5" checked={currentSlide === 5} className="slider-input" />


      <label htmlFor="s1" id="slide1">
        <div className="zoom-container" data-slide="1">
          <img src="https://source.unsplash.com/random/800x600?sig=1" alt="Image 1" />
        </div>
      </label>
      <label htmlFor="s2" id="slide2">
        <div className="zoom-container" data-slide="2">
          <img src="https://source.unsplash.com/random/800x600?sig=2" alt="Image 2" />
        </div>
      </label>
      <label htmlFor="s3" id="slide3">
        <div className="zoom-container" data-slide="3">
          <img src="https://source.unsplash.com/random/800x600?sig=3" alt="Image 3" />
        </div>
      </label>
      <label htmlFor="s4" id="slide4">
        <div className="zoom-container" data-slide="4">
          <img src="https://source.unsplash.com/random/800x600?sig=4" alt="Image 4" />
        </div>
      </label>
      <label htmlFor="s5" id="slide5">
        <div className="zoom-container" data-slide="5">
          <img src="https://source.unsplash.com/random/800x600?sig=5" alt="Image 5" />
        </div>
      </label>
    </section>
  );
};

export default Slider;
