import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

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
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
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
          </div>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>


        {id === 2 && <GlobeDemo /> }



        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {[' ','Ruby on Rails', 'PostgreSQL'].map((item) => (
                  <span
                    key={id}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-3 lg:px-3 py-3 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {[ 'ReactJS ','NextJS', ' '].map((item) => (
                  <span
                  key={id}
                  className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                  <span className="lg:py-3 lg:px-2 py-3 px-3 rounded-lg text-center bg-[#10132E]"></span>
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {[ 'TypeScript',' ', 'NodeJS'].map((item) => (
                  <span
                  key={id}
                  className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                  <span className="lg:py-4 lg:px-1 py-3 px-1  rounded-lg text-center bg-[#10132E]"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
    </div>
  );
};
