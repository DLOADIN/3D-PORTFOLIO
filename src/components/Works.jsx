import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>SAMPLE PROJECTS</h2>
      </motion.div>

      <div className='w-full flex'>
          <motion.p variants={fadeIn("","",.2,1)}
          className=''>

          </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")