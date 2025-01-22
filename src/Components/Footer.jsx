import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#3570F5] px-5 sm:px-10 lg:px-20 py-5 lg:py-10">
      <div className="lg:flex justify-between border-b border-white pb-10">
        <div>
          <p className="font-bold lg:text-[42px] text-2xl leading-[48px] text-white">
            JuiceItOut
          </p>
          <div className="flex space-x-10 text-white text-base font-bold lg:mt-7 mt-3">
            <p>Home</p>
            <p>About</p>
            <p>Order</p>
            <p>Contact</p>
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
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-black-button-gradient text-white rounded-[14px] border-0 p-3 text-black text-xl w-full lg:w-52">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:flex justify-between text-white">
        <p className=" lg:text-base text-[14px] font-bold text-center">
          2025 Juice It Out. All rights reserved
        </p>
        <p className="font-medium lg:text-sm text-[10px] text-center">
          Designed by Dynamic Graphiks Media
        </p>
      </div>
    </div>
  );
};

export default Footer;
