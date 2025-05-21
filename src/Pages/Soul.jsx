import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/soul.webp";
import BookTwo from "../assets/book-1.webp";
import IconLemon from "../assets/icons/lemon-box.svg";
import IconRed from "../assets/icons/red-box.svg";
import IconBlue from "../assets/icons/blue-round.svg";
import HeroTape from "../assets/hero-tape.webp";

const Soul = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative lg:p-10 p-10 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="bg-[#6456CA] grid grid-cols-2 h-[500px] mt-10 rounded-[25px] relative">
              <div>
                <img
                  src={HeroImage}
                  alt="Hero-text"
                  className="w-[320px] pt-24 pl-20"
                />
                <p className="text-xl font-medium pl-20 mt-5 text-white">
                  Where Your Inner World <br /> Gets To Breathe.
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
            <p className="head">JIO- The Soul dump</p>
            <p className="subhead mt-5">
              The Soul Dump is your safe, sacred space to write without
              judgment. No prompts, no boxes, no pressure — just blank pages
              that hold whatever is weighing on your heart or dancing in your
              head. Whether it’s a brain dump, an emotional release, or pure
              free writing, this journal helps you exhale in ink. Created for
              moments when structure is too loud and all you need is a place to
              just be; The Soul Dump helps you make space on the outside for
              what’s crowding you on the inside.
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-10 mt-14 space-y-10">
            <div className="bg-[#FE572A] rounded-[35px] p-12 border-black border-[4px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" />
            </div>
            <div>
              <p className="head">Key Features</p>
              <ul className="subhead list-disc pl-7 mt-5">
                <li>100% blank pages — no prompts, no rules</li>
                <li>
                  Ideal for journaling, brain dumps, venting, or sketching
                </li>
                <li>Thick paper that absorbs pen, pencil, or marker</li>
                <li>Lay-flat binding for easy, relaxed writings</li>
                <li>Compact enough to carry everywhere</li>
                <li>A release space for mental and emotional clarity</li>
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

export default Soul;
