/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Marquee from "react-fast-marquee";
import Reviews from "./Reviews";

const Clients = () => {
  return (
    <section className="flex flex-col gap-[25px] md:gap-[50px] pt-[50px] md:pt-[150px] px-[24px] md:px-0">
      {/* Section Heading */}
      <div className="text-center flex flex-col items-center gap-[10px] mx-auto md:w-[524px]">
        <h1 className="font-grotesk text-cr8tBlack text-2xl md:text-[32px]">
          Why{" "}
          <span className="text-cr8tOrange capitalize font-urban font-normal">
            Businesses
          </span>{" "}
          Trust Us
        </h1>
        <p className="font-poppins text-cr8tLightBlack text-base md:text-lg font-light leading-6 md:leading-7">
          From startups to small businesses, our clients rely on us to turn
          their ideas into results. Here’s what they have to say.
        </p>
      </div>

      {/* Reviews Marquee */}
      <div className="flex w-full overflow-hidden">
        <Marquee
          autoFill
          pauseOnClick
          pauseOnHover
          loop={0}
          speed={50}
          gradient={false} // Disables gradient for smoother scrolling
          className="flex gap-[35px]"
        >
          <Reviews />
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
