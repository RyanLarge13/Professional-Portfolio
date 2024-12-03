import React from "react";
import logo from "../assets/logoWhite.png";
import navLinks from "../constants/navLinks";

const Footer = () => {
  return (
    <div className="py-20 flex flex-col justify-between items-center">
      <img src={logo} alt="logo" className="aspect-square w-10 mb-10" />
      <ul className=" flex flex-wrap gap-x-5 mx-10 justify-center items-center">
        {navLinks.map((link, index) => (
          <li key={index} className="my-10">
            <a
              href={link.href}
              className="text-sm bold hover:text-pink-500 duration-200"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
