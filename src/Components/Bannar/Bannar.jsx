import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// SlideUp Animation
export const SlideUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const Banner = ({
  image,
  title,
  Subtitle = '',          
  link = '#',              
  tag = '',                
  reverse = false,         
  button = 'Learn More',   
}) => {
  return (
    <div className="bg-[#f9f9f9] pb-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner Image Section */}
          <div
            className={`flex justify-start items-center ${reverse ? 'md:order-last md:justify-end' : ''}`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
              src={image}
              alt="Banner"
              className="w-[400px] h-full object-cover"
            />
          </div>

          {/* Banner Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              {tag}
            </motion.p>

            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView="visible"
              className="text-xl lg:text-2xl font-semibold capitalize"
            >
              {title}
            </motion.p>

            <motion.p
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-slate-500"
            >
              {Subtitle}
            </motion.p>

            <motion.a
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView="visible"
              href={link}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn !mt-5">{button}</button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop Types
Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Subtitle: PropTypes.string,
  link: PropTypes.string,
  tag: PropTypes.string,
  reverse: PropTypes.bool,
  button: PropTypes.string,
};

export default Banner;
