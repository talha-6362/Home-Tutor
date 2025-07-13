import { GrYoga } from 'react-icons/gr';
import { FaDumbbell } from 'react-icons/fa';
import { GiGymBag } from 'react-icons/gi';
import { motion } from 'framer-motion';

const WhyChooseData = () => [
  {
    id: 1,
    title: "One-on-One Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    textColor: "#ffffff",  
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quickly as possible for you.",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    textColor: "#ffffff", 
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard is equipped with audio and video chat features.",
    link: "/",
    icon: <GrYoga />,
    bgColor: "#fa6400",
    textColor: "#ffffff",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    textColor: "#000000",  
    delay: 0.9,
  },
];


const SlideLeft = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.5,
      type: 'spring',
    },
  },
});




export const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        {/* Header Section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="text-3xl font-semibold">
            Benefits of online tutoring services with us
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData().map((item) => (
            <motion.div
              key={item.id}
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView="visible"
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
              style={{ backgroundColor: item.bgColor }}
            >
              <div
                className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                style={{ color: item.textColor }}
              >
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="font-semibold" style={{ color: item.textColor }}>
                {item.title}
              </p>
              <p className="text-sm" style={{ color: item.textColor }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
