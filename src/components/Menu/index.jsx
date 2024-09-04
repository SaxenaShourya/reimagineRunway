import { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const menu = {
  open: {
    width: "80vw",
    height: "50vh",
    top: "-5vh",
    right: "-5vw",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",

    height: "40px",

    top: "0px",

    right: "0px",

    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const perspective = {
  initial: {
    opacity: 0,

    rotateX: 90,

    translateY: 80,

    translateX: -20,
  },

  enter: (i) => ({
    opacity: 1,

    rotateX: 0,

    translateY: 0,

    translateX: 0,

    transition: {
      duration: 0.65,

      delay: 0.5 + i * 0.1,

      ease: [0.215, 0.61, 0.355, 1],

      opacity: { duration: 0.35 },
    },
  }),

  exit: {
    opacity: 0,

    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const links = [
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Agency",
    href: "/",
  },
  {
    title: "Expertise",
    href: "/",
  },
];

export default function Exp() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      if (scrollY > windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-[10%] md:top-[5%] left-[1%] z-[99999]">
      <motion.div
        className="w-[480px] h-[250px] bg-light rounded-[25px] relative"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      ></motion.div>

      <motion.div
        className="absolute top-0 left-[10%] space-y-2 lg:space-y-6"
        animate={isActive ? "open" : "closed"}
        initial="closed"
        variants={{
          closed: {
            opacity: 0,
          },
          open: {
            opacity: 1,
          },
        }}
      >
        <h3 className="text-xl sm:text-3xl md:text-[2vw] text-dark">
          Products
        </h3>
        <h3 className="text-xl sm:text-3xl md:text-[2vw] text-dark">
          Experience
        </h3>
        <h3 className="text-xl sm:text-3xl md:text-[2vw] text-dark">Tools</h3>
        <h3 className="text-xl sm:text-3xl md:text-[2vw] text-dark">Others</h3>
      </motion.div>

      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
