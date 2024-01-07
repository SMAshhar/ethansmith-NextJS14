"use client";
import React from "react";
import ProjectsBtn from "./projectsBtn";

// motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/utils/variants";

export default function ProjectsBtnXl() {
  return (
    <motion.div
      variants={fadeIn("down", 0.8)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex"
    >
      <ProjectsBtn />
    </motion.div>
  );
}
