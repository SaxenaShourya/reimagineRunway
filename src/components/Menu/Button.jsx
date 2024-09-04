import { motion } from "framer-motion";

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className="absolute top-0 right-0 w-24 h-10 cursor-pointer rounded-full overflow-hidden flex justify-center items-center">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full bg-light flex items-center justify-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Menu" />
        </div>

        <div
          className="w-full h-full bg-indigo-500 flex items-center justify-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className="relative flex flex-col justify-center items-center h-full w-full transform-style-3d transition-transform duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] perspective-text">
      <p className="text-dark uppercase transition-all duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] pointer-events-none text-sm lg:text-xl xl:2xl">
        {label}
      </p>
      {/* <p className="text-lime-300 uppercase transition-all duration-[0.75s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] pointer-events-none absolute transform rotate-x-[-90deg] translate-y-[9px] opacity-0">
        {label}
      </p> */}
    </div>
  );
}
