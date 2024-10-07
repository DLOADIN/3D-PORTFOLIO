import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        <div className="z-10 pb-24">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola👋, I'm <span className="text-[#915EFF]">Manzi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Currently <span className="text-[#915EFF]">building</span> & Learning how to craft<br />
            <span className="text-[#915EFF]">3D</span> visuals, designs, intuitive{" "}
            <span className="text-[#915EFF]">user</span> interfaces <br />and developing 
            dynamic web <span className="text-[#915EFF]">applications</span>.<br /> Enrolled{" "}
            <span className="text-[#915EFF]">at</span> the African Leadership{" "}
            <span className="text-[#915EFF]">University.</span>
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-30 bottom-32 w-full flex justify-center items-center hidden sm:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
