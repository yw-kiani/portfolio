"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { EXTRA_LINKS } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-purple-400 -mt-6 dark:text-white/80">
        You can reach me on the following platforms:
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {/* Email */}
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EXTRA_LINKS.email}`}
          target="_blank"
          className="group flex items-center justify-between rounded-xl border border-gray-300 dark:border-white/10 px-4 py-3 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/90 text-white">
              <FaEnvelope />
            </span>
            <div className="text-left">
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-600 dark:text-white/70">
                {EXTRA_LINKS.email}
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500 group-hover:translate-x-1 transition">
            Write me →
          </span>
        </Link>

        {/* GitHub */}
        <Link
          href={EXTRA_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl border border-gray-300 dark:border-white/10 px-4 py-3 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
              <FaGithub />
            </span>
            <div className="text-left">
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-gray-600 dark:text-white/70">
                View my projects & code
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500 group-hover:translate-x-1 transition">
            Open →
          </span>
        </Link>

        {/* LinkedIn */}
        <Link
          href={EXTRA_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl border border-gray-300 dark:border-white/10 px-4 py-3 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <FaLinkedin />
            </span>
            <div className="text-left">
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-gray-600 dark:text-white/70">
                Let&apos;s connect professionally
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500 group-hover:translate-x-1 transition">
            Open →
          </span>
        </Link>
      </div>
    </motion.section>
  );
};

export default Contact;
