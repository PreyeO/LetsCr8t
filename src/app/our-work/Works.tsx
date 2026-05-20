"use client";
import React, { useState, useEffect } from "react";
import { worksData } from "../../../constants";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const Works = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter out any undefined/null entries from the constants array
  const validWorks = worksData.filter(Boolean);

  return (
    <section className="lg:px-[80px] px-6 lg:my-[150px] my-[80px] text-cr8tBlack">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-32 gap-8">
        <div>
          <span className="text-cr8tOrange text-sm font-poppins font-medium tracking-[0.2em] uppercase block mb-6">
            Selected Projects
          </span>
          <h2 className="font-grotesk text-[40px] md:text-[60px] lg:text-[80px] leading-[1.05] font-bold tracking-tight">
            Work that <br className="hidden md:block" />
            <span className="font-urban italic text-cr8tOrange pr-2">
              speaks
            </span>{" "}
            for itself.
          </h2>
        </div>
        <div className="md:w-[350px] lg:w-[450px] mb-2 lg:mb-4">
          <p className="font-poppins font-light text-cr8tLightBlack text-base lg:text-lg leading-relaxed">
            We work closely with our clients to build digital experiences that
            captivate, engage, and ultimately convert. Here is a selection of
            our recent favorites.
          </p>
        </div>
      </div>

      {/* Staggered Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 w-full">
        {validWorks.map((portfolio: any, index: number) => {
          // split project title and description if separated by " - "
          const parts = portfolio.project.split(" - ");
          const title = parts[0];
          const desc = parts.length > 1 ? parts[1] : "";

          // Creating a staggered layout by pushing even items down on desktop
          const isEven = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col group ${isEven ? "md:mt-32" : ""}`}
            >
              <a
                href={portfolio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative block overflow-hidden rounded-[2rem] mb-6 bg-[#F9F9F9] shadow-[0_10px_40px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-all duration-700 ease-out"
              >
                {loading ? (
                  <Skeleton className="w-full aspect-[4/3] lg:aspect-[16/10] bg-gray-200" />
                ) : (
                  <>
                    <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] bg-[#F1F3F5] overflow-hidden p-6 md:p-10 lg:p-12">
                      <div className="relative w-full h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:scale-105">
                        <Image
                          src={portfolio.image}
                          alt={title}
                          layout="fill"
                          objectFit="contain"
                          priority={index < 2}
                          className="drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-cr8tBlack/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-center z-10">
                      <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm text-cr8tOrange flex items-center justify-center transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75 shadow-lg">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform -rotate-45"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </a>

              {loading ? (
                <div className="space-y-3 px-2">
                  <Skeleton className="w-1/2 h-8" />
                  <Skeleton className="w-1/3 h-5" />
                </div>
              ) : (
                <div className="flex flex-col px-2">
                  <div className="flex items-start justify-between">
                    <h3 className="font-grotesk text-3xl lg:text-4xl font-bold text-cr8tBlack group-hover:text-cr8tOrange transition-colors duration-300">
                      {title}
                    </h3>
                    <div className="w-10 h-px bg-cr8tLightBlack/30 mt-5 hidden md:block"></div>
                  </div>
                  {desc && (
                    <p className="font-poppins text-cr8tLightBlack text-lg mt-2 capitalize font-light">
                      {desc}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
