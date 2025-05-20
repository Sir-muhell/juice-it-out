import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/pocket.webp";
import BookTwo from "../assets/book-2.webp";
import IconLemon from "../assets/icons/lemon-box.svg";
import IconRed from "../assets/icons/red-box.svg";
import IconBlue from "../assets/icons/blue-round.svg";
import HeroTape from "../assets/hero-tape.webp";

const Pocket = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative lg:p-10 p-10 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="relative">
              <div className="bg-[#FFA0CA] grid grid-cols-2 h-[500px] mt-10 rounded-[25px] relative  overflow-hidden">
                <div>
                  <img
                    src={HeroImage}
                    alt="Hero-text"
                    className="w-[320px] pt-24 pl-20"
                  />
                  <p className="text-xl font-medium pl-20 mt-5">
                    Where Your Inner World <br /> Gets To Breathe.
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={BookTwo}
                    alt="Book Mock-up"
                    className="h-[120%] object-cover absolute -top-28 -right-40"
                  />
                </div>
              </div>
              <img
                src={IconLemon}
                alt="icon-purple"
                className="w-[112px] absolute bottom-10 -right-14 z-10"
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
            className="w-[112px] absolute top-[700px] -left-80"
          />
          <img
            src={IconRed}
            alt="icon-red"
            className="w-[112px] absolute bottom-16 -right-72"
          />
          <div>
            <p className="head">JIO- Pocket Buddy</p>
            <p className="subhead mt-5">
              Your mind doesn’t wait till you’re home. Pocket Buddy is your
              quick-capture creative sidekick — a slim notepad made for
              scribbles, flashes of genius, and messy first thoughts. Toss it in
              your bag, your car, your back pocket, and let it catch what your
              mind creates on the fly. Later, when you’re in a quiet space, you
              can bring those ideas to life inside your JIO Ideas Journal. Think
              of it as your brain’s outpost in the real world — compact, cool,
              and always ready.
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-10 mt-14 space-y-10">
            <div className="bg-[#FFCF57] rounded-[35px] p-12 border-black border-[4px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" className="rotate-[20.3deg]" />
            </div>
            <div className="flex  items-center">
              <div className="flex-row">
                <p className="head">Key Features</p>
                <ul className="subhead list-disc pl-7 mt-5">
                  <li>Compact, pocket-sized for mobility</li>
                  <li>Minimal, clean design for fast idea capture</li>
                  <li>Pages for versatility (sketches or notes)</li>
                  <li>Durable cover for on-the-go handling</li>
                  <li>Perfect companion to the JIO Ideas Journal</li>
                  <li>Ideal for creatives, planners, and innovators</li>
                </ul>
              </div>
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

export default Pocket;
