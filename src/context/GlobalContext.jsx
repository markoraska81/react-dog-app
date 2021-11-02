import React, { useState, createContext } from 'react';
import { heroSliders, modalDetail } from '../services/Services';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState(modalDetail);
  const [current, setCurrent] = useState(0);
  const sliderLength = heroSliders.length;
  const [loading, setLoading] = useState(false);

  // MENU TOOGLE
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // NEXT, PREV SLIDE
  const nextSlide = () => {
    setCurrent(current === -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
  };

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        menuToggle,
        modal,
        setModal,
        modalImg,
        setModalImg,
        current,
        nextSlide,
        prevSlide,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
