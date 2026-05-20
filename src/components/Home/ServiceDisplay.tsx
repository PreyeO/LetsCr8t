import React from "react";
import AnimatedContainer from "../Animations/AnimatedContainer";

const ServiceDisplay: React.FC = () => {
  return (
    <section className="md:pt-[100px] pt-[70px] px-6 md:px-0 flex items-center justify-center w-full overflow-hidden">
      <AnimatedContainer className="flex flex-col items-center justify-center mx-auto w-full max-w-[300px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-contain w-full h-auto md:mr-[15px] md:mb-[-15px]"
        >
          <source src="/service_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </AnimatedContainer>
    </section>
  );
};

export default ServiceDisplay;
