import React, { useState, useEffect } from 'react';
import { FaBolt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useWindowWidth } from '../useWindowWidth';

//Import styles from parent

const Carousel = ({ data, options, styles }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideCounter, setSlideCounter] = useState(0);
  const width = useWindowWidth();

    useEffect(() => {
        if(options.autoplay) {
          const interval = setInterval(() => {
          setSlideCounter((prevSlideCounter) => {
            const newSlideCounter = prevSlideCounter + 1;
            
            if (newSlideCounter >= options.autoplayDelay) {
              nextSlide();
              return 0; // Reset slide counter
            }
      
            return newSlideCounter;
          });
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }
      }, []);
      
      

  const nextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
    setSlideCounter(0)
  };

  const prevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setSlideCounter(0)
  };

  const goToSlide = (index) => {
      setActiveSlideIndex(index);
      setSlideCounter(0)
  };

//   <div className={`${styles.slides} ${styles.fade} ${
//     index === activeSlideIndex ? styles.slidesActive : styles.slidesInactive
//   }`}
//   key={index}>
//   <img className={`${styles.img}`} alt={slide.title} src={slide[0]} />
// </div>

  return (

    <div className={`${styles.slideshowContainer}`}>
      {  options.onlyImgs ? 
      //If there are only images
      data.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slides} ${styles.fade} ${
            index === activeSlideIndex ? styles.slidesActive : styles.slidesInactive
          }`}
        >
          <img className={`${styles.img}`} alt={slide.title} src={slide} />
        </div>
      ))
      //If there is a full data obj
      : data.map((slide, index) => (
        <Link
          to={slide.href}
          key={index}
          className={`${styles.slides} ${styles.fade} ${
            index === activeSlideIndex ? styles.slidesActive : styles.slidesInactive
          }`}
        >
          {options.img && <img className={`${styles.img}`} alt={slide.title} src={width < 550 ? slide.img.sm : width < 800 ? slide.img.md : slide.img.lg} />}
          <div className={`${styles.overlay}`}>
            <div className={`${styles.icon}`} >
              {slide.svg}
            </div>
            <p className={`${styles.title}`} >{slide.title}</p>
              {options.line && 
                <div className={`${styles.lines}`}>
                  <div className={`${styles.line}`} />
                  <FaBolt className={`${styles.linesIcon}`} />
                  <div className={`${styles.line}`} />
                </div>
              }
            <p className={`${styles.text}`} >{slide.text}</p>
          </div>
        </Link>
      ))}
      <p className={`${styles.next}`} onClick={nextSlide}>
        &#10095;
      </p>
      <p className={`${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </p>
      <div className={`${styles.dots}`}>
        {data.map((x, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === activeSlideIndex ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;




