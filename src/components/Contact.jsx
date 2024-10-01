import Reac, {useState, useRef} from 'react'
import { motion} from 'framer-motion'
import { styles } from "../styles";
import { EarthCanvas } from './canvas'
import { sectionWrapper} from '../hoc'
import slide from '../utils/motion'
import emailjs from 'emailjs-com';

const Contact = () => {
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
     variants={slideIN('left',"tween",0.2,1)}
     className="flex-[0.75] bg-black-100 p-8 rounded-2xl"  
     >
      <p className={styles.sectionSubText}>Get In Touch</p>
      <h3 className={styles.sectionHeadText}>Contact Me</h3>

      <form 
      className="mt-12 flex flex-col gap-8"
      ref={formRef}
      onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
            </label>
      </form>
     </motion.div>
    </div>
  )
}

export default Contact