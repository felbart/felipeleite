import React from 'react'
import SectionTitle from './SectionTitle'
import HorizontalDiv from './divider/HorizontalDiv'
import { ABOUT } from '../constants'

const AboutHome = () => {
  return (
    <section className='container py-32 flex gap-10 md:gap-4 lg:gap-16  flex-col'>
      <div className='flex flex-col gap-4 py-8'>
      <SectionTitle title="Sobre mim" subtitle="Quem sou eu?" />
      <HorizontalDiv />
      </div>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8'>
        <div className='flex flex-row max-w-md border-2 border-red-400'>
          <h3 className='text-gray-100 font-bold uppercase'>{ABOUT.text1}</h3>
          <span className='text-base normal-case'>{ABOUT.text2}</span>
        </div>
        <div className='flex flex-col gap-4 md:gap-8'>
          
        </div>
      </div>
    </section>
  )
}

export default AboutHome