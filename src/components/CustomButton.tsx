"use client";
import React from "react";
import { CustomButtonProps } from "../../types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  handleClick,
  isDisabled,
  rightIcon,
  anchor,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}>
      {anchor ? (
        <AnchorLink href={`#${anchor}`} className={`flex-1 ${textStyles}`}>
          {title}
        </AnchorLink>
      ) : (
				<>
        <span className={`flex-1 ${textStyles}`}>{title}</span>
				{rightIcon && <div className="relative w-6 h-6">
					<Image src={rightIcon} fill className='object-contain' alt='right icon'/>
					</div>}
				</>
      )}
    </button>
  );
};

export default CustomButton;
