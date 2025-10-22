"use client";

import { useState, useEffect } from "react";
import MusicPoolCard from "../dashboard/MusicPoolCard";
import { IoPeopleSharp } from "react-icons/io5";
import { FaHourglassEnd } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";
import { useAccount } from "wagmi";
import { useContributeToCampaign } from "@/app/hooks/useCrowdfundingPool";
import { formatEther } from "viem";
import TransactionSuccessModal from "@/app/components/common/TransactionSuccessModal";

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [investmentData, setInvestmentData] = useState<{
    amount: string;
    campaignId: number;
    musicTitle: string;
    musicArtist: string;
    royaltyPercentage?: number;
  } | null>(null);

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

    // Save investment data before transaction
    setInvestmentData({
      amount: investAmount,
      campaignId,
      musicTitle,
      musicArtist,
      royaltyPercentage,
    });

    // Trigger wallet modal
    contribute(campaignId, investAmount);
  };

  // Watch for transaction hash - shows modal 3 seconds after user signs in wallet
  useEffect(() => {
    if (transactionHash && investmentData) {
      const timer = setTimeout(() => {
        setShowSuccessModal(true);
      }, 3000); // 3 second delay

      return () => clearTimeout(timer);
    }
  }, [transactionHash, investmentData]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setInvestAmount("");
    setInvestmentData(null);
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

            {/* Error Message */}
            {contributeError && (
              <p className="text-red-400 text-[0.722vw]">
                Error: {contributeError.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <TransactionSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        transactionHash={transactionHash}
        title="Investment Successful!"
      >
        <div className="space-y-[1.111vw]">
          <div className="bg-black border border-white-darker rounded-[0.556vw] p-[1.111vw]">
            <h3 className="font-semibold font-jakarta text-white text-[1.111vw] mb-[0.833vw]">Your Investment</h3>
            <div className="space-y-[0.556vw]">
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Amount:</span>
                <span className="font-bold text-white text-[0.833vw] font-jakarta">{investmentData?.amount} ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Music:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{investmentData?.musicTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Artist:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{investmentData?.musicArtist}</span>
              </div>
              {investmentData?.royaltyPercentage && (
                <div className="flex justify-between">
                  <span className="text-white-darker text-[0.833vw] font-jakarta">Royalty Share:</span>
                  <span className="font-medium text-green-400 text-[0.833vw] font-jakarta">
                    {investmentData.royaltyPercentage / 100}%
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-purple-base bg-opacity-20 border border-purple-lighter rounded-[0.556vw] p-[1.111vw]">
            <p className="text-[0.833vw] text-white font-jakarta">
              Your investment has been submitted! You are now a contributor to this music campaign and will receive royalty payments based on the music&apos;s performance.
            </p>
          </div>

          {coverImageUrl && (
            <div className="rounded-[0.556vw] overflow-hidden border border-white-darker">
              <MusicPoolCard playable={false} coverImageUrl={coverImageUrl} />
            </div>
          )}
        </div>
      </TransactionSuccessModal>
    </div>
  );
};

export default InvestCard;
