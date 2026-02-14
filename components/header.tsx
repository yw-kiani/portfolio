"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

import { LINKS } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Gradient pill with dark inner background (3D style) */}
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed top-3 left-1/2 -translate-x-1/2 p-[1px] rounded-full bg-gradient-to-r from-purple-500 to-blue-400 shadow-card backdrop-blur"
      >
        <div className="rounded-full bg-[#0f0f1a]/90 px-3 py-2">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] sm:flex-nowrap sm:gap-3">
            {LINKS.map((link) => (
              <motion.li
                key={link.hash}
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "relative flex w-full items-center justify-center px-4 py-2 text-sm font-medium transition text-white-100/70 hover:text-white-100",
                    {
                      "text-black": activeSection === link.name,
                    }
                  )}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-white-100/95"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
