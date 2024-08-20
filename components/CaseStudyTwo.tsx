"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function CaseStudyTwo() {
  return (
    <HeroParallax
      products={products}
      headerTitle={
        <>
          Case Study Two
          <br />
          Awesome Project
        </>
      }
      headerSubtitle="This is a detailed case study of our awesome project. We'll walk you through our process, challenges, and solutions."
    />
  );
}



export const products = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Cursor",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Rogue",
    link: "#",
    thumbnail: "/bg.png",
  },

  {
    title: "Editorially",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Editrix AI",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Pixel Perfect",
    link: "#",
    thumbnail: "/bg.png",
  },

  {
    title: "Algochurn",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Aceternity UI",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "SmartBridge",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Renderwork Studio",
    link: "#",
    thumbnail: "/bg.png",
  },

  {
    title: "Creme Digital",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Golden Bells Academy",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "Invoker Labs",
    link: "#",
    thumbnail: "/bg.png",
  },
  {
    title: "E Free Invoice",
    link: "#",
    thumbnail: "/bg.png",
  },
];
