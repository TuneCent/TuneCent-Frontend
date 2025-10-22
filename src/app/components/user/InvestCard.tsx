"use client";

import { useState } from "react";
import MusicPoolCard from "../dashboard/MusicPoolCard";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHourglassEnd } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";
import { useAccount } from "wagmi";
import { useContributeToCampaign } from "@/app/hooks/useCrowdfundingPool";
import { formatEther } from "viem";

export interface InvestCardProps {
  campaignId: number;
  musicTitle: string;
  musicArtist: string;
  coverImageUrl?: string;
  fundedPercentage: number;
  riskLevel: "Low Risk" | "Medium Risk" | "High Risk";
  investorCount: number;
  timeRemaining: string;
  targetListeners: number;
  genre?: string;
  goalAmount?: bigint;
  raisedAmount?: bigint;
  royaltyPercentage?: number;
}

const InvestCard = ({
  campaignId,
  musicTitle,
  musicArtist,
  coverImageUrl,
  fundedPercentage,
  riskLevel,
  investorCount,
  timeRemaining,
  targetListeners,
  goalAmount,
  raisedAmount,
  royaltyPercentage,
}: InvestCardProps) => {
  const { isConnected } = useAccount();
  const { contribute, isContributing, isConfirming, isConfirmed, contributeError, transactionHash } =
    useContributeToCampaign();

  const [investAmount, setInvestAmount] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleInvest = () => {
    if (!isConnected) {
      alert("Please connect your wallet to invest");
      return;
    }

    if (!investAmount || parseFloat(investAmount) <= 0) {
      alert("Please enter a valid investment amount");
      return;
    }

    contribute(campaignId, investAmount);
  };

  // Show success message when transaction is confirmed
  if (isConfirmed && !showSuccessMessage) {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setInvestAmount("");
    }, 5000);
  }

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
          <div className="flex flex-col gap-[0.556vw]">
            <div className="flex flex-row gap-[0.556vw]">
              <div className="flex flex-row gap-[0.556vw] rounded-[0.556vw] border-[0.069vw] border-white px-[1.111vw] items-center bg-black">
                <RiCoinsLine size={20} color="white" />
                <input
                  className="font-inter text-white bg-transparent text-[1.111vw] outline-none w-[8vw]"
                  type="number"
                  step="0.001"
                  placeholder="0.01 ETH"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(e.target.value)}
                  disabled={isContributing || isConfirming}
                />
              </div>
              <button
                onClick={handleInvest}
                disabled={isContributing || isConfirming || !isConnected}
                className="w-[7.431vw] bg-purple-base flex justify-center items-center rounded-[0.486vw] hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <p className="font-inter text-white text-[0.972vw] font-medium">
                  {isContributing || isConfirming ? "Processing..." : "Invest"}
                </p>
              </button>
            </div>

            {/* Royalty Info */}
            {royaltyPercentage && (
              <p className="text-white-darker text-[0.722vw]">
                You will receive {royaltyPercentage / 100}% of future royalties
              </p>
            )}

            {/* Goal Info */}
            {goalAmount && raisedAmount && (
              <p className="text-white-darker text-[0.722vw]">
                {formatEther(raisedAmount)} ETH / {formatEther(goalAmount)} ETH raised
              </p>
            )}

            {/* Success Message */}
            {showSuccessMessage && transactionHash && (
              <p className="text-green-400 text-[0.722vw]">
                Investment successful! Tx: {transactionHash.slice(0, 10)}...
              </p>
            )}

            {/* Error Message */}
            {contributeError && (
              <p className="text-red-400 text-[0.722vw]">
                Error: {contributeError.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestCard;
