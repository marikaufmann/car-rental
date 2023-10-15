import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutus lg:flex-row">
      <div className="flex flex-col gap-8 lg:max-w-[500px]">
        <h1 className="text-3xl text-extrabold lg:text-4xl">About Us</h1>
        <p className="text-[#282828] text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
        <p className="text-[#282828] text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="aboutus__images">
        <div className="aboutus__main-image">
          <Image
            src="/car-main.jpg"
            fill
            className="object-cover scale-[140%] object-center"
            alt="car-img"
          />
        </div>

        <div className="aboutus__sub-image--top">
          <span className="sm:text-3xl text-xl">+10 years</span>
          <span className="font-light">Experience</span>
        </div>
        <div className="aboutus__sub-image--bottom">
          <Image
            src="/car-secondary.jpg"
            fill
            className="object-cover object-center"
            alt="car-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
