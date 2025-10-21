"use client";

import MusicPoolCard from "../dashboard/MusicPoolCard";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHourglassEnd } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";

const InvestCard = () => {
  return (
    <div className="flex flex-row w-full gap-[1.111vw]">
      <div className="w-[13.333vw]">
        <MusicPoolCard playable={false} />
      </div>
      <div className="w-full flex flex-col gap-[0.556vw] p-[0.556vw]">
        <div className="flex flex-col gap-[0.222vw]">
          <h5 className="text-[1.111vw] font-jakarta text-white font-bold">
            Mejikuhibiniu
          </h5>
          <div className="w-full flex flex-row justify-between">
            <p className="text-[1.111vw] font-jakarta text-white font-regular">
              Tenxi
            </p>
            <p className="text-[0.889vw] font-jakarta text-white font-regular">
              75% terdanai
            </p>
          </div>
          <div className="w-full aspect-[1036/11] flex flex-row justify-between bg-black-lighter">
            <div className="w-[75%] aspect-[1036/11] flex flex-row justify-between bg-purple-lighter"></div>
          </div>
          <div className="flex flex-row gap-[1.333vw]">
            <p className="text-[#72FFC7] font-jakarta text-[0.8333vw]">
              Low Risk
            </p>
            <div className="flex flex-row justify-center items-center gap-[0.444vw]">
              <IoPeopleSharp size={16} color="white" />
              <p className="text-white font-jakarta text-[0.833vw]">45</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-[0.444vw]">
              <FaHourglassEnd size={16} color="white" />
              <p className="text-white font-jakarta text-[0.833vw]">2d 0h</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row items-end gap-[1vw]">
            <h2 className="font-jakarta font-bold text-white text-[2.222vw]">
              15,000
            </h2>
            <p className="font-jakarta text-white text-[1.111vw] mb-[0.333vw]">
              Listeners
            </p>
          </div>
          <div className="flex flex-row gap-[0.556vw]">
            <div className="flex flex-row gap-[0.556vw] rounded-[0.556vw] border-[0.069vw] border-white px-[1.111vw] items-center">
              <RiCoinsLine size={20} color="white" />
              <input
                className="font-inter text-neutral-black-light text-[1.111vw]"
                type="number"
                placeholder="Insert"
              />
            </div>
            <button className="w-[7.431vw] bg-purple-base flex justify-center items-center rounded-[0.486vw]">
              <p className="font-inter text-white text-[0.972vw]font-medium">
                Invest
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestCard;
