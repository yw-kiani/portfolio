"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Your services (replace icons from public/icons)
const services = [
  { title: "Cybersecurity", icon: "/icons/CS.png" },
  { title: "Graphic Designer", icon: "/icons/GD.jpg" },
  { title: "WordPress Developer", icon: "/icons/WP.png" },
];

const fadeIn = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-28 mt-32 max-w-5xl mx-auto text-center"
      variants={fadeIn(0.1)}
      initial="hidden"
      whileInView="show"
    >
      {/* Heading */}
      <SectionHeading>Introduction</SectionHeading>

      <motion.h2
        variants={fadeIn(0.15)}
        initial="hidden"
        whileInView="show"
        className="text-5xl font-black text-white mt-2"
      >
        Overview.
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-gray-300 text-[17px] mt-6 max-w-3xl mx-auto leading-[30px]"
      >
        I&apos;m a Cybersecurity enthusiast with hands-on experience in ethical hacking, 
        digital forensics, vulnerability analysis, and security tools. Alongside my 
        security background, I work as a Graphic Designer specializing in logo design, 
        posters, branding, and creative visual content using Adobe Photoshop and Illustrator. 
        I also build WordPress websites, combining clean design, security best practices, 
        and smooth functionality to create modern and responsive digital experiences.
        <br />
        <br />
        I enjoy solving technical challenges, enhancing system security, and creating 
        visually appealing designs that stand out.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {services.map((service, i) => (
          <Tilt key={i} tiltMaxAngleX={25} tiltMaxAngleY={25}>
            <motion.div
              variants={fadeIn(0.3 + i * 0.1)}
              initial="hidden"
              whileInView="show"
              className="w-[250px] p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-blue-400 shadow-lg"
            >
              <div className="bg-[#0f0f1a] rounded-2xl py-8 px-6 min-h-[250px] flex flex-col items-center justify-center">
                
                {/* Circular Icon */}
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
}
