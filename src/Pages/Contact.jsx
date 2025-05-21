import React from "react";
import Header from "../Components/Header";
import HeroImage from "../assets/contact-us.webp";
import Book from "../assets/book-2.webp";
import IconYellow from "../assets/icons/lemon-star.svg";
import IconBlue from "../assets/icons/blue-round.svg";
import HeroTape from "../assets/hero-tape.webp";
import Ig from "../assets/icons/ig.svg";
import Fb from "../assets/icons/fb.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Mail from "../assets/icons/mail.svg";

const Contact = () => {
  return (
    <div className="font-dm ">
      <div className="relative  bg-cover">
        <div className="relative md:p-10 p-5 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
            <div className="bg-[#E87721] md:flex h-[500px] mt-10 rounded-[25px] relative overflow-hidden">
              <div>
                <img
                  src={HeroImage}
                  alt="Hero-text"
                  className="md:w-[320px] w-[234px] md:pt-24 md:pl-20 md:m-0 m-auto pt-10"
                />
                <p className="md:text-xl text-base md:text-left text-center font-medium md:pl-20 mt-5 md:px-0 px-14 capitalize">
                  Got a question? A bright idea? Or just want to say hi?
                </p>
              </div>
              {/* <div className="flex items-center justify-center overflow-hidden h-full">
                <img src={Book} alt="" className="w-[90%] hidden md:block" />
              </div> */}
              <div
                className="flex 
              items-center justify-center overflow-hidden h-full"
              >
                <img
                  src={Book}
                  alt=""
                  className="w-[90%] rotate-[20deg] md:hidden block -mt-36"
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
      <div className="p-5 sm:p-10 lg:p-64 lg:pt-0  lg:pb-20 overflow-hidden relative">
        <div className="relative">
          <div>
            <p className="head w-[70%]">
              Connect With Us, Let’s Get Your Ideas Out There.
            </p>
            <p className="subhead mt-5">
              We’re always excited to hear from fellow builders and thinkers.
              Whether you’re looking to partner, collaborate, give feedback, or
              need help with your journal, we’re just one message away. <br />
              Drop us a line — we promise it won’t get lost in the noise
              (because clarity is kind of our thing 😉)
            </p>
            <div className="md:grid grid-cols-2 mt-10 gap-5">
              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="block w-full rounded-[9px] py-3 px-5 bg-transparent text-black ring-2 ring-black placeholder:text-gray focus:ring-0 focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="block w-full rounded-[9px] py-3 px-5 bg-transparent text-black ring-2 ring-black placeholder:text-gray focus:ring-0 focus:ring-0"
                />
                <input
                  type="text"
                  placeholder="Phone Number/WhatsApp"
                  className="block w-full rounded-[9px] py-3 px-5 bg-transparent text-black ring-2 ring-black placeholder:text-gray focus:ring-0 focus:ring-0"
                />
              </div>
              <textarea
                type="text"
                rows={5}
                placeholder="Type you message here..."
                className="block w-full rounded-[9px] py-3 px-5 bg-transparent text-black ring-2 ring-black placeholder:text-gray focus:ring-0 focus:ring-0 mt-5 md:mt-0"
              />

              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-ipurple text-white rounded-[14px] border-0 p-4 text-black text-base border-black border-2 md:w-fit w-full mt-5 md:mt-0">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="justify-between md:flex text-xl font-medium mt-16 hidden">
          <a href="mailto:community@juiceitout.com">
            Email: community@juiceitout.com
          </a>
          <a href="https://instagram.com/juiceitout1/" target="_blank">
            Instagram: @juiceitout1
          </a>
          <a
            href="https://facebook.com/profile.php?id=61572443378802"
            target="_blank"
          >
            Facebook: Juice It Out
          </a>
        </div>
        <div className="space-x-4 flex mt-10 justify-center">
          <img src={Mail} alt="mail-icon" />
          <img src={LinkedIn} alt="mail-icon" />
          <img src={Ig} alt="mail-icon" />
          <img src={Fb} alt="mail-icon" />
        </div>
        <img
          src={IconBlue}
          alt="icon-purple"
          className="md:w-[112px] w-8 absolute bottom-0 -left-10"
        />
      </div>
    </div>
  );
};

export default Contact;
