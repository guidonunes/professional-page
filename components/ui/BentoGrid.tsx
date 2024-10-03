'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/conffeti.json';
import Lottie from 'react-lottie';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from 'react-icons/io5';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {


  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('guilherme.augd@gmail.com');
    setCopied(true);

    // Reset copied to false after 2 seconds to allow animation to reset
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Adjust time as needed
  };


  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style ={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 5} && flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
            src={img}
            alt={title}
            className={cn(imgClassName, "object-cover")}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id===4 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
            src={spareImg}
            alt={spareImg}
            className={"object-cover, object-center w-full h-full"}
            />
          )}
        </div>
          { id === 5 && (
            <BackgroundGradientAnimation>
              <div className= "absolute z-50 flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>
          )}


        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-3 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-86 z-10">
            {title}
          <div className="font-sans font-light white text-sm md:text-xs lg:text-base py-1 z-10">
            {/* {description} */}
          </div>
          </div>


        {id === 2 && <GlobeDemo /> }



        {id === 3 && (
            <div className="flex gap-3 lg:gap-7 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {['Ruby on Rails', 'PostgreSQL', 'MongoDB'].map((item) => (
                  <span
                    key={id}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-3 py-3 px-3 rounded-lg text-center bg-[#10132E] n"></span>
              </div>
                {/* <span className="lg:py-3 lg:px-2 py-3 px-2 rounded-lg text-center bg-[#10132E]"></span> */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 lg:px-8">
                {[ 'ExpressJS ','ReactJS', 'NodeJS', ''].map((item) => (
                  <span
                  key={id}
                  className="lg:py-3 lg:px-3 py-2 p-8 text-xs lg:text-base
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id ===5 && (
            <div className="mt-5 relative">
              <div className = { `absolute -bottom-5 right-0`}>
                  <Lottie options ={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }} />
              </div>
                  <MagicButton
                    title={copied ? 'Email copied!' : 'Copy my email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="`bg-[#161a31]`"
                    handleClick={handleCopy}
                  />
            </div>
          )}
      </div>
    </div>
    </div>
  );
};
