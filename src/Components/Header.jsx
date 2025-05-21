import React, { useState } from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full px-4 py-3  relative z-20">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className="md:w-20 w-10 " alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10 font-bold text-black">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <p>Order</p>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden focus:outline-none z-30"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* CTA Button Desktop */}
        <a
          href="https://selar.co/fj932q"
          target="_blank"
          className="hidden lg:inline-block"
        >
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] px-7 py-3 border-black border-2 text-base">
            Get Your Copy
          </button>
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10 p-4 rounded-b-md">
          <div className="flex flex-col space-y-4 font-bold text-black">
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
            <p>Order</p>
            <Link to="/products" onClick={toggleMobileMenu}>
              Products
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu}>
              Contact
            </Link>
            <a
              href="https://selar.co/fj932q"
              target="_blank"
              onClick={toggleMobileMenu}
            >
              <button className="w-full bg-ipurple text-white py-2 rounded-md border-black border-2">
                Get Your Copy
              </button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
