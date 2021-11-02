import React, { useState, useContext } from 'react';
import './Hero.scss';
import { heroSliders } from '../../services/Services';
import { GlobalContext } from '../../context/GlobalContext';
import HeroSlide from '../HeroSlide/HeroSlide';

const Hero = () => {
  const { current, prevSlide, nextSlide } = useContext(GlobalContext);
  const [banners] = useState(heroSliders);

  const renderSlider = () => {
    return (
      <>
        {banners.map((item, index) => (
          <HeroSlide
            key={item.id}
            img={item.img}
            title={item.title}
            current={current}
            index={index}
          />
        ))}
      </>
    );
  };
  return (
    <>
      <div className="hero">
        <div className="hero-slider">{renderSlider()}</div>
        <div className="hero-btn" onClick={prevSlide}>
          <i className="fas fa-caret-square-left"></i>
          <i className="fas fa-caret-square-right" onClick={nextSlide}></i>
        </div>
      </div>
    </>
  );
};

export default Hero;
