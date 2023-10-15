import Image from "next/image";
import React from "react";
import { CustomButton, Navbar } from ".";

const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <Navbar />
      <div className="hero__container">
        <h1 className="hero__title">
          Find, book, rent a car—quick and{" "}
          <span className="whitespace">super easy!</span>
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          textStyles="text-white"
          containerStyles="bg-[#0e1d21] mt-5 mt-2 transition ease-out hover:opacity-90 active:opacity-80 shadow-lg rounded-full py-4 px-[26px]"
					anchor='search'
        />
      </div>
    </div>
  );
};

export default Hero;
