"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveDown } from "lucide-react";
import dynamic from "next/dynamic";
import { LOGOS } from "../../../constants";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });
const AnimatedButton = dynamic(() => import("../ui/animatedButton"), {
  ssr: false,
});

function HomeHero() {
  return (
    <>
      <Head>
        {/* Preload fonts */}
        <link
          rel="preload"
          href="/fonts/BDOGrotesk-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/fonts/Urban Storm.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>

      <style jsx>{`
        .critical-lcp {
          font-family: "Grotesk", sans-serif;
          font-weight: bold;
          font-size: 32px;
          line-height: 44.8px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .critical-lcp {
            font-size: 50px;
            line-height: 71px;
          }
        }

        @media (min-width: 1024px) {
          .critical-lcp {
            font-size: 60px;
            line-height: 81px;
          }
        }

        @media (min-width: 1280px) {
          .critical-lcp {
            font-size: 70px;
          }
        }
      `}</style>

      <section className=" text-[#202526] xl:pt-[80px] pt-[50px] flex flex-col items-center justify-center hero_bg">
        <div className="flex flex-col xl:gap-[50px] gap-[25px] items-center justify-center xl:px-[123px] md:px-[80px] px-[24px]">
          <div className="lg:text-[60px] text-[32px] text-center">
            <p className="critical-lcp ">
              Modern{" "}
              <span className="text-[#FF5A12] font-normal font-urban">
                Websites
              </span>{" "}
              That Turn <br className="hidden lg:block" /> Your{" "}
              <span className="line-through decoration-[#FF5A12]">
                Visitors
              </span>{" "}
              Into Customers
            </p>
            <p className="text-center text-base md:text-lg font-poppins font-light leading-6 text-cr8tLightBlack pt-5">
              Crafted to impress, Built to Convert
            </p>
          </div>

          <div className="flex md:gap-[34px] gap-[20px] flex-wrap items-center justify-center">
            <Link href="/contact" prefetch>
              <AnimatedButton
                className="w-[230px] md:h-[56px] h-[50px]"
                withHeartbeat
              >
                {`Let's Get You Started`}
              </AnimatedButton>
            </Link>
            <Link href="/our-work" prefetch>
              <Button className="border border-[#FF5A12] rounded-full w-[230px] md:h-[56px] h-[50px] hover:bg-[#FF5A12] hover:text-white font-manrope font-semibold text-base">
                See Our Work
              </Button>
            </Link>
          </div>

          <div className="text-[#ADADAD] text-[13px] font-normal flex gap-[11px] items-center font-poppins lg:pt-6 xl:pt-0">
            <h3>SCROLL</h3>
            <MoveDown size={13} className="animate-bounce" color="#FF5A12" />
          </div>
          <h3 className="text-[#ADADAD] font-grotesk font-medium text-base md:text-2xl lg:pt-4 xl:pt-0">
            Trusted by Businesses Like Yours
          </h3>
        </div>

        <div className="relative bg-[#000000] w-full lg:h-[150px] flex justify-center items-center mt-5 overflow-hidden">
          <Marquee
            pauseOnClick
            pauseOnHover
            loop={0}
            speed={50}
            gradient={true}
            gradientColor="#202526"
            gradientWidth={200}
          >
            <div className="flex items-center md:gap-[80px] gap-[50px]">
              {LOGOS.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex justify-center items-center w-[120px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    priority
                    style={{ display: "block" }}
                  />
                </div>
              ))}
              <div className="w-[10px]" />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default HomeHero;
