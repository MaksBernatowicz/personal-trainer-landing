import React from "react";

// import data
import { banner } from "../data";

const Banner = () => {
  // destructure banner data
  const { titlePart1, titlePart2, subtitle } = banner;
  return (
    <section className="bg-neutral-500 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-24">
          <div className="text-white flex-1 z-10 pl-6 lg:pl-0">
            <h1
              className="h1 text-white mb-8 w-4/5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {titlePart1} <br />
              <span className="h2 text-primary-200">{titlePart2}</span>
            </h1>
            <p
              className="max-w-[415px] text-body-md lg:text-body-lg mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {subtitle}
            </p>
          </div>
          {/* image */}
          <div
            className="bg-purple-50 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-right"
            data-aos-delay="900"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
