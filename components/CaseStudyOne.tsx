"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function CaseStudyOne() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <HeroParallax
        products={products}
        headerTitle={
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Medic Dispatch
            <br />
            Mobile & Web App
          </h1>
        }
        headerSubtitle={
          <p className="text-lg sm:text-xl lg:text-2xl text-center mt-4">
            Healthcare at your fingertips
          </p>
        }
      />
    </div>
  );
}

export const products = [
  {
    title: "Specialist App",
    link: "#",
    thumbnail: "/medicapp1.jpg",
  },
  {
    title: "Specialist App",
    link: "#",
    thumbnail: "/medicapp2.jpg",
  },
  {
    title: "User App",
    link: "#",
    thumbnail: "/userapp1.jpg",
  },
  {
    title: "User App",
    link: "#",
    thumbnail: "/userapp2.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic01.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic02.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic03.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic04.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic05.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic06.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic07.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic08.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic09.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic10.jpg",
  },
  {
    title: "Healthcare Provider Dashboard",
    link: "#",
    thumbnail: "/Medic01.jpg",
  },
];
