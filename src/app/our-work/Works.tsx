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

  const validWorks = worksData.filter(Boolean);

  return (
    <section className="lg:px-[80px] px-6 lg:my-[150px] my-[80px] text-cr8tBlack">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-24 gap-8">
        <div>
          <span className="text-cr8tOrange text-sm font-poppins font-medium tracking-[0.2em] uppercase block mb-5">
            Selected Projects
          </span>
          <h2 className="font-grotesk text-[38px] md:text-[56px] lg:text-[72px] leading-[1.05] font-bold tracking-tight">
            Work that{" "}
            <span className="font-urban italic text-cr8tOrange">speaks</span>{" "}
            for itself.
          </h2>
        </div>
        <div className="md:w-[320px] lg:w-[420px] md:mb-2">
          <p className="font-poppins font-light text-cr8tLightBlack text-base lg:text-lg leading-relaxed">
            We work closely with our clients to build digital experiences that
            captivate, engage, and ultimately convert.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        {validWorks.map((portfolio: any, index: number) => {
          const parts = portfolio.project.split(" - ");
          const title = parts[0];
          const desc = parts.length > 1 ? parts.slice(1).join(" - ") : "";

          // Only stagger right-column cards (odd index) on large screens
          // Also skip stagger on the very last item if it's alone in its row
          const isRightCol = index % 2 !== 0;
          const isLastAndAlone =
            index === validWorks.length - 1 && validWorks.length % 2 !== 0;
          const staggerClass =
            isRightCol && !isLastAndAlone ? "md:mt-16 lg:mt-24" : "";

          return (
            <div
              key={index}
              className={`flex flex-col group ${staggerClass}`}
            >
              {/* Image card */}
              <a
                href={portfolio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative block overflow-hidden rounded-[1.5rem] mb-5 bg-[#F1F3F5] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-all duration-700 ease-out"
              >
                {loading ? (
                  <Skeleton className="w-full aspect-[4/3] bg-gray-200 rounded-[1.5rem]" />
                ) : (
                  <>
                    {/* Image wrapper */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden p-5 md:p-8 lg:p-10">
                      <div className="relative w-full h-full transform group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <Image
                          src={portfolio.image}
                          alt={title}
                          layout="fill"
                          objectFit="contain"
                          priority={index < 2}
                          className="drop-shadow-xl"
                        />
                      </div>
                    </div>

                    {/* Hover overlay — sits above the image wrapper */}
                    <div className="absolute inset-0 bg-cr8tBlack/10 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-center z-20 pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm text-cr8tOrange flex items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100 shadow-xl">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="-rotate-45"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </a>

              {/* Project info */}
              {loading ? (
                <div className="space-y-3 px-1">
                  <Skeleton className="w-1/2 h-7" />
                  <Skeleton className="w-2/3 h-5" />
                </div>
              ) : (
                <div className="flex flex-col px-1 gap-1.5">
                  <h3 className="font-grotesk text-2xl lg:text-3xl font-bold text-cr8tBlack group-hover:text-cr8tOrange transition-colors duration-300 leading-tight">
                    {title}
                  </h3>
                  {desc && (
                    <p className="font-poppins text-cr8tLightBlack text-[15px] lg:text-base font-light leading-snug">
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

