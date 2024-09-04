import {} from "react";
import ScrollUpText from "../ScrollUpText";
import Button from "../Button";

const items = [
  "Image to Image",
  "Text to Image",
  "Frame Interpolation",
  "Upscale Image",
];
const Structure = ({ setActiveMenu }) => {
  return (
    <section
      className="relative h-full md:h-screen w-full mix-blend-difference z-10 py-[2vh] sm:py-[5vh] md:py-[20vh] lg:py-[30vh]"
      onMouseLeave={() => {
        setActiveMenu(null);
      }}
    >
      <ScrollUpText
        value="Features"
        className="text-light pl-[3vw] pb-[2vw] text-[2vw]"
      />
      {items.map((item, idx) => {
        return (
          <div
            key={idx}
            className={`pt-3 pl-[3vw] ${
              idx === 5 ? "border-y" : "border-t"
            } border-light`}
            onMouseOver={() => {
              setActiveMenu(idx);
            }}
          >
            <h2 className="text-[8vw]">{item}</h2>
          </div>
        );
      })}
      <div className="mt-[6vh] w-full flex justify-center items-center">
        <Button text="More" number={10} />
      </div>
    </section>
  );
};

export default Structure;
export { items };
