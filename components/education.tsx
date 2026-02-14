"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { EDUCATION_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const fadeIn = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

type EducationItem = (typeof EDUCATION_DATA)[number];

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
      <motion.div
        variants={fadeIn(0.2 + index * 0.1)}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.03 }}
        className="w-[300px] h-[300px] p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-400 shadow-lg cursor-pointer"
        onClick={() => setFlipped((prev) => !prev)}
      >
        {/* 3D flip container */}
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full h-full rounded-2xl bg-[#0f0f1a]"
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-2xl py-8 px-6 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Circular icon */}
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
              <Image
                src={item.icon}
                alt={item.title}
                width={52}
                height={52}
                className="object-contain"
              />
            </div>

            <h3 className="text-white text-lg font-semibold text-center">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400 text-center">
              {item.school}
            </p>

            <p className="mt-1 text-xs text-purple-300">{item.period}</p>

            <p className="mt-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
              Click to see details
            </p>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 rounded-2xl py-6 px-5 flex flex-col items-center justify-center text-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-white text-lg font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-xs text-purple-300 mb-1">{item.school}</p>
            <p className="text-xs text-gray-400 mb-3">{item.period}</p>

            <p className="text-sm text-gray-200 leading-relaxed">
              {item.details}
            </p>

            <p className="mt-4 text-xs text-gray-500">
              Click again to flip back
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Tilt>
  );
}

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      ref={ref}
      id="education"
      className="scroll-mt-28 mt-20 mb-28 sm:mb-40 max-w-5xl mx-auto text-center"
      variants={fadeIn(0.1)}
      initial="hidden"
      whileInView="show"
    >
      <SectionHeading>Education</SectionHeading>

      <motion.p
        variants={fadeIn(0.15)}
        initial="hidden"
        whileInView="show"
        className="text-gray-300 text-[16px] mt-4 max-w-3xl mx-auto leading-[28px]"
      >
        A mix of formal education, industry-recognized certifications, and
        hands-on cybersecurity training that strengthens both my technical and
        problem-solving skills.
      </motion.p>

      <div className="mt-12 flex flex-wrap justify-center gap-10 group">
        {EDUCATION_DATA.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
