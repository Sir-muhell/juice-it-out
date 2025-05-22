import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/echoes.webp";
import HeroImageSm from "../assets/echoes-2.webp";
import BookTwo from "../assets/book-1.webp";
import IconLemon from "../assets/icons/lemon-box.svg";
import IconRed from "../assets/icons/red-box.svg";
import IconBlue from "../assets/icons/blue-round.svg";
import HeroTape from "../assets/hero-tape.webp";

const Echoes = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative lg:p-10 p-5 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="bg-[#17B882] md:grid grid-cols-2 h-[500px] mt-10 rounded-[25px] relative overflow-hidden">
              <div>
                <img
                  src={HeroImage}
                  alt="Hero-text"
                  className="md:w-[320px] w-[231px] md:pt-24 md:pl-20 md:m-0 m-auto pt-10 hidden md:block"
                />
                <img
                  src={HeroImageSm}
                  alt="Hero-text"
                  className="w-[231px] m-auto pt-10 md:hidden"
                />
                <p className="md:text-xl text-base  md:text-left text-center font-medium md:pl-20 mt-5">
                  Catch the Word. Carry the Light.
                </p>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src={BookTwo}
                  alt=""
                  className=" md:pr-10 pb-10 md:mt-0 mt-5 w-[250%]"
                />
              </div>
              <img
                src={IconLemon}
                alt="icon-purple"
                className="md:w-[112px] w-8 absolute bottom-10 -right-14 z-10"
              />
            </div>
          </div>
        </div>
        <img
          src={HeroTape}
          alt="hero-image2"
          className="absolute bottom-0 left-0 w-full "
        />
      </div>
      <div className="p-5 sm:p-10 lg:p-64 lg:pt-0  lg:pb-20 overflow-hidden">
        <div className="relative">
          <img
            src={IconBlue}
            alt="icon-blue"
            className="md:w-[112px] w-8 absolute top-[700px] -left-80"
          />
          <img
            src={IconRed}
            alt="icon-red"
            className="md:w-[112px] w-8 absolute bottom-16 -right-72"
          />
          <div>
            <p className="head">JIO- Echoes & Light</p>
            <p className="subhead mt-5">
              Echoes and Light is the JIO Sermon Journal created for believers
              who are intentional about stewarding God’s Word. It gives
              structure to your spiritual growth by helping you record, reflect,
              and revisit teachings, instructions, and prophecies. Whether
              you’re writing down a Sunday message, tracking your mindset
              shifts, or anchoring a word God gave you in prayer, this journal
              becomes a spiritual archive — one you can trace, trust, and grow
              from. This is how you echo the truth and walk in the light.
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-10 mt-14 space-y-10       ">
            <div className="bg-[#FFCF57] rounded-[35px] p-12 border-black border-[4px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" />
            </div>
            <div>
              <p className="head">Key Features</p>
              <ul className="subhead list-disc pl-7 mt-5">
                <li>Structured layout for sermon notes and key scriptures</li>
                <li>
                  Dedicated space for prophecies and spiritual instructions
                </li>
                <li>Reflection prompts for personal growth tracking</li>
                <li>Weekly spiritual review pages</li>
                <li> Helps you build a blueprint for living out the Word</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 subhead">
            Every Box of The Juice it Out Ideas Journal comes with a copy of the
            Pocket Buddy to help you quickly capture your ideas anytime and
            anywhere. Get started with your ideas already, the world can’t wait
            to have em.
          </p>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 p-3 px-7 text-black text-base border-black border-2 mt-8">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Echoes;
