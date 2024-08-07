"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-28 xl:px-48">
        {/*Image Container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" fill alt="heroPic" className="object-contain" />
        </div>
        {/*TEXT Container */}
        <div className="h-1/2 flex flex-col gap-8 lg:h-full lg:w-1/2 items-center justify-center">
          {/*TITLE*/}
          <h1 className="text-4xl md:6xl font-bold">Crafting Digital Experiences, Designing Tommorrow.</h1>
          {/*Description*/}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/*Button*/}
          <div className="flex w-full gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>

            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black ">Contact Me</button>
            </Link>

          </div>


        </div>
      </div>
    </motion.div>

  );
};

export default Homepage;
