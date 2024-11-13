import { HERO } from '../constants';
import { FaArrowDown } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
 

  <section id='home' className='h-screen bg-hero bg-cover w-screen py-16'>
      <div className="container flex flex-col-reverse justify-center items-center h-full gap-4">
        <div className="h-auto w-4/5 flex flex-col items-center">
          <h1 className="mb-4 lg:text-8xl md:text-7xl text-5xl text-center font-extrabold leading-none tracking-tighter text-gray-100 dark:text-white uppercase pt-4">{HERO.title}</h1>
          <p className='text-xl lg:text-2xl text-center mb-6 text-gray-400'>{HERO.span}</p>
          <a className='text-gray-600 rounded-full border-2 absolute bottom-10 border-gray-600 p-4 text-xl hover:-translate-y-2 ease-out duration-500 hover:border-gray-100 hover:text-gray-100 hover:shadow-xl hover:shadow-purple-500'><FaArrowDown /></a>
        </div>
      </div>
  </section>


  )
}

export default Hero