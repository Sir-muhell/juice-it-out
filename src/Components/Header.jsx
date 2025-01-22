import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center space-y-4 lg:space-y-0 flex-row justify-between relative">
      <p className="text-black font-black text-3xl lg:mt-0  mt-4">JuiceItOut</p>
      <div className="flex space-x-10 text-black text-center font-bold lg:flex hidden">
        <p>Home</p>
        <p>About</p>
        <p>Order</p>
        <p>Contact</p>
      </div>
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-black-button-gradient text-white rounded-[14px] border-0 p-3 text-black lg:text-xl sm:text-base text-sm  w-fit lg:w-52">
        Join Community
      </button>
    </div>
  );
};

export default Header;
