import React, { useState, useRef } from 'react';
import { motion} from 'framer-motion';
import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import {slideIn} from '../utils/motion';
import emailjs from 'emailjs-com';

const Contact = () =>{
  const formRef = useRef();
    const [form, setForm] = useState({
      name:'',
      subject:'',
      message:'',
    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {}
    const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
     variants={slideIn('left',"tween",0.2,1)}
     className="flex-[0.75] bg-black-100 p-8 rounded-2xl"  
     >
      <div className='text-center'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>CONTACT ME</h3>
      </div>  
      <form className="mt-12 flex flex-col gap-8" ref={formRef} onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">YOUR NAME</span>
            <input
            type="text"
            name="name"
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" 
            value={form.name}
            onChange={handleChange}
            />
          </label>
  
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>YOUR EMAIL</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>YOUR MESSAGE</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what's on your mind"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex justify-center">
              <button 
                type="submit"
                className="flex bg-tertiary rounded-2xl py-3 px-8 hover:scale-110 transition-all duration-500 ease-in w-fit outline-none">
                  {loading ? 'sending' : 'SEND'}
              </button></div>
      </form>
      </motion.div>
      
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")

