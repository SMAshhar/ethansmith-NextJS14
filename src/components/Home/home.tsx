"use client";

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
    <main className="bg-slate-800/60 h-screen pt-8">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-slate-800/10 via-black/30 to-black/10 bg-blend-color-dodge">
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto">
          {/* TITLE */}
          <motion.h1
            variants={fadeIn("down", 0.8)}
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
            variants={fadeIn("down", 1.0)}
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
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <motion.div
          variants={fadeIn("up", 1.0)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-none xl:bg-[url('/bg-explosion.png')] xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        >
          {/* particles */}
          <ParticlesContainer />
          {/* avatar img */}
        </motion.div>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
      </div>
    </main>
  );
}
