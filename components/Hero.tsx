import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { ImRocket } from 'react-icons/im'


const Hero = () => {
  return (
    <div className="pb-20 relative">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 z-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10"></div>

      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-20 relative">
        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
          Dynamic Web Magic with Next.js
        </h2>

        <TextGenerateEffect
          className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Creating Experiences that Inspire and Engage'
        />

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Hello there! I&apos;m Guilherme, a Full Stack Web Developer based in Brazil

        </p>
        <a href='#about'>
          <MagicButton
            title='Find out more'
            icon={<ImRocket />}
            position='right'
          />
        </a>
      </div>
    </div>
  )
}

export default Hero
