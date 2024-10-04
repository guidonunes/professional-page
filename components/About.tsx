// About.js
export default function About() {
  return (
      <section className="pt-10 overflow-hidden  bg-black-10 md:pt-0 sm:pt-16 2xl:pt-36">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" id="about">
              <div className="grid items-center grid-cols-1 md:grid-cols-2">
                  <div>
                    <br/>
                      <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl text-center">
                          Hey, I&apos;m
                          <span className="text-purple"> Guilherme</span>
                      </h2>
                      <br />
                      <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                          As a former lawyer with a passion for contract theory, I discovered the transformative potential of smart contracts in Web3, inspiring my career shift to web development. I am driven by a growth mindset and an eagerness to embrace new challenges in technology.
                      </p>
                  </div>
                  <div className="relative flex justify-center items-center">
                      <img className="absolute inset-x-0 bottom-0 -mb-32 -translate-x-1/2 left-1/2 opacity-80" src="/blob.svg" alt="" />
                      <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/me.png" alt="" />
                  </div>
              </div>
          </div>
      </section>
  );
}
