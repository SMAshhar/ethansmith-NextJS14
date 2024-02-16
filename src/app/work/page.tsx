"use client";
// components

import Bulb from "@/components/ServiceSlider/Bulb";
import WorkSlider from "@/components/WorkSlider/workSlider";
import Circles from "@/components/About/circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Work = () => {
  return (
    <div className="h-screen bg-black/30 py-36 flex">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My work <span className="text-red-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              10 years ago, I began freelancing as a developer. Since then, I&lsquove
              done remote worf for agencies, conslted for startups, and
              collaborated on digital products for business and consumer use.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;