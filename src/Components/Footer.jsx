import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:p-7 p-5 ">
      <div className="bg-[#6456CA] px-5 sm:px-10 lg:px-20 py-5 lg:py-10 rounded-2xl border-black border-[2px]">
        <div className="lg:flex justify-between md:border-b border-white pb-10">
          <div>
            <Link
              to="/"
              className="font-bold lg:text-[42px] text-2xl leading-[48px] text-white"
            >
              JuiceItOut
            </Link>
            <div className="flex md:space-x-10 justify-between text-white md:text-base text-xs font-bold lg:mt-7 mt-3 md:border-none border-b border-white pb-10 md:pb-0">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <p>Order</p>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <p className="text-white leading-[48px] text-lg font-semibold">
              Join our community
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="block w-full rounded-[9px] py-3 px-5 bg-transparent text-white ring-1 ring-white placeholder:text-white focus:ring-0 focus:ring-0"
              />
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-[#FE572A] text-black rounded-[14px] border-0 p-3 text-black px-8 text-xl lg:w-full lg:w-52 border-black border-[2px] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="md:mt-10 lg:flex md:flex justify-between text-white">
          <p className=" lg:text-base text-[14px] font-bold text-center">
            2025 Juice It Out. All rights reserved
          </p>
          <p className="font-medium lg:text-sm text-[10px] text-center">
            Designed by Artemis Studio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
