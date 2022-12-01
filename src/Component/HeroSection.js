import React from "react";
import { Hero } from "../assets";

function HeroSection() {
  return (
    <div className="pt-[80px] lg:pt-[100px]">
      <div className="lg:flex lg:items-center mx-5 lg:justify-evenly lg:pt-0 pt-3 ">
        <div className=" flex gap-3 flex-col">
          <h3 className="lg:text-4xl font-bold text-2xl">
            Platfrom lelang photo by
          </h3>
          <h1 className="lg:text-6xl font-bold text-4xl uppercase lg:my-2">
            BRI
          </h1>
          <p className="text-[#6D7280] text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Egestas at at tristique et. <br /> Eget vestibulum diam convallis
            nunc mauris nunc, elit.
          </p>
          <div className="my-4">
            <button className="bg-[#009A63] text-white py-2 px-3 rounded-md">
              Lihat foto
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-3 lg:block lg:mt-0">
          <img src={Hero} alt="Hero" className="w-[260px] lg:w-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
