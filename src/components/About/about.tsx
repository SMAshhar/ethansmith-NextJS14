"use client";

import React, { useState } from "react";
import { ReactElement } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//counter
import CountUp from "react-countup";

type Icon = ReactElement;

interface SkillInfo {
  title: string;
  icons?: Icon[];
  stage?: string;
}

interface AboutDataItem {
  title: string;
  info: SkillInfo[];
}
//  data
const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={'e'}  />,
          <FaCss3 key={'f'} />,
          <FaJs key={'g'} />,
          <FaReact key={'h'} />,
          <SiNextdotjs key={'i'} />,
          // <SiFramer />,
          // <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key={'a'} />, 
          <SiAdobexd key={'b'} />, 
          <SiAdobephotoshop key={'c'} />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards-Honoree",
        stage: "2011-2012",
      },
      {
        title: "Adobe Design Achievement-Finalist",
        stage: "2009-2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer-XYZ Company",
        stage: "2012-2023",
      },
      {
        title: "Web Developer-ABC Agency",
        stage: "2010-2012",
      },
      {
        title: "Intern-DEF Corporation",
        stage: "2008-2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC, CA",
        stage: "2006",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

// components
import Avatar from "../Avatar/avatar";
import Circles from "./circles";

export default function AboutPage() {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full px-2 relative text-center xl:text-left xl:px-32">
      {/* avatar image */}
      <motion.div
        variants={fadeIn("right", 0.9)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden xl:flex fixed bottom-0 -left-[360px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center xl:w-1/2">
          <motion.h2
            variants={fadeIn("right", 0.9)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl md:text-4xl"
          >
            Captivating <span className="text-red-500">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.9)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-xs md:text-base xl:text-lg"
          >
            10 years ago, I began freelancing as a developer. Since then, I&lsquove
            done remote worf for agencies, conslted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-red-500">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-red-500">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-red-500">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-red-500">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 1.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px] xl:w-1/2"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i &&
                    "text-red-500 after:w-[100%] after:bg-red-500 after:transition-all after:duration-300"
                  } cursor-pointer text-sm md:text-base capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-red-500 after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={`${item.title}-${i}`}
                  className="flex-1 flex flex-col text-sm md:text-base md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, i) => {
                      return (
                        <div key={i} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
