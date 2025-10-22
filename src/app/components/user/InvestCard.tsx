"use client";

import MusicPoolCard from "../dashboard/MusicPoolCard";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHourglassEnd } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";

export interface InvestCardProps {
  musicTitle: string;
  musicArtist: string;
  coverImageUrl?: string;
  fundedPercentage: number;
  riskLevel: "Low Risk" | "Medium Risk" | "High Risk";
  investorCount: number;
  timeRemaining: string;
  targetListeners: number;
  genre?: string;
}

const InvestCard = ({
  musicTitle,
  musicArtist,
  coverImageUrl,
  fundedPercentage,
  riskLevel,
  investorCount,
  timeRemaining,
  targetListeners,
}: InvestCardProps) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low Risk":
        return "#72FFC7";
      case "Medium Risk":
        return "#FFD700";
      case "High Risk":
        return "#FF6B6B";
      default:
        return "#72FFC7";
    }
  };

  return (
    <div className="flex flex-row w-full gap-[1.111vw]">
      <div className="w-[13.333vw]">
        <MusicPoolCard playable={false} coverImageUrl={coverImageUrl} />
      </div>
      <div className="w-full flex flex-col gap-[0.556vw] p-[0.556vw]">
        <div className="flex flex-col gap-[0.222vw]">
          <h5 className="text-[1.111vw] font-jakarta text-white font-bold">
            {musicTitle}
          </h5>
          <div className="w-full flex flex-row justify-between">
            <p className="text-[1.111vw] font-jakarta text-white font-regular">
              {musicArtist}
            </p>
            <p className="text-[0.889vw] font-jakarta text-white font-regular">
              {fundedPercentage}% terdanai
            </p>
          </div>
          <div className="w-full aspect-[1036/11] flex flex-row justify-between bg-black-lighter">
            <div
              className="aspect-[1036/11] flex flex-row justify-between bg-purple-lighter"
              style={{ width: `${fundedPercentage}%` }}
            ></div>
          </div>
          <div className="flex flex-row gap-[1.333vw]">
            <p
              className="font-jakarta text-[0.8333vw]"
              style={{ color: getRiskColor(riskLevel) }}
            >
              {riskLevel}
            </p>
            <div className="flex flex-row justify-center items-center gap-[0.444vw]">
              <IoPeopleSharp size={16} color="white" />
              <p className="text-white font-jakarta text-[0.833vw]">
                {investorCount}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-[0.444vw]">
              <FaHourglassEnd size={16} color="white" />
              <p className="text-white font-jakarta text-[0.833vw]">
                {timeRemaining}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row items-end gap-[1vw]">
            <h2 className="font-jakarta font-bold text-white text-[2.222vw]">
              {targetListeners.toLocaleString()}
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
              <p className="font-inter text-white text-[0.972vw] font-medium">
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
