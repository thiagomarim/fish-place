import React from "react";
import Logo from '../assets/logo.svg?react'

const Footer = () => {
  return (
    <footer className="flex flex-wrap lg:flex-nowrap justify-between items-center bg-blue-white p-[20px] lg:p-[40px]">
      <p className="text-white text-base lg:text-xl">FishPlace 2024 - Alguns direitos reservados.</p>
    <Logo />
    </footer>
  );
};

export default Footer;
