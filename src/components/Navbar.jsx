import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { menu, close } from "../assets";
import logoblack from "../assets/INDIVIDUAL/IMG-20240706-WA0018-photoaidcom-cropped (1).jpg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed rounded-b-xl top-0 z-20 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-30 backdrop-blur-md' 
          : 'bg-transparent text-[#30363b]'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src={logoblack} 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <p className={`${scrolled ? "text-white" : "text-[#30363b]"} text-[18px] font-bold cursor-pointer flex`}>
            Manzi David&nbsp;
            <span className='sm:block hidden'> | UI/UX DESIGNER</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-[#915EFF]"  
                  : scrolled
                  ? "text-white"
                  : "text-[#30363b]"  // Default text color before scroll
              } hover:text-[#915EFF] transform hover:scale-110 transition-all duration-500 text-[20px] font-medium cursor-pointer relative group`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#915EFF] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#915EFF]" : scrolled ? "text-black" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SectionWrapper(Navbar, "home");
