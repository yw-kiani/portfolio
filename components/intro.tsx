"use client"; // This comment indicates that this code should run on the client side in Next.js.

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

// Define the Intro component.
const Intro = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Home", 0.5);
  // Use the 'useActiveSectionContext' to manage active sections and clicks.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/myphoto.jpeg"
              alt={`${OWNER_NAME} portrait`}
              width={200}
              height={200}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute text-2xl bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white-100"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b className="font-bold">Hi, I&apos;m <span className="font-extrabold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">{OWNER_NAME}</span>.</b>{" "}
        I&apos;m a <b className="font-bold">Cybersecurity enthusiast, Graphic Designer</b>, and{" "}
        <b className="font-bold">WordPress Developer</b> who enjoys securing systems and creating modern digital experiences.{" "}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center"
      >
        {/* Primary buttons */}
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
          {/* Contact me – dark pill */}
          {/* Contact me — EXACT card style */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-400 shadow-lg">
            <Link
              href="#contact"
              className="block bg-[#0f0f1a] rounded-2xl px-7 py-3 text-white-100 flex items-center justify-center gap-2 
                        outline-none focus:scale-105 hover:scale-105 active:scale-95 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="opacity-80 transition" />
            </Link>
          </div>

          {/* Resume – white pill */}
          <Link
            href={EXTRA_LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none shadow-card focus:scale-105 hover:scale-105 active:scale-95 transition"
          >
            My Resume
            <HiDownload className="opacity-70 group-hover:translate-y-0.5 transition" />
          </Link>
        </div>

        {/* Social buttons */}
        <div className="flex gap-2 text-lg font-medium">
          {/* LinkedIn */}
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white-100/10 p-4 text-white-100 flex items-center gap-2 rounded-full outline-none border border-white/20 shadow-card focus:scale-[1.1] hover:scale-[1.1] active:scale-95 transition"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <BsLinkedin />
          </Link>

          {/* GitHub */}
          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white-100/10 p-4 text-white-100 flex items-center gap-2 text-[1.35rem] rounded-full outline-none border border-white/20 shadow-card focus:scale-[1.1] hover:scale-[1.1] active:scale-95 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
