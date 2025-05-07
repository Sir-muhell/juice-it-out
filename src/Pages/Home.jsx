import React, { useState } from "react";
import HeroText from "../assets/hero-text.webp";
import HeroImage from "../assets/hero-image.webp";
import HeroTape from "../assets/hero-tape.webp";
import BookOne from "../assets/book-1.webp";
import BookTwo from "../assets/book-2.webp";
import BookThree from "../assets/book-3.webp";

// Icons
import IconRed from "../assets/icons/red-round.svg";
import IconOrange from "../assets/icons/orange-round.svg";
import IconPurpleTwo from "../assets/icons/purple-round.svg";
import IconPurple from "../assets/icons/purple-box.svg";
import IconLemon from "../assets/icons/lemon-box.svg";
import IconLemon2 from "../assets/icons/lemon-star.svg";
import IconYellow from "../assets/icons/yellow-star.svg";
import IconBlue from "../assets/icons/blue-round.svg";

import Button from "../Components/Button";

import ArrowUp from "../assets/icons/arrow-up.png";
import ArrowDown from "../assets/icons/arrow-down.png";
import Testimonials from "../Components/Testimonial";
import Image from "../assets/mockup.png";
import Image2 from "../assets/mockup-2.png";
import Image3 from "../assets/mockup-3.jpg";
import Video from "../assets/banner.mp4";
import Potential from "../Components/Potential";
import Header from "../Components/Header";

