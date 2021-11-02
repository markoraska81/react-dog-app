import React from 'react';
import './HeroSlide.scss';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

const HeroSlide = ({ img, title, current, index }) => {
  return (
    <>
      <div className="slide">
        {index === current && (
          <>
            <div className="slide-box">
              <div className="slide-box__heading">
                <img src={img} alt={title} />
              </div>
              <div className="slide-box__body">
                <Banner title={title} />
                <Link to="/breeds">
                  <button className="btn-banner">view</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HeroSlide;
