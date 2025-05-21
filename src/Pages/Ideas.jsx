import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/ideas.webp";
import BookTwo from "../assets/book-1.webp";
import IconLemon from "../assets/icons/lemon-box.svg";
import IconRed from "../assets/icons/red-box.svg";
import IconBlue from "../assets/icons/blue-round.svg";
import HeroTape from "../assets/hero-tape.webp";

const Ideas = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative md:p-10 p-5 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="bg-[#FFCF57] md:grid grid-cols-2 h-[500px] mt-10 rounded-[25px] relative">
              <div>
                <img
                  src={HeroImage}
                  alt="Hero-text"
                  className="md:w-[320px] w-[261px] md:pt-24 md:pl-20 md:m-0 m-auto pt-10"
                />
                <p className="md:text-xl text-base md:text-left text-center font-medium md:pl-20 mt-5">
                  From Scattered Thoughts <br />
                  To Structured Brilliance.
                </p>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img src={BookTwo} alt="" className=" pr-10 pb-10" />
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
            <p className="head">JIO- Ideas Journal</p>
            <p className="subhead mt-5">
              The JIO Ideas Journal is more than just a place to write things
              down — it’s your thinking partner. Designed for people who
              constantly have ideas but struggle to bring them to life, this
              journal helps you organize, process, and execute your thoughts in
              a way that feels natural, not forced. It merges introspection with
              action, allowing you to meet your ideas wherever you are — not
              where a template expects you to be. Built with soul and intention,
              this is where your lightbulb moments finally become your next big
              move.
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-10 mt-14 space-y-10">
            <div className="bg-[#17B882] rounded-[35px] p-12 border-black border-[4px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" />
            </div>
            <div>
              <p className="head">Key Features</p>
              <ul className="subhead list-disc pl-7 mt-5">
                <li>Guided framework to move from idea to execution</li>
                <li>Space for raw idea capture, brainstorming, and planning</li>
                <li>Reflection prompts that merge clarity and intuition</li>
                <li>Fluid structure that adapts to your workflow</li>
                <li> Undated layout — start anytime, pause anytime</li>
                <li>Designed for visionaries, creators, and problem-solvers</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 subhead">
            Every Box of The Juice it Out Ideas Journal comes with a copy of the
            Pocket Buddy to help you quickly capture your ideas anytime and
            anywhere. Get started with your ideas already, the world can’t wait
            to have them.
          </p>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 p-3 px-7 text-black text-base border-black border-2 mt-8">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
