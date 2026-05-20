import React from "react";
import { Services } from "../../../constants";
import Image from "next/image";
import ConnectingDots from "../../../public/connecting-dots.svg";
import Advert from "../Global/Advert";

const HomeServices: React.FC = () => {
  return (
    <section className="md:pt-[100px] pt-[50px] px-[32px] md:px-0 items-center overflow-hidden w-full">
      <div className="flex flex-col md:gap-[50px] gap-[35px]">
        {/* Header Section */}
        <div className="md:w-[304px] w-[170px] flex flex-col justify-center gap-[10px] mx-auto items-center">
          <h2 className="font-urban md:text-2xl text-base font-normal text-cr8tOrange">
            SERVICES
          </h2>
          <p className="text-Cr8tGray font-grotesk md:font-semibold font-medium md:text-5xl text-2xl md:leading-[62px] leading-[33.6px] text-center">
            Our Core Capabilities
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col font-grotesk justify-center items-center mx-auto text-cr8tBlack">
          {Services.map((service, index) => (
            <div
              className="flex flex-col md:gap-[15px] gap-[10px] justify-center items-center w-full"
              key={service.service}
              style={{ maxWidth: service.width }}
            >
              {/* Icon Section */}
              <div className="w-[100px] h-[100px] rounded-full border flex flex-col justify-center items-center mx-auto">
                {service.icon}
              </div>

              {/* Service Title and Description */}
              <div className="flex flex-col gap-[5px] items-center text-center">
                <h1 className="font-medium md:text-[32px] text-2xl leading-[33.6px] md:leading-normal">
                  {service.service}
                </h1>
                <p className="font-light md:text-lg text-base md:leading-7 leading-6 font-poppins text-cr8tLightBlack">
                  {service.description}
                </p>
              </div>

              {/* Connecting Dots Divider */}
              {index !== Services.length - 1 && (
                <div className="md:mb-[15px] mb-[10px]">
                  <Image
                    src={ConnectingDots}
                    alt="Connecting dots icon"
                    width={5}
                    height={93}
                    className="w-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Advert Section */}
      <div className="md:pt-[150px] pt-[50px]">
        <Advert />
      </div>
    </section>
  );
};

export default HomeServices;
