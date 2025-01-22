import React, { useState } from "react";
import bg from "../assets/bg.png";
import Button from "../Components/Button";
import Brain from "../assets/icons/brain.png";
import Calender from "../assets/icons/calendar.png";
import Book from "../assets/icons/git.png";
import Light from "../assets/icons/light.png";
import Palette from "../assets/icons/palette.png";
import Pencil from "../assets/icons/pencil.png";
import Send from "../assets/icons/send.png";
import Shuffle from "../assets/icons/shuffle.png";
import User from "../assets/icons/user.png";
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
      text: "A structured 12-week layout designed to track your idea’s journey from conception to execution, ensuring steady and measurable growth.",
      image: Calender,
      color: "#C7D8FF",
    },
    {
      head: "Problem-Solution Mapping Section",
      text: "This feature breaks down your ideas into problems, complications, root causes, and solutions, ensuring your thought process stays clear and actionable.",
      image: Brain,
      color: "#FFF0D6",
    },
    {
      head: "Idea Exploration Prompts",
      text: "Thought-provoking questions that guide you to zoom in and out of your idea, uncovering hidden potential and ensuring no detail is overlooked.",
      image: Light,
      color: "#E9D9FF",
    },
    {
      head: "Research Dump Space",
      text: "A dedicated area to brain-dump, sketch, and collect all research, inspirations, and insights without disrupting the main flow of your journal. Perfect for capturing spontaneous bursts of creativity.",
      image: Pencil,
      color: "#E7FFF5",
    },
    {
      head: "Planning and Execution Roadmap",
      text: "A one-time deep dive section that transforms your ideas into actionable plans. This isn't about daily or weekly inputs – it’s about creating meaningful milestones.",
      image: Send,
      color: "#FFEFEF",
    },
    {
      head: "Reflection and Learning Section",
      text: "Capture the lessons, breakthroughs, and even the mistakes. This section helps you refine your process, ensuring every idea leaves you better prepared for the next.",
      image: User,
      color: "#C7D8FF",
    },
    {
      head: "Undated Flexibility",
      text: "Start anytime. There are no rigid dates – you’re in control of when to begin, allowing your ideas to flow naturally without external pressure.",
      image: Shuffle,
      color: "#FFF0D6",
    },
    {
      head: "Elegant, Minimalist Design",
      text: "The journal’s sleek layout feels inviting, making you want to return to it day after day. Designed to spark creativity without overwhelming the senses.",
      image: Palette,
      color: "#E9D9FF",
    },
    {
      head: "A Companion Wherever You Go: Your Pocket Buddy",
      text: "Meet Your Pocket Buddy, a sleek, pocket-sized journal that ensures your ideas are always within reach. Whether you’re on the move or need quick clarity, this little companion is designed for convenience and inspiration.",
      image: Book,
      color: "#E7FFF5",
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
    <div className="font-inter ">
      <div className="relative sm:p-10 p-5 lg:px-64 pt-5 lg:py-20">
        <div className="z-20">
          <Header />
        </div>
        <img
          src={bg}
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        />
        <div className="relative text-center mt-10 lg:mt-20">
          <p className="text-xl font-semibold text-igrey">Light your Spark</p>
          <p className="lg:text-7xl sm:text-5xl text-5xl font-semibold lg:leading-[95px] sm:leading-[60px] leading-[60px] text-black">
            Where Ideas Take Flight.
          </p>
          <p className="text-xl font-medium mt-5  text-igrey">
            Your journal, your masterpiece. Lightweight, powerful, and ready to
            bring your vision to life.
          </p>
          <div className="lg:px-20 rounded-3xl">
            {/* <img
              src={Banner}
              alt="Description of the GIF"
              className="w-full mt-10 h-96 object-cover rounded-3xl "
            /> */}
            <video
              src={Video}
              className="w-full mt-10 h-96 object-cover rounded-3xl "
              autoPlay
              loop
              muted
              playsInline
              poster={Image}
            />
          </div>

          <div className="mt-12">
            <Button />
            <p className="mt-4 prehead">*Limited Copies Available</p>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-10 lg:p-64 lg:pt-20 space-y-32 lg:pb-20">
        <div className="">
          <div>
            <p className="prehead">Where Ideas Take the Spotlight</p>
            <p className="head">Ideas Rule the World. Let Yours Lead.</p>
            <p className="subhead mt-5">
              You’ve had that spark, that one moment of inspiration. But where
              does it go? With the Juice It Out Journal, you can capture,
              refine, and execute your ideas with precision. This isn’t just a
              journal—it’s your blueprint for success.
            </p>
          </div>
          {/* <div className="bg-[#E8F4FF] h-96 mt-10 rounded-3xl"></div> */}
          <img
            src={Image}
            alt="Book Mock-up"
            className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl "
          />
          <div className="mt-12 text-center">
            <Button />
            <p className="mt-4 prehead">*Limited Copies Available</p>
          </div>
        </div>
        <div className="">
          <div>
            <p className="prehead">Sleek. Powerful. Transformational.</p>
            <p className="head">
              A Tool That Works as Hard and Smart as You Do.
            </p>
            <p className="subhead mt-5">
              Meet the tool that bridges the gap between fleeting thoughts and
              tangible results. Designed to guide, inspire, and transform, this
              journal is perfect for dreamers, doers, and changemakers. It’s
              where innovation meets execution.
            </p>
          </div>
          <img
            src={Image2}
            alt="Book Mock-up"
            className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl "
          />
          <div className="mt-12 text-center">
            <Button />
            <p className="mt-4 prehead">*Limited Copies Available</p>
          </div>
        </div>

        <div className="">
          <div>
            <p className="prehead">Designed for Dreamers and Doers</p>
            <p className="head">Where Inspiration Meets Structure.</p>
            <p className="subhead mt-5">
              This isn’t just a journal—it’s the canvas where your boldest ideas
              take shape. Designed to bring order to your creativity, it
              provides the clarity you need without dimming the spark that
              drives you. Every page invites you to think deeply, while gentle
              prompts guide your thoughts into actionable brilliance.
            </p>
            <p className="subhead">
              Let your ideas flow freely, knowing there’s a space that holds
              them with intention and purpose.
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-12">
            <img
              src={Image}
              alt="Book Mock-up"
              className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl "
            />
            <img
              src={Image}
              alt="Book Mock-up"
              className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl "
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

        <div className="">
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
        </div>

        <div className="">
          <div>
            <p className="prehead">
              Small Enough to Carry Everywhere. Big Enough to Hold Your Dreams.
            </p>
            <p className="head">Get To Know Your Journal</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-5 gap-x-3 lg:gap-y-[30px] gap-y-5 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{ backgroundColor: feature.color }}
                className="p-5 rounded-xl"
              >
                <img src={feature.image} className="w-8 h-8" />
                <p className="mt-2 font-bold text-xl leading-6">
                  {feature.head}
                </p>
                <p className="font-medium text-xs leading-5 text-igrey mt-2">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
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
          <img
            src={Image3}
            alt="Book Mock-up"
            className="w-full mt-10 lg:h-96 h-56 object-cover rounded-3xl "
          />
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
                    className="flex justify-between items-center cursor-pointer bg-[#f1f1f1] py-2.5 px-5 rounded-2xl text-[#373737]"
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
