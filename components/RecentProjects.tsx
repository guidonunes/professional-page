import React from 'react';
import { projects } from '@/data/index';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-24 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"></div>
                  <div>
                    <img
                      src="/bg.png"
                      alt="bg-img"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 w-full h-full object-cover opacity-70"
                  />
                </div>
                <h2 className="font-bold lg:2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h2>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt={icon}
                          className="p-1 w-8 h-8"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs">Check Live Site</p>
                    <FaLocationArrow
                      className="ms-3 text-sm text-purple"
                      color="#CBACF9"
                    />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
