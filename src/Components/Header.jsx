import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center space-y-4 lg:space-y-0 flex-row justify-between relative z-20">
      <Link to="/">
        <img src={Logo} className="w-20 z-20" />
      </Link>
      <div className="flex space-x-10 text-black text-center font-bold lg:flex hidden">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <p>Order</p>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <a href="https://selar.co/fj932q" target="_blank">
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 p-3 px-7 text-black text-base border-black border-2">
          Get Your Copy
        </button>
      </a>
    </div>
  );
};

export default Header;
