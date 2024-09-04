import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ top: e.clientY - 10, left: e.clientX - 10 });
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`z-[999] pointer-events-none fixed h-5 w-5 rounded-full border border-white 
                  transition-transform duration-200 flex justify-center ic ease-out
                  ${
                    isClicked
                      ? "border-red-500 animate-expand"
                      : "animate-pulse"
                  }`}
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <div className="absolute h-5 w-5 border-8 border-gray-500 rounded-full opacity-50 animate-pulse-inner"></div>
    </div>
  );
};

export default CustomCursor;
