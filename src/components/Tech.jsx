import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
          <p className={styles.sectionSubText}>MY TECH STACK</p>
        </motion.div>
      <motion.div className='flex flex-row flex-wrap justify-center gap-10 mt-5'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");