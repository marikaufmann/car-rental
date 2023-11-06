import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <nav className="navbar z-20">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Car Hub Logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>
      <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="bg-transparent"
        textStyles="transition ease-out hover:opacity-90 active:opacity-80"
      />
    </nav>
  );
};

export default Navbar;
