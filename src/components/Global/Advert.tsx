import Link from "next/link";
import React from "react";
import AnimatedButton from "../ui/animatedButton";

const Advert = () => {
  return (
    <div className="w-full md:max-w-[781px] max-w-[324px] flex flex-col justify-center items-center mx-auto text-center md:text-[70px] md:leading-[98px] leading-[44.8px] text-[32px] font-medium font-grotesk text-cr8tBlack">
      <h1>
        Let’s brew something{" "}
        <span className="text-cr8tOrange font-normal font-urban capitalize">
          great
        </span>{" "}
        together!
      </h1>
      <Link
        href="/contact"
        className="md:mt-[20px] mt-[25px]  w-[146px] md:w-[156px] "
      >
        <AnimatedButton className="md:w-[156px] h-[56px] w-[146px]">
          Work With Us
        </AnimatedButton>
      </Link>
    </div>
  );
};

export default Advert;
