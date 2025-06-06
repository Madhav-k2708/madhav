import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import {motion} from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
     id="about" className="w-full px-[12%] py-10 scroll-mt-20  ">
      <motion.h4
       initial={{y:-20,opacity:0}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.5, delay:0.3}}
      className="text-center mb-2 text-lg font-Ovo  ">Introduction</motion.h4>

      <motion.h2
      initial={{y:-20,opacity:0}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay: 0.5}} className="text-center text-5xl font-Ovo ">About me</motion.h2>

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}} className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 ">
        <motion.div
        initial={{scale:0.9, opacity:0}}
        whileInView={{scale:1, opacity:1}}
        transition={{duration:0.6}} className="w-64 sm:w-80 rounded-3xl max-w-none ">
          <Image
            src={assets.nameLogo}
            alt=""
            className="w-full h-96 rounded-3xl p-1 bg-purple-500"
          />
        </motion.div>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.8}}
        className="flex-1 ">
          <p className="mb-10 max-w-2xl font-Ovo ">
          I am a Full-Stack Web Developer With strong knowledge in both frontend and backend technologies. Eagerly waiting to collaborate with an organizations. Throughout my career, I have to collaborating with prestigious organizations,
          contributing to their success and growth.
          </p>

          <motion.ul
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.8, delay:1}}
           className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl ">
            {infoList.map(({icon, iconDark, title, description}, index) => (
                <motion.li
                whileHover={{scale:1.05}}
                 key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-x-1 hover:-translate-y-1 duration-300 hover:shadow-black dark:border-white hover:dark:shadow-white dark:hover:bg-darkHover/50 ">
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3 "  />
                    <h3 className="my-4 font-semibold text-gray-700 dark:text-white ">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-white ">{description}</p>
                </motion.li>
            ))}
          </motion.ul>

          <motion.h4
          initial={{y:20,opacity:0}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.3, delay:0.5}}
          className="my-6 text-gray-700 font-Ovo dark:text-white ">Tools I use</motion.h4>
          <motion.ul
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5, delay:1}}
          className="flex items-center gap-3 sm:gap-5 ">
            {toolsData.map((tools, index) => (
                <motion.li
                whileHover={{scale: 1.1}}
                key={index} className="flex items-center justify-center w-1/2 sm:w-14 aspect-square rounded-xl border border-gray-400 cursor-pointer hover:-translate-y-1 duration-300 ">
                    <Image src={tools} alt="" className="w-5 sm:w-7" />
                </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
