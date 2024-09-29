import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) =>{
  return(
    <motion.div variants={fadeIn("up","spring",index * 0.5, 0.75)}>
      <Tilt 
      options={
        {
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute inset-0 flex justify-center items-center m-3 sm:m-1 card-img_hover w-full h-full">

          </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>SAMPLE PROJECTS</h2>
      </motion.div>

      <div className="w-full flex justify-center items-center">
  <motion.p
    variants={fadeIn("", "", 0.2, 1)}
    className="mt-3 text-white text-[20px] max-w-3xl leading-[30px]"
  >
    Following <span className="text-[#915EFF]">projects</span> showcases my skills and experience through
    real-world examples of my work. Each project is briefly described <span className="text-[#915EFF]">with </span>
    links to code <span className="text-[#915EFF]">repositories</span> and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies 
    and manage projects <span className="text-[#915EFF]">effectively</span>.
  </motion.p>
</div>
    <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");