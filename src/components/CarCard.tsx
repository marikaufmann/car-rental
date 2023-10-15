"use client";
import React, { useState } from "react";
import { CarProps } from "../../types";
import { calculateCarRent, generateCarImageUrl } from "../../utils";
import Image from "next/image";
import { CarDetails, CustomButton } from ".";
type CarCartProps = {
  car: CarProps;
};
const CarCard = ({ car }: CarCartProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="car-card__price">
        <span className="car-card__price-dollar">$</span>
        {carRent}
        <span className="car-card__price-day">/day</span>
      </p>
      <div className="car-card__image">
        <Image
          src={generateCarImageUrl(car, '23')}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative w-full mt-4">
        <div className="car-card__icon-container group-hover:invisible text-gray ">
          <div className="car-card__icon">
            <Image
              src="steering-wheel.svg"
              width={20}
              height={20}
              alt="steering-wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container group-hover:flex ">
          <CustomButton
            title="View More"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            containerStyles="rounded-full w-full py-[16px] bg-[#0e1d21] hover:bg-[#0e1d21]/90 active:bg-[#0e1d21]/80 px-6"
            textStyles="text-[15px] text-[#f3efec] hover:text-[#f3efec]/90 active:text-[#f3efec]/80 leading-[17px] font-bold tracking-wide"
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
