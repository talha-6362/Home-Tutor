import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../Utility/Animation";

const Hero = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.5)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 uppercase font-semibold"
            >
              100% Satisfaction Guarantee
            </motion.p>

            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl leading-tight"
            >
              Find Your Perfect <span className="text-primary">Tutor</span>{" "}
              Today
            </motion.h1>

            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              We help you find the perfect tutor for 1-on-1 lessons. It’s
              affordable, convenient, and effective.
            </motion.p>

            {/* Button Section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start mt-8 items-center"
            >
              <button className="primary-btn bg-primary rounded-full p-2">
                Get Started
              </button>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it Works
              </button>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ stiffness: 100, delay: 0.5 }}
            src="/Assets/study.jpeg"
            alt="Hero Image"
            className="w-[350px] md:w-[550px] xl:w-[700px] rounded-full shadow-lg
    hover:scale-105 transition-transform duration-300 ease-in-out
        border-4 border-white/20 hover:border-primary/60 hover:shadow-2xl "
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
