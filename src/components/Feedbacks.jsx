import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants/index';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

const FeedbackCard = ({ testimonial, name, designation, company, image }) => {
  return (
    <div className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex-shrink-0 mb-6'>
      <p className='text-white font-black text-[48px]'>"</p>
      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} @ {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    const animateCards = async () => {
      if (isLargeScreen) {
        await controls.start({
          x: [-containerWidth, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        });
      } else {
        await controls.start({ x: 0 });
      }
    };

    if (containerWidth > 0) {
      animateCards();
    }
  }, [controls, containerWidth, isLargeScreen]);

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div className="text-center">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>TESTIMONIALS</h2>
        </div>
      </div>
      <div 
        className={`-mt-20 pb-14 ${styles.paddingX} relative overflow-hidden`} 
        ref={containerRef}
      >
        <motion.div 
          className={`${isLargeScreen ? 'flex' : 'block'} gap-6`}
          style={{ width: isLargeScreen ? `${containerWidth * 2}px gap-5` : 'auto' }}
          animate={controls}
        >
          {(isLargeScreen ? [...testimonials, ...testimonials] : testimonials).map((testimonial, index) => (
            <FeedbackCard key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");