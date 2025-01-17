import React from "react";
import bg from "../assets/bg.png";
import Button from "../Components/Button";

const Home = () => {
  return (
    <div className="font-inter ">
      <div className="relative p-10 lg:p-20">
        <img
          src={bg}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        />
        <div className="relative text-center">
          <p className="text-xl font-semibold text-igrey">Light your Spark</p>
          <p className="text-7xl font-semibold leading-[95px] text-black">
            Where Ideas Take Flight.
          </p>
          <p className="text-xl font-medium mt-5  text-igrey">
            Your journal, your masterpiece. Lightweight, powerful, and ready to
            bring your vision to life.
          </p>
          <div className="bg-[#D9D9D9] h-80 mt-10 rounded-3xl"></div>
          <div className="mt-12">
            <Button />
            <p className="mt-4 font-medium text-xl text-igrey">
              *Limited Copies Available
            </p>
          </div>
        </div>
      </div>
      <div className="p-10 lg:p-20">
        <div>
          <p className="font-medium text-xl">Where Ideas Take the Spotlight</p>
          <p className="mt-5 font-bold text-[40px] leading-[48px]">
            Ideas Rule the World. Let Yours Lead.
          </p>
          <p className="mt-5 font-medium text-xl leading-9">
            You’ve had that spark, that one moment of inspiration. But where
            does it go? With the Juice It Out Journal, you can capture, refine,
            and execute your ideas with precision. This isn’t just a
            journal—it’s your blueprint for success.
          </p>
        </div>
        <div className="bg-[#E8F4FF] h-96 mt-10 rounded-3xl"></div>
        <div className="mt-12 text-center">
          <Button />
          <p className="mt-4 font-medium text-xl">*Limited Copies Available</p>
        </div>
      </div>
      <div className="p-10 lg:p-20">
        <div>
          <p className="font-medium text-xl">
            Sleek. Powerful. Transformational.
          </p>
          <p className="mt-5 font-bold text-[40px] leading-[48px]">
            A Tool That Works as Hard and Smart as You Do.
          </p>
          <p className="mt-5 font-medium text-xl leading-9">
            Meet the tool that bridges the gap between fleeting thoughts and
            tangible results. Designed to guide, inspire, and transform, this
            journal is perfect for dreamers, doers, and changemakers. It’s where
            innovation meets execution.
          </p>
        </div>
        <div className="bg-[#E8F4FF] h-96 mt-10 rounded-3xl"></div>
        <div className="mt-12 text-center">
          <Button />
          <p className="mt-4 font-medium text-xl">*Limited Copies Available</p>
        </div>
      </div>
      <div className="p-10 lg:p-20">
        <div>
          <p className="font-medium text-xl">Designed for Dreamers and Doers</p>
          <p className="mt-5 font-bold text-[40px] leading-[48px]">
            Where Inspiration Meets Structure.
          </p>
          <p className="mt-5 font-medium text-xl leading-9">
            This isn’t just a journal—it’s the canvas where your boldest ideas
            take shape. Designed to bring order to your creativity, it provides
            the clarity you need without dimming the spark that drives you.
            Every page invites you to think deeply, while gentle prompts guide
            your thoughts into actionable brilliance.
          </p>
          <p className="font-medium text-xl leading-9">
            Let your ideas flow freely, knowing there’s a space that holds them
            with intention and purpose.
          </p>
        </div>
        <div className="lg:grid grid-cols-2 gap-12">
          <div className="bg-[#E8F4FF] h-96 mt-10 rounded-3xl"></div>
          <div className="bg-[#E8F4FF] h-96 mt-10 rounded-3xl"></div>
        </div>

        <div className="mt-12 text-center">
          <Button />
          <p className="mt-4 font-medium text-xl">*Limited Copies Available</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
