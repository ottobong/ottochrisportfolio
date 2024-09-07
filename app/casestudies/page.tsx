"use client";

import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import RecentProjects from "@/components/RecentProjects";
import { Boxes } from "@/components/ui/background-boxes";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          <h1 className="heading z-20">
            A small selection of{" "}
            <span className="text-purple">recent projects</span>
          </h1>
        </div>
        <RecentProjects hideTitle={true} />
      </div>

      <Footer />
    </main>
  );
};

export default CaseStudies;
