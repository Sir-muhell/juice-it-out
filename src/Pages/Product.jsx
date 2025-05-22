import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/browse.webp";
import HeroImageSm from "../assets/browse-2.webp";
import Book from "../assets/book-4.webp";
import BookTwo from "../assets/book-1.webp";
import BookThree from "../assets/book-2.webp";
import IconYellow from "../assets/icons/lemon-star.svg";
import IconLemon from "../assets/icons/lemon-box.svg";
import IconBlue from "../assets/icons/blue-round.svg";
import HeroTape from "../assets/hero-tape.webp";

const Product = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative md:p-10 p-5 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="bg-[#E87721] md:grid grid-cols-2 h-[500px] mt-10 rounded-[25px] relative overflow-hidden">
              <div>
                <img
                  src={HeroImage}
                  alt="Hero-text"
                  className="md:w-[320px] w-[261px] md:pt-24 md:pl-20 md:m-0 m-auto pt-10 md:block hidden"
                />
                <img
                  src={HeroImageSm}
                  alt="Hero-text"
                  className=" w-[261px] m-auto pt-10 md:hidden"
                />
                <p className="md:text-xl text-base md:text-left text-center font-medium md:pl-20 mt-5">
                  We’ve got a journal for <br className="md:block hidden" />
                  everything
                </p>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src={Book}
                  alt=""
                  className=" md:pr-16 md:pb-16 md:px-0 px-10 md:mt-0 mt-5"
                />
              </div>
              <img
                src={IconYellow}
                alt="icon-purple"
                className="md:w-[112px] w-8 absolute bottom-40 -right-14 z-10"
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
            alt="icon-purple"
            className="md:w-[112px] w-8 absolute top-[700px] -left-80"
          />
          <img
            src={IconLemon}
            alt="icon-purple"
            className="md:w-[112px] w-8 absolute bottom-96 -right-72"
          />
          <div>
            <p className="head">Empowering Your Ideas to Thrive</p>
            <p className="subhead mt-5">
              At Juice It Out, we believe that every idea has the potential to
              change the world. Our mission is to provide you with the tools,
              guidance, and support needed to transform your thoughts into
              impactful realities.
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-10 mt-14 space-y-10">
            <div className="bg-[#FFCF57] rounded-[35px] p-12 border-black border-[2px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" />
            </div>
            <div>
              <p className="head">JIO- Ideas Journal</p>
              <p className="subhead mt-5">
                At Juice It Out, we believe that every idea has the potential to
                change the world. Our mission is to provide you with the tools,
                guidance, and support needed to transform your thoughts into
                impactful realities.
              </p>
              <a href="/products/ideas-journal">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 md:p-3 p-2 px-7 text-black text-base border-black border-2 mt-8">
                  Learn More
                </button>
              </a>
            </div>
            <div className="bg-[#17B882] rounded-[35px] p-12 border-black border-[2px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" />
            </div>
            <div>
              <p className="head">JIO- Echoes & Light</p>
              <p className="subhead mt-5">
                Echoes and Light is not just a sermon journal — it’s a sacred
                space where the whispers of heaven are captured and illuminated
                for daily practice. It’s built for Christians who desire more
                than just note-taking, but transformation. With thoughtful
                prompts and structure, the journal turns teachings, revelations,
                and prophecies into tools for intentional living.
              </p>
              <div className="space-x-5">
                <a href="/products/echoes-and-light">
                  <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 md:p-3 p-2 px-7 text-black md:text-base text-[15px] border-black border-2 mt-8">
                    Learn More
                  </button>
                </a>
                <button
                  disabled
                  className=" bg-transparent text-black rounded-[14px] border-0 md:p-3 p-2 px-7 text-black md:text-base text-[15px] border-black border-2 mt-8"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div className="bg-[#6456CA] rounded-[35px] p-12 border-black border-[2px] flex items-center justify-center">
              <img src={BookTwo} alt="joi-book" />
            </div>
            <div>
              <p className="head">JIO- The Soul Dump</p>
              <p className="subhead mt-5">
                The Soul Dump is your emotional escape room — a raw, blank space
                where you can empty your mind and pour your heart without
                filters or format. No prompts, no pressure, no perfection. Just
                you, the page, and whatever needs to be released.
              </p>
              <div className="space-x-5">
                <a href="/products/soul-dump">
                  <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 md:p-3 p-2 px-7 text-black md:text-base text-[15px] border-black border-2 mt-8">
                    Learn More
                  </button>
                </a>
                <button
                  disabled
                  className=" bg-transparent text-black rounded-[14px] border-0 md:p-3 p-2 px-7 text-black md:text-base text-[15px] border-black border-2 mt-8"
                >
                  Coming Soon
                </button>
              </div>
            </div>
            <div className="bg-[#FFA0CA] rounded-[35px] p-12 border-black border-[2px] flex items-center justify-center">
              <img
                src={BookThree}
                alt="joi-book"
                className="rotate-[20.3deg]"
              />
            </div>
            <div>
              <p className="head">JIO- Pocket Buddy</p>
              <p className="subhead mt-5">
                The Pocket Buddy is your creative sidekick — a slim, blank
                notebook made to go wherever you do. It helps you jot down raw
                thoughts, random sparks, and sudden genius the moment they hit.
                When you’re ready, bring those ideas to life with structure and
                depth in your Juice It Out Ideas Journal.
              </p>
              <a href="/products/pocket-buddy">
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 md:p-3 p-2 px-7 text-black md:text-base text-[15px] border-black border-2 mt-8">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
