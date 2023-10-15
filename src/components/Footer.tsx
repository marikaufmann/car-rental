import Image from "next/image";
import React from "react";
import { footerLinks } from "../../constants";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer" id="footer">
      <div className="footer__links-container ">
        <div className="footer__rights">
          <Image
            src="/logo-2.svg"
            width={118}
            height={18}
            alt="Car Hub Logo"
            className="object-contain"
          />
          <p>
            Carhub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((section) => (
            <div key={section.title} className="footer__link">
              <h3 className="font-bold">{section.title}</h3>
              {section.title === "Socials"
                ? section.links.map((link) => (
                    <div>
                      <Link
                        href="/"
                        className="flex gap-3 itens-center w-auto h-auto">
                        <Image
                          src={link.icon}
                          width={20}
                          height={20}
                          alt="icon"
                          className="object-contain"
                        />

                        {link.title}
                      </Link>
                    </div>
                  ))
                : section.links.map((link) => (
                    <Link href="/">{link.title}</Link>
                  ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights">
        <p>@{date} CarHub.{' '} All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
