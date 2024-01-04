"use client";
import Image from "next/image";
import React from "react";

// components
import ParticlesContainer from "@/components/Particles/ParticlesContainers";
import ProjectsBtn from "@/components/ProjectsBtn/projectsBtn";
import Avatar from "@/components/Avatar/avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";
import ProjectsBtnXl from "@/components/ProjectsBtn/projectBtnComponent";

export default function Home1() {
  return (
    <main className="bg-slate-800/60 h-screen">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-slate-800/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto">
          {/* TITLE */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-red-500">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Some three liner statement having some sentiant meaning but for us
            it means little. What matters is that we stand up and get things
            going already.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>
          <ProjectsBtnXl />
        </div>
      </div>
      {/* image */}
      <div>Image</div>
    </main>
  );
}
