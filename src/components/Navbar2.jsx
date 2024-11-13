/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import logo from '../assets/images/logo.svg';
import { NAVIGATION_LINKS } from '../constants';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';

const Navbar = () => {

  const [ isHidden, setiSHidden ] = useState(false);
  const { scrollY } = useScroll();

  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    
    if ( Math.abs(difference) > 50 ) {
      setiSHidden(difference > 0)
    }
    lastYRef.current = y;
  })

  const [isMobileMenuOpen, setMobileMenuOpen] =  useState(false);
    
  const toggleMobileMenu = () =>{
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLinkClick = (e, href) => {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if(targetElement) {
       const offset = -85;
       const elementPosition = targetElement.getBoundingClientRect().top;
       const offsetPosition = elementPosition + window.scrollY + offset;

       window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", 
       })
      }
      setMobileMenuOpen(false);
  }

  return (
    <motion.div
    animate={isHidden ? "hidden" : "visible"} 
    variants={{
      hidden: {
        y: "-100%",
      },
      visible: {
        y: "0%",
      },
    }}
    transition={{ duration: 0.3 }}
    whileHover="visible"
    onFocusCapture={() => setiSHidden(false)}
     className='fixed top-3 right-0 left-0 z-50'>
      <div className="mx-auto hidden max-w-4xl items-center justify-center gap-12 lg:flex rounded-lg bg-gray-950/80 py-3 backdrop-blur-lg border-b-2 border-gray-800 shadow-lg shadow-gray-950/30">
      <div className='min-h-12'>
      <a href="./"><img src={logo} alt="Felipe Leite" width={160}/></a>
      </div>
        <div className='flex justify-between items-center gap-6'>
        <ul className='list-none flex justify-end gap-6 py-3'>
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index} className='text-md font-semibold font-inter cursor-pointer text-gray-200 uppercase active:text-primary-100 hover:text-primary-100 transition duration-300'><a href={item.href} className='hover:text-primary'
            onClick={(e) => handleLinkClick(e, item.href)}>
              {item.label}
            </a></li>
          ))}
        </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="rounded-md lg:rounded-full bg-gray-950/80 backdrop-blur-md lg:hidden mx-2 px-4">
          <div className="flex items-center justify-between">
            <div>
              <a href="./"> <img src={logo} alt="Felipe Leite Logo" width={180} className='m-2'/></a>
            </div>
            <div className="flex items-center">
              <button className='focus:outline-none lg:hidden text-gray-200' onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <FaTimes className='m-2 h-6 w-5' />
                ) : (
                  <FaBars className='m-2 h-6 w-5' />
                )}

              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col items-center gap-4 py-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index} className='text-gray-200 py-2 w-full text-center'>
                  <a href={item.href} className='block w-full text-xl uppercase hover:text-primary-400 active:text-primary-500' onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
                </li>  
              ))}
            </ul>
          )}
      </div>
    </motion.div>
  )
}

export default Navbar