import React from 'react';
import MagicButton from './ui/MagicButton';
import { ImRocket } from 'react-icons/im';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className="w-full pt-40 pb-16" id="contact">


      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals
        </p>
        <a href="mailto:guilherme.augd@gmail.com" className='py-24'>
          <MagicButton
            title="Get in touch"
            icon={<ImRocket />}
            position="right"
          />
        </a>
      </div>

      {/* Container for social media icons and copyright text */}
      <div className="flex flex-col items-center mt-16 space-y-4">
        {/* Social media icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={`https://${profile.link}`} // Ensure the link is clickable
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.link} width={20} height={20} />
            </a>
          ))}
        </div>

        {/* Copyright text */}
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Guilherme
        </p>
      </div>
    </footer>
  );
};

export default Footer;