const Home = () => {
  const features = [
    {
      head: "12-Week Progress Framework",
      text: "You know those ideas that sit in the back of your mind, waiting for the right moment? This journal makes sure that moment is now. It transforms your excitement and inspiration into real, tangible steps – no more waiting for the “perfect time.”",
      color: "#FFF7E5",
    },
    {
      head: "Problem-Solution Mapping Section",
      text: "This feature breaks down your ideas into problems, complications, root causes, and solutions, ensuring your thought process stays clear and actionable.",
      color: "",
    },
    {
      head: "Idea Exploration Prompts",
      text: "Thought-provoking questions that guide you to zoom in and out of your idea, uncovering hidden potential and ensuring no detail is overlooked.",
      color: "#E5F2FF",
    },
    {
      head: "Research Dump Space",
      text: "A dedicated area to brain-dump, sketch, and collect all research, inspirations, and insights without disrupting the main flow of your journal. Perfect for capturing spontaneous bursts of creativity.",
      color: "#F0FF9A",
    },
    {
      head: "Planning and Execution Roadmap",
      text: "A one-time deep dive section that transforms your ideas into actionable plans. This isn't about daily or weekly inputs – it’s about creating meaningful milestones.",
      color: "#FFDFED",
    },
    {
      head: "Reflection and Learning Section",
      text: "Capture the lessons, breakthroughs, and even the mistakes. This section helps you refine your process, ensuring every idea leaves you better prepared for the next.",
      color: "#FFC69B",
    },
    {
      head: "Undated Flexibility",
      text: "Start anytime. There are no rigid dates – you’re in control of when to begin, allowing your ideas to flow naturally without external pressure.",
      color: "#D7D1FF",
    },
    {
      head: "Elegant, Minimalist Design",
      text: "The journal’s sleek layout feels inviting, making you want to return to it day after day. Designed to spark creativity without overwhelming the senses.",
      color: "#D0FFF3",
    },
  ];

  const faqs = [
    {
      question:
        "What makes this journal different from other journals in the market?",
      answer:
        "This journal isn’t just for writing down thoughts—it’s a complete system for transforming ideas into reality. With guided prompts, a 12-week progress tracker, research dump spaces, and reflection tools, it’s designed to help you go from brainstorming to execution seamlessly.",
    },
    {
      question: "Who is this journal for?",
      answer:
        "This journal is for anyone who has ideas they want to nurture, execute, and see come to life—whether you’re an entrepreneur, a creative, or simply someone with big dreams.",
    },
    {
      question: "What materials is the journal made of?",
      answer:
        "The journal features premium, eco-friendly paper with a durable, elegant cover. It’s designed to withstand daily use while maintaining a sleek and professional look.",
    },
    {
      question: "Do I need to use the journal daily?",
      answer:
        "Not at all. The journal is designed to fit your pace. You can use it as often as you need to capture your ideas, plan your steps, and reflect on your progress.",
    },
    {
      question: "What size is the journal? Will it fit in my bag?",
      answer:
        "The journal is designed to be portable yet spacious enough for your thoughts. It’s approximately [insert dimensions], making it easy to carry in a bag or backpack.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="font-dm ">
      <div className="relative bg-hero-image bg-cover">
        <div className="relative lg:p-10 p-10 lg:px-64 pt-5 lg:pt-20">
          <div className="z-20">
            <Header />
          </div>

          <div className=" text-center mt-10">
            <p className="text-xl font-medium text-black mb-10">
              Light your Spark
            </p>
            <img src={HeroText} alt="hero-text" className="w-[530px] m-auto" />
            <p className="text-xl font-medium mt-5 text-igrey m-auto w-1/2">
              Your journal, your masterpiece. Lightweight, powerful, and ready
              to bring your vision to life.
            </p>
            <div className="relative w-fit m-auto mt-5">
              <img
                src={HeroImage}
                alt="hero-image"
                className="w-[577px] mb-20"
              />

              <img
                src={IconRed}
                alt="icon-red"
                className="w-[112px] absolute top-10 -right-10"
              />
              <img
                src={IconPurple}
                alt="icon-purple"
                className="w-[112px] absolute bottom-5 -left-10"
              />
            </div>
          </div>
        </div>

        <img
          src={HeroTape}
          alt="hero-image2"
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      <div className="p-5 sm:p-10 lg:p-64 lg:pt-20 space-y-32 lg:pb-20 overflow-hidden">
        <div className="relative">
          <img
            src={IconLemon2}
            alt="icon-purple"
            className="w-[112px] absolute top-10 -right-10"
          />
          <img
            src={IconBlue}
            alt="icon-purple"
            className="w-[112px] absolute bottom-24 -left-20"
          />
          <div>
            <p className="prehead">Where Ideas Take the Spotlight</p>
            <p className="head">Ideas Rule the World. Let Yours Lead.</p>
            <p className="subhead mt-5 w-[80%]">
              You’ve had that spark, that one moment of inspiration. But where
              does it go? With the Juice It Out Journal, you can capture,
              refine, and execute your ideas with precision. This isn’t just a
              journal—it’s your blueprint for success.
            </p>
          </div>
          {/* <div className="bg-[#E8F4FF] h-96 mt-10 rounded-3xl"></div> */}

          <div class="grid grid-cols-2 gap-4 mt-10 relative z-10">
            <div className="bg-[#FFCF57] rounded-[10px] border-black border border-[3px] px-5 py-10">
              <img
                src={BookOne}
                alt="Book Mock-up"
                className="w-full  object-cover rounded-3xl m-auto"
              />
            </div>
            <div className="space-y-5">
              <div className="row-span-3 bg-[#E87721] rounded-[10px] h-[256px] border-black border-[3px]  overflow-hidden flex items-center justify-center max-h-[256px]">
                <img
                  src={BookTwo}
                  alt="Book Mock-up"
                  className="h-[150%] object-cover "
                />
              </div>

              <div className="row-span-3 bg-[#FFA0CA] rounded-[10px] h-[192px] border-black border-[3px]  overflow-hidden flex items-center justify-center">
                <img
                  src={BookThree}
                  alt="Book Mock-up"
                  className="object-contain h-[120%] mt-16"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button />
            <p className="mt-4 prehead">*Limited Copies Available</p>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="prehead">Sleek. Powerful. Transformational.</p>
              <p className="head">
                A Tool That Works as Hard and Smart as You Do.
              </p>
              <p className="subhead mt-5">
                Meet the tool that bridges the gap between fleeting thoughts and
                tangible results. Designed to guide, inspire, and transform,
                this journal is perfect for dreamers, doers, and changemakers.
                It’s where innovation meets execution.
              </p>
            </div>
            <div>
              <p className="prehead">Designed for Dreamers and Doers</p>
              <p className="head">Where Inspiration Meets Structure.</p>
              <p className="subhead mt-5">
                This isn’t just a journal—it’s the canvas where your boldest
                ideas take shape. Designed to bring order to your creativity, it
                provides the clarity you need without dimming the spark that
                drives you. Every page invites you to think deeply, while gentle
                prompts guide your thoughts into actionable brilliance.
              </p>
              <p className="subhead">
                Let your ideas flow freely, knowing there’s a space that holds
                them with intention and purpose.
              </p>
            </div>
          </div>
          <img
            src={IconYellow}
            alt="icon-purple"
            className="w-[112px] absolute -left-32"
          />
          <img
            src={IconLemon}
            alt="icon-purple"
            className="w-[112px] absolute -bottom-10 -right-32"
          />

          <div className="row-span-3 bg-[#FE572A] rounded-[10px] h-[419px] border-black border-[3px]  overflow-hidden flex items-center justify-center mt-16">
            <img
              src={BookThree}
              alt="Book Mock-up"
              className=" object-cover h-[120%] mt-40 "
            />
          </div>
          <div className="mt-12 text-center">
            <Button />
            <p className="mt-4 prehead">*Limited Copies Available</p>
          </div>
        </div>

        <div className="">
          <div>
            <p className="prehead">
              A Journal That Works as Brilliantly as Your Mind
            </p>
            <p className="head">Discover What This Journal Can Do for You</p>
          </div>
          <div className="mt-12">
            <Potential />
          </div>
        </div>

        <div className="relative ">
          <div>
            <p className="prehead">Simple Pages, Profound Transformation</p>
            <p className="head">Minimal Effort. Maximum Results.</p>
            <p className="subhead">
              Crafted for simplicity and ease, this journal doesn’t overwhelm
              you. Its clean design removes distractions and lets your ideas
              take center stage. Light enough to carry everywhere, impactful
              enough to change everything.
            </p>
          </div>
          <img
            src={Image}
            alt="Book Mock-up"
            className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl "
          />
          <div className="overflow-hidden">
            <img
              src={IconPurpleTwo}
              alt="icon-red"
              className="w-[112px] absolute top-10 -right-80 "
            />
          </div>
        </div>

        <div className="relative">
          <div>
            <p className="prehead">
              Small Enough to Carry Everywhere. Big Enough to Hold Your Dreams.
            </p>
            <p className="head">Get To Know Your Journal</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-x-3 gap-x-3 lg:gap-y-3 gap-y-3 mt-12 relative z-10">
            {features.map((feature, index) => {
              const isLast = index === features.length - 1;

              let colSpanClass = "";

              const patternIndex = index % 8;
              colSpanClass =
                patternIndex === 0 ||
                patternIndex === 3 ||
                patternIndex === 4 ||
                patternIndex === 7
                  ? "lg:col-span-3"
                  : "lg:col-span-2";

              return (
                <div
                  key={index}
                  style={{ backgroundColor: feature.color }}
                  className={`p-7 rounded-xl border-black border-[2px] border ${colSpanClass}`}
                >
                  {/* <img src={feature.image} className="w-8 h-8" /> */}
                  <p className="mt-2 font-bold text-[21px] leading-6">
                    {feature.head}
                  </p>
                  <p className="font-medium text-xl text-black mt-2.5">
                    {feature.text}
                  </p>
                </div>
              );
            })}
            <div
              style={{ backgroundColor: "#FFC5B8" }}
              className="rounded-xl border-black border-[2px] w-full col-span-5 grid grid-cols-5 overflow-hidden max-h-[255px]"
            >
              {/* Text content with padding */}
              <div className="col-span-3 p-7">
                <p className="mt-2 font-bold text-[21px] leading-6">
                  A Companion Wherever You Go: Your Pocket Buddy
                </p>
                <p className="font-medium text-xl text-black mt-2.5">
                  Meet Your Pocket Buddy, a sleek, pocket-sized journal that
                  ensures your ideas are always within reach. Whether you’re on
                  the move or need quick clarity, this little companion is
                  designed for convenience and inspiration.
                </p>
              </div>

              {/* Image without padding */}
              <div className="col-span-2 flex items-center justify-center overflow-hidden max-h-full relative">
                <img
                  src={BookTwo}
                  alt="icon-red"
                  className="object-cover h-92"
                />
              </div>
            </div>
            ;
          </div>
          <img
            src={IconLemon}
            alt="icon-red"
            className="w-[112px] absolute top-72 -left-20"
          />

          <div className="mt-12 text-center">
            <Button />
            <p className="mt-4 prehead">*Limited Copies Available</p>
          </div>
        </div>

        <div className="">
          <div>
            <p className="prehead">Because the World Needs Your Ideas.</p>
            <p className="head">Why This Journal?</p>
            <p className="subhead mt-5">
              We understand how it feels to lose a great idea in the chaos of
              daily life. That’s why we created this journal—to ensure your
              thoughts have a home and your ideas have a future. Co-create with
              God and build the solutions the world has been waiting for.
            </p>
          </div>
          <div className="relative">
            <img
              src={Image3}
              alt="Book Mock-up"
              className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl border-black border-[2px] "
            />
            <img
              src={IconOrange}
              alt="icon-red"
              className="w-[112px] absolute -bottom-10 -right-10"
            />
          </div>
        </div>

        <div className=" ">
          <div className="">
            <p className="prehead">
              The Future Is Written by Those Who Dare to Dream
            </p>
            <p className="head">The Secret Weapon of Idea Builders</p>
            <p className="subhead mt-5">
              The world’s greatest inventions started with a simple idea—and the
              courage to pursue it. This journal helps you move from thought to
              action, ensuring no dream stays locked away.
            </p>
          </div>

          <Testimonials />
        </div>

        <div className=" ">
          <div className=" border-t border-[#575757] pt-10 mt-10 lg:mt-0 lg:pt-20">
            <p className="prehead">We’ve Got Answers.</p>
            <p className="head">FAQ—Still Have Questions?</p>
            <div className="space-y-5 mt-10">
              {faqs.map((faq, index) => (
                <div key={index} className="">
                  <div
                    className="flex justify-between items-center cursor-pointer bg-[#f1f1f1] py-2.5 px-5 rounded-2xl text-[#373737] border-black border-[2px] border"
                    onClick={() => toggleFaq(index)}
                  >
                    <p className="font-medium lg:text-xl text-sm lg:leading-[37px]">
                      {faq.question}
                    </p>
                    {openIndex === index ? (
                      <img src={ArrowUp} className="w-6 h-6" />
                    ) : (
                      <img src={ArrowDown} className="w-6 h-6" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className=" mt-3 bg-[#f1f1f1] lg:p-10 p-5 rounded-2xl text-[#373737] font-medium lg:text-xl text-sm lg:leading-[37px]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
