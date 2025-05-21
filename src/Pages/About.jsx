import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/about-text.webp";
import Book from "../assets/book-4.webp";
import IconYellow from "../assets/icons/lemon-star.svg";
import HeroTape from "../assets/hero-tape.webp";
import IconBlue from "../assets/icons/blue-round.svg";
import IconLemon2 from "../assets/icons/lemon-star.svg";
import BookTwo from "../assets/book-1.webp";
import BookThree from "../assets/book-3.webp";
import Person from "../assets/person2.webp";

const About = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative lg:p-10 p-5 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="bg-[#E87721] md:grid grid-cols-2 h-[500px] mt-10 rounded-[25px] relative overflow-hidden">
              <div>
                <img
                  src={HeroImage}
                  alt="Hero-text"
                  className="md:w-[320px] w-[239px] m-auto md:m-0 pt-10 md:pt-24 md:pl-20"
                />
                <p className="md:text-xl text-base font-medium md:pl-20 mt-5 text-center">
                  Empowering Your Ideas To Thrive
                </p>
              </div>
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src={Book}
                  alt=""
                  className=" md:pr-16 pb-16 md:px-0 px-10 md:mt-5 mt-3"
                />
              </div>
              <img
                src={IconYellow}
                alt="icon-purple"
                className="md:w-[112px] w-8 absolute bottom-5 -right-14 z-10"
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
          <div>
            <p className="head">Empowering Your Ideas to Thrive</p>
            <p className="subhead mt-5">
              At Juice It Out, we believe that every idea has the potential to
              change the world. Our mission is to provide you with the tools,
              guidance, and support needed to transform your thoughts into
              impactful realities.
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-11 mt-10 gap-10">
          <div className="col-span-5">
            <p className="head">Our Mission</p>
            <p className="subhead mt-5">
              To empower individuals to harness their creativity, organize their
              thoughts, and execute their ideas effectively, leading to personal
              and professional growth.
            </p>
          </div>
          <div className="col-span-6 bg-[#FFCF57] rounded-[10px] h-[256px] border-black border-[3px]  overflow-hidden flex items-center justify-center max-h-[256px] mt-10">
            <img
              src={BookTwo}
              alt="Book Mock-up"
              className="h-[100%] object-cover "
            />
          </div>
        </div>
        <div className="md:grid grid-cols-10 mt-20 gap-10 space-y-10">
          <div className="col-span-5">
            <p className="head">Our Approach</p>
            <p className="subhead mt-5">
              We understand that the journey from concept to execution can be
              challenging. That’s why we’ve designed the Juice It Out Ideas
              Journal to be more than just a notebook. It’s a comprehensive
              system that helps you:
            </p>
            <ul className="subhead list-disc pl-7">
              <li>
                Capture Ideas: Quickly jot down inspirations before they fade.
              </li>
              <li>
                Organize Thoughts: Structure your ideas logically to see the
                bigger picture.
              </li>
              <li>
                Plan Execution: Break down your ideas into actionable steps.
              </li>
              <li>
                Track Progress: Monitor your journey and celebrate milestones.
              </li>
            </ul>
          </div>
          <div className="col-span-5">
            <p className="head">Why Choose The Juice It Out Ideas Journal</p>
            <ul className="subhead list-disc pl-7 mt-5">
              <li>
                Tailored for Innovators: Designed specifically for thinkers,
                creators, and entrepreneurs.
              </li>
              <li>
                Proven Frameworks: Incorporates methodologies that have been
                tested and refined.
              </li>
              <li>
                Community Support: Join a network of like-minded individuals all
                striving to bring their ideas to life.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#FE572A] rounded-[10px] h-[419px] border-black border-[3px]  overflow-hidden flex items-center justify-center mt-16">
          <img
            src={BookThree}
            alt="Book Mock-up"
            className=" object-cover h-[120%] mt-40 "
          />
        </div>
        <div className="relative w-full">
          <div className="max-w-5xl mx-auto pt-20">
            <div className="custom-wrap relative">
              <p className="head block md:hidden mb-5">
                The Creator behind The Juice It Out Brand.
              </p>
              <img
                src={Person}
                alt="Floating Image"
                className="float-left mr-10 mb-4 md:w-[40%] md:max-w-[300px] w-full rounded-xl object-cover"
              />
              <p className="head md:block hidden">
                The Creator behind The Juice It Out Brand.
              </p>
              <p className="subhead mt-5">
                I’m Olamide Femi-Onafadeji. I’m quite intrigued that you want to
                know about me—and I’m also delighted to meet you.
                <br />
                <br /> I created this journal for people like you: intentional,
                brilliant, and full of ideas that deserve room to breathe.
                <br /> But let’s be honest—life gets full. And sometimes, even
                your best ideas get pushed to the back burner. <br /> <br /> I
                know, because I’ve been there. The Juice It Out Ideas Journal
                wasn’t born from theory. It was born from a deep need to
                structure my own ideas, clear mental clutter, and move with
                clarity again—not with pressure, but with presence. <br />
                <br /> This isn’t just a journal. It’s a thinking space. A truth
                space. A momentum space. I didn’t create it to give you answers.
                I created it to help you hear your own—clearly, calmly, and
                consistently. <br />
                <br /> So if you’ve been carrying around too many tabs
                open—mentally and emotionally—this is your invitation to close
                the noise and come home to what matters.
                <br />
                <br />
                <span className="font-bold"> Let’s juice it out.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="head">Join Us on This Journey</p>
          <p className="subhead mt-5">
            Your ideas deserve to be heard, seen, and felt. With the Juice It
            Out Ideas Journal, you’re not just writing them down; you’re setting
            them in motion. Let’s embark on this journey together and turn your
            concepts into impactful realities.
            <br />
            The world needs your ideas. Let’s make them happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
