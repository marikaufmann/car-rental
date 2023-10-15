"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const ScrollTopBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className='scroll-button__container' >
      {isVisible && (
        <AnchorLink href='#hero' className='scroll-button'>
          <FaArrowUp className='scroll-button__icon'/>
        </AnchorLink>
      )}
    </div>
  );
};

export default ScrollTopBottom;
