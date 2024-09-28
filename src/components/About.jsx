import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] mt-2 w-full transform hover:scale-105 transition-transform duration-500'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300 ease-in-out" 
  >
    <div
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
    </div>
  </motion.div>
  </div>
);

const About = () => {
  return (
    <div className="max-w-7xl mx-auto relative z-0">
      <motion.div variants={textVariant()} initial="hidden" animate="visible">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[20px] max-w-3xl leading-[30px] xl:ml-40 sm:ml-0 sm:"
      >
        I'm a skilled software developer with experience in <span className="text-[#915EFF]">TypeScript</span> and
        <span className="text-[#915EFF]"> JavaScript</span>  and expertise in frameworks like <span className="text-[#915EFF]">React</span>, <span className="text-[#915EFF]">Node.js</span> and
        currently learning much about <span className="text-[#915EFF]">Three.js</span> and <span className="text-[#915EFF]">Spline</span>. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center sm:justify-center w-full sm:w-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 text-white text-[40px] max-w-3xl  text-center leading-[30px] xl:ml-52 sm:ml-0 sm:"
      >
        MY REASON WHY:
        </motion.p>  
        <motion.blockquote
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-10 text-white text-[24px] max-w-3xl leading-[36px] xl:ml-40 sm:ml-0 italic font-semibold border-l-4 border-[#915EFF] pl-4"
>
       <span>" There is no tomorrow,  and the only easy day was yesterday.  <br></br>
               So today, we create anything we've ever<span className="text-[#915EFF]"> dreamed </span>of "</span><br />
      <span>~ Richard Marcinko </span>
      </motion.blockquote>
    </div>
  );
};

export default SectionWrapper(About, "about");
