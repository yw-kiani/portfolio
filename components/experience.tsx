"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { EXPERIENCES_DATA } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

import "react-vertical-timeline-component/style.min.css";

// Define a safer type for experiences
type ExperienceItem = {
  title: string;
  date: string;
  description?: string;
  icon: ReactNode;      // React.createElement(...) icons
  icon1?: string;       // optional image path (logo in circle)
};

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  const hasIcon1 = Boolean(experience.icon1);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 25px 50px rgba(0,0,0,0.45)",
        borderRadius: "1rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: "#fff",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      icon={
        hasIcon1 ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Center logo image */}
            <img
              src={experience.icon1}
              alt="logo"
              className="w-[100%] h-[100%] object-contain rounded-full"
            />

            {/* Small overlay icon (cap / shield / etc.) */}
            <div className="absolute -bottom-2 -right-2 text-white text-xl">
              {experience.icon}
            </div>
          </div>
        ) : (
          // Normal single icon (no logo image)
          experience.icon
        )
      }
    >
      <h3 className="text-white text-[20px] font-bold">
        {experience.title}
      </h3>

      {experience.description && (
        <p className="mt-3 text-gray-200 text-[14px] leading-relaxed">
          {experience.description}
        </p>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm">
          What I have done so far
        </p>
        <SectionHeading>Work experience</SectionHeading>
      </motion.div>

      <VerticalTimeline lineColor="#4b5563">
        {EXPERIENCES_DATA.map((exp, i) => (
          <ExperienceCard
            key={i}
            experience={exp as unknown as ExperienceItem}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
