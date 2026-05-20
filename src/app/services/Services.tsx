import React from "react";
import { ServiceListingData } from "../../../constants";
import Advert from "@/components/Global/Advert";

const Services = () => {
  return (
    <section className="lg:pt-[100px] pt-[60px] px-6 xl:px-[80px] text-cr8tBlack">
      {/* Services List Section */}
      <div className="w-full relative mb-20 lg:mb-32">
        <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-12">
          <h3 className="text-sm font-poppins text-cr8tBlack font-medium tracking-[0.2em] uppercase">
            Capabilities & Services
          </h3>
          <span className="text-cr8tLightBlack font-poppins text-sm hidden md:block">
            {ServiceListingData.length} Core Areas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {ServiceListingData.map((category, index) => (
            <div
              key={index}
              className="group flex flex-col p-8 rounded-2xl bg-[#F9F9F9] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.06)] transition-all duration-500 ease-out relative overflow-hidden"
            >
              {/* Top Gradient Line on Hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cr8tOrange to-[#ff8c5a] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

              <div className="flex flex-col gap-6 h-full">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white group-hover:bg-orange-50 border border-gray-100 group-hover:border-orange-100 flex items-center justify-center text-cr8tOrange font-medium text-lg transition-colors duration-300 shadow-sm">
                    {`0${index + 1}`}
                  </div>
                  {/* Subtle arrow that appears on hover */}
                  <div className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-cr8tOrange">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="font-grotesk text-2xl font-bold text-cr8tBlack group-hover:text-cr8tOrange transition-colors duration-300 mb-6">
                    {category.service_name}
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {category.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 font-poppins text-cr8tLightBlack text-[15px] group-hover:text-typography transition-colors duration-300"
                      >
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-cr8tOrange/60 flex-shrink-0 transition-colors duration-300"></span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-sm font-poppins text-cr8tOrange font-medium tracking-[0.2em] uppercase">
            Our Approach
          </h2>
          <div className="font-grotesk text-[36px] md:text-[50px] xl:text-[64px] leading-[1.1] font-medium tracking-tight">
            <p>
              We combine strategy, creativity, and{" "}
              <span className="font-urban font-normal text-cr8tOrange italic pr-1">
                innovation
              </span>{" "}
              to craft solutions that captivate, engage, and drive results.
            </p>
          </div>
        </div>
        <div className="lg:w-5/12 flex flex-col gap-6 font-poppins text-cr8tLightBlack text-base lg:text-lg font-light leading-relaxed lg:mt-12">
          <p>
            We craft solutions tailored to your audience—whether it’s web
            design, branding, strategy, or app development. Each project is
            unique, and we adapt to your specific goals to create impactful,
            interactive experiences.
          </p>
          <p>
            By combining strategic thinking, collaborative design, and
            cutting-edge development, we deliver digital solutions that not only
            look stunning but drive tangible growth for your business.
          </p>
        </div>
      </div>

      {/* Advert Section */}
      <div className="lg:my-[160px] my-[100px] flex flex-col items-center justify-center mx-auto w-full">
        <Advert />
      </div>
    </section>
  );
};

export default Services;

