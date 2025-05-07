import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Person from "../assets/person.webp";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      name: "PrinceDynamic",
      role: "Brand Designer & Art Director",
      text: `“The Juice It Out Journal has completely transformed the way I brainstorm and organize my ideas. Its unique structure helps me turn abstract thoughts into clear, actionable designs. I’ve never been this confident, and people around me have noticed the difference too. It’s like having a personal coach on every project!”`,
      image: Person,
      bg: "#FFF0D6",
    },
    {
      name: "Jane Doe",
      role: "UI/UX Designer",
      text: `“This journal has made my design process incredibly smooth. I can now visualize and execute my projects with a clear structure!”`,
      image: Person,
      bg: "#FFC5B8",
    },
    {
      name: "John Smith",
      role: "Creative Strategist",
      text: `“A must-have tool for every creative professional. It’s like a blueprint for success, ensuring I stay on track!”`,
      image: Person,
      bg: "#D0FFF3",
    },
    {
      name: "Emily Davis",
      role: "Product Designer",
      text: `“The clarity and confidence this journal brings to my workflow is unparalleled. Highly recommend it!”`,
      image: Person,
      bg: "#D7D1FF",
    },
  ];

  return (
    <div className="mt-16">
      <Swiper
        spaceBetween={30}
        // slidesPerView={2}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Use a custom class for the pagination
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Pagination]}
        className=""
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-2xl lg:flex p-5 bg-igray border border-black border-[2px]"
              style={{ backgroundColor: testimonial.bg }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="lg:w-[218px] w-full border border-black border-[2px] rounded-2xl"
              />
              <div className="py-7 lg:pl-10">
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-sm font-medium text-igrey">
                  {testimonial.role}
                </p>
                <p className="text-xs font-medium leading-[19px] text-igrey mt-5">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4">
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonials;
