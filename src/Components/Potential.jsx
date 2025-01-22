import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Person from "../assets/person.png";
import { Pagination } from "swiper/modules";

const Potential = () => {
  const potentials = [
    {
      head: "Turns “Someday” into “Today",
      text: `“You know those ideas that sit in the back of your mind, waiting for the right moment? This journal makes sure that moment is now. It transforms your excitement and inspiration into real, tangible steps – no more waiting for the “perfect time.”`,
      image: Person,
      color: "#C7D8FF",
    },
    {
      head: "Clears Mental Clutter",
      text: `“Feeling overwhelmed by too many ideas or not knowing where to start? This journal brings order to the chaos. It acts as your personal roadmap, filtering out distractions and giving your ideas the space to breathe and thrive.”`,
      image: Person,
      color: "#FFF0D6",
    },
    {
      head: "Keeps You Motivated with Visible Progress",
      text: `“Ever started something and lost momentum halfway? Not this time. With visual progress trackers, you’ll see how far you’ve come – and that’s powerful. Every section you fill in feels like a small victory, pushing you forward”`,
      image: Person,
      color: "#E9D9FF",
    },
    {
      head: "Sparks New Ideas When You Feel Stuck",
      text: `“Creativity block? This journal is designed to unlock new insights through thought-provoking prompts. It’s like having a brainstorming partner by your side, guiding you through the moments when inspiration runs dry.”`,
      image: Person,
      color: "#E7FFF5",
    },
    {
      head: "Gives You a Sense of Accomplishment",
      text: `“Imagine the feeling of flipping through your journal and seeing all the ideas you’ve turned into reality. By the end of 90 days, you won’t just feel productive – you’ll feel proud. You’ll have proof of your growth and success.”`,
      image: Person,
      color: "#FFEFEF",
    },
    {
      head: "Feels Like Having a Personal Coach in Your Hands",
      text: `“This journal isn’t just paper – it’s like a mentor, guiding you through the twists and turns of your ideas. It holds you accountable in a way that feels supportive, not pressuring.”`,
      image: Person,
      color: "#C7D8FF",
    },
    {
      head: "Reminds You of Your Worth and Potential",
      text: `“Sometimes all you need is a reminder that your ideas matter. This journal does just that. Every page is a nudge saying, “Your ideas are valuable – let’s bring them to life.””`,
      image: Person,
      color: "#FFF0D6",
    },
    {
      head: "Keeps You Consistent Without Overwhelming You",
      text: `“Consistency doesn’t have to feel like a grind. The journal’s layout is simple but effective, designed to fit into your routine without feeling like just another task. It flows with you, not against you.”`,
      image: Person,
      color: "#E9D9FF",
    },
  ];

  return (
    <div className="mt-16">
      <Swiper
        spaceBetween={30}
        // slidesPerView={3}
        pagination={{
          clickable: true,
          el: ".custom-pagination-2",
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        modules={[Pagination]}
        className=""
      >
        {potentials.map((potential, index) => (
          <SwiperSlide key={index}>
            <div
              className="lg:w-[380px] rounded-2xl p-10 flex flex-col justify-between"
              style={{ backgroundColor: potential.color }}
            >
              {/* Flexbox ensures proper alignment */}
              <p className="pt-3 font-bold text-xl">{potential.head}</p>
              <div className="h-20 flex-grow"></div>
              <p className="font-medium text-base">{potential.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4">
        <div className="custom-pagination-2"></div>
      </div>
    </div>
  );
};

export default Potential;
