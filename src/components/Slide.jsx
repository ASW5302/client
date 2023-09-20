import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";

const Slide = () => {
  const sliders = [
    { url: "./imgs/01.jpg" },
    { url: "./imgs/02.jpg" },
    { url: "./imgs/03.jpg" },
  ];
  const [currentIndex, setCuttentIndex] = useState(0);
  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCuttentIndex(newIndex);
  };
  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCuttentIndex(newIndex);
  };
  const moveSlider = (slideIndex) => {
    setCuttentIndex(slideIndex);
  };
  return (
    <div className="max-2-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-cover duration-300"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <RiArrowLeftSLine onClick={nextSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <RiArrowRightSLine onClick={prevSlider} />
      </div>
    </div>
  );
};

export default Slide;
