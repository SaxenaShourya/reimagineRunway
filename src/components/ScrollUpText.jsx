import { motion } from "framer-motion";
import React from "react";

const ScrollUpText = ({ value, className, marginRight, delay, every }) => {
  // Split the value into individual letters instead of words
  const letters = Array.from(value);

  const slideUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay ? delay * i : 0.01 * i, // Delay each letter by its index
      },
    }),
  };

  return (
    <p className={" " + className}>
      {letters.map((letter, idx) => {
        return (
          <span
            className="overflow-hidden inline-flex relative font-clash-display"
            style={{ marginRight }}
            key={idx}
          >
            <motion.span
              custom={idx}
              variants={slideUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: !every && true }}
            >
              {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

export default ScrollUpText;
