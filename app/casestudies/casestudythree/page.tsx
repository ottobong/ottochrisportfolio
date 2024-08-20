"use client";
import React from "react";
import { navItems } from "@/data";


import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Compare } from "@/components/ui/compare";



const StudyThree = () => {
  return (
    <section
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5
      py-20"
    >
      <FloatingNav navItems={navItems} />
      <h1 className="heading pt-24">
        Case Study
        <span className="text-purple"> Title</span>
      </h1>

      {/* This is where the content of the portfolio begins */}
      {/* Problem */}
      <h1 className="pt-24 text-2xl text-center">
        <span className="text-purple">Problem</span>
      </h1>
      <p className="text-white-200 md:mt-4 my-2 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      {/* Approach */}
      <h1 className="pt-24 text-2xl text-center">
        <span className="text-purple">Approach</span>
      </h1>
      <p className="text-white-200 md:mt-4 my-2 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      {/* Solution */}
      <h1 className="pt-24 text-2xl text-center">
        <span className="text-purple">Solution</span>
      </h1>
      <p className="text-white-200 md:mt-4 my-2 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      {/* Process */}
      <h1 className="pt-24 text-2xl text-center">
        <span className="text-purple">Process</span>
      </h1>
      <p className="text-white-200 md:mt-4 my-2 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      {/* Outcome */}
      <h1 className="pt-24 text-2xl text-center">
        <span className="text-purple">Outcome</span>
      </h1>
      <p className="text-white-200 md:mt-4 my-2 text-center">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      {/* Compare Designs Preview */}
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://assets.aceternity.com/notes-dark.png"
            secondImage="https://assets.aceternity.com/linear-dark.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://assets.aceternity.com/notes-dark.png"
            secondImage="https://assets.aceternity.com/linear-dark.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://assets.aceternity.com/notes-dark.png"
            secondImage="https://assets.aceternity.com/linear-dark.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://assets.aceternity.com/notes-dark.png"
            secondImage="https://assets.aceternity.com/linear-dark.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://assets.aceternity.com/notes-dark.png"
            secondImage="https://assets.aceternity.com/linear-dark.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>
      <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
        <div
          style={{
            transform: "rotateX(15deg) translateZ(80px)",
          }}
          className="p-1 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 mx-auto w-3/4 h-1/2 md:h-3/4"
        >
          <Compare
            firstImage="https://assets.aceternity.com/notes-dark.png"
            secondImage="https://assets.aceternity.com/linear-dark.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="w-full h-full rounded-[22px] md:rounded-lg"
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </div>

      {/* Conclusion */}
      <h1 className="pt-24 text-2xl text-center">
        <span className="text-purple">Conclusion</span>
      </h1>
      <p className="text-white-200 md:mt-4 my-2 text-center pb-24">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </p>

      <Footer />
    </section>
  );
};

export default StudyThree;
