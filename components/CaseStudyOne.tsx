"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function CaseStudyOne() {
  return (
    <HeroParallax
      products={products}
      headerTitle={
        <>
          Medic Dispatch
          <br />
          Mobile & Web App
        </>
      }
      headerSubtitle="Healthcare at your fingertips"
    />
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
