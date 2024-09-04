import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import vid from "/vid/Product_001.webm";
import vid2 from "/vid/Product_002.webm";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const topVideoRef = useRef(null);
  const bottomVideoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const topVideo = topVideoRef.current;
    const bottomVideo = bottomVideoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "40% 50%",
        end: "70% 50%",
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > 0.05) {
            topVideo.play();
            bottomVideo.play();
          } else {
            topVideo.pause();
            bottomVideo.pause();
          }
        },
      },
    });
    tl.to(
      "#top",
      {
        top: "-50%",
        ease: "power.inOut",
      },
      "same"
    )
      .to(
        "#bottom",
        {
          bottom: "-50.5%",
          ease: "power.inOut",
        },
        "same"
      )
      .to(
        "#top-h",
        {
          bottom: "-50%",
          ease: "power.inOut",
        },
        "same"
      )
      .to(
        "#top-h span",
        {
          opacity: 0,
          ease: "power.inOut",
          duration: 0.1,
        },
        "same"
      )
      .to(
        "#bottom-h",
        {
          top: "-50%",

          ease: "power.inOut",
        },
        "same"
      )
      .to(
        "#center",
        {
          marginTop: "0%",
          ease: "power.inOut",
        },
        "same"
      );
  }, [sectionRef]);

  return (
    <>
      <section
        className="hidden lg:block relative h-[300vh] w-full"
        ref={sectionRef}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden z-[50] mix-blend-difference">
          {/* Top video section */}

          <div
            className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-10 mix-blend-difference"
            id="top"
          >
            <h4 className="text-[2vw] w-[30%] absolute z-[12] mix-blend-difference ml-12 mt-12">
              Fast and controllable tools that allow you to create high-fidelity
              content in an a way that’s never been possible before.
            </h4>
            <h6
              className="text-xs absolute text-gray-600 rounded-full px-3 py-1 bg-black left-1/2 -translate-x-1/2 top-[100%] -translate-y-1/2"
              id="top-h"
            >
              <span>Scroll more</span>
            </h6>
            <h6 className="absolute top-[10%] left-[95%] mix-blend-difference text-6xl">
              &reg;
            </h6>
            <video
              src={vid}
              className="object-cover"
              muted
              loop
              ref={topVideoRef}
            />
          </div>

          {/* Bottom video section */}
          <div
            className="absolute bottom-0 left-0 w-full h-[50vh] overflow-hidden z-[50] mix-blend-difference"
            id="bottom"
          >
            <h2 className="text-[18vw] absolute z-[12] mix-blend-difference uppercase left-1/2 -translate-x-1/2">
              Runway
            </h2>
            <h6
              className="text-xs absolute text-gray-600 rounded-full px-3 py-1 bg-black z-[12] left-1/2 -translate-x-1/2 bottom-[100%] translate-y-1/2 "
              id="bottom-h"
            >
              Scroll more
            </h6>
            <video
              src={vid}
              className="-translate-y-[50vh] object-cover"
              muted
              loop
              ref={bottomVideoRef}
            />
          </div>

          {/* Main content */}
          <div
            className="relative h-screen w-full flex justify-center items-center mt-[100%] "
            id="center"
          >
            <motion.h2
              initial="initial"
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 1,
                },
                animate: {
                  opacity: 0,
                  transition: {
                    duration: 1,
                    delay: 2,
                    ease: "backInOut",
                  },
                },
              }}
              className="text-2xl"
            >
              Explore every possible iteration of any idea, scene or story.
            </motion.h2>
            <motion.video
              src={vid2}
              className="absolute top-0 left-0 h-full w-full object-cover mix-blend-difference"
              autoPlay
              muted
              loop
              initial="initial"
              whileInView="animate"
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                  transition: {
                    duration: 2,
                    ease: "backInOut",
                    delay: 3.9,
                  },
                },
              }}
            ></motion.video>
          </div>
        </div>
      </section>
      <section className="block lg:hidden relative w-full h-screen">
        <h4 className="text-[2vw] w-[30%] absolute z-[12] mix-blend-difference ml-12 mt-12">
          Fast and controllable tools that allow you to create high-fidelity
          content in an a way that’s never been possible before.
        </h4>
        <h2 className="text-[18vw] absolute top-[70%] z-[12] mix-blend-difference uppercase left-1/2 -translate-x-1/2">
          Runway
        </h2>
        <video
          src={vid}
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
        />
      </section>
    </>
  );
};

export default HeroSection;
