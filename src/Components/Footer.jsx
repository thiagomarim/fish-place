import React from "react";
import Logo from '../assets/logo.svg?react'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-blue-white p-[40px]">
      <p className="text-white text-xl">FishPlace 2024 - Alguns direitos reservados.</p>
    <Logo />
    </footer>
  );
};

export default Footer;
