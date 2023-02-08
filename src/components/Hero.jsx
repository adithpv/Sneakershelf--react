import React from "react";
import SocialLinks from "./utils/SocialLinks";
import WindupsText from "./utils/WindupsText";

const Hero = ({ heroapi: { img, sociallinks } }) => {
  return (
    <>
      <div className="relative h-[100vh] w-auto flex flex-col md:h-[100vh] sm:h-[100vh] xsm-[100vh]">
        <div className="bg-theme   h-[100vh]  lg:h-[100vh] md:h-[100vh] sm:h-[100vh] w-[100%] absolute top-0 left-0 right-0 opacity-100 -z-10"></div>
        <div className="relative opacity-100 z-20 grid  items-center justify-items-center app-container">
          <div className="grid items-center justify-items-center mt-10 md:mt-20">
            <h1 className="text-6xl lg:text-5xl md:text-3xl sm:text-2xl xsm:text-1xl font-[600] italic drop-shadow-sm text-slate-200 align-center">
              <WindupsText />
            </h1>

            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-4 ">
              {sociallinks?.map((val, index) => (
                <SocialLinks key={index} icon={val.icon} />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={img}
              alt="hero-img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[30deg] hover:rotate-0 cursor-pointer object-fill   md:mt-[10vh]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
