"use client";

import { useState, useEffect } from "react";
import { useCrowdfundingPool } from "@/app/hooks/useCrowdfundingPool";
import { useAccount } from "wagmi";
import TransactionSuccessModal from "@/app/components/common/TransactionSuccessModal";

interface CreateCampaignModalProps {
  tokenId: number;
  musicTitle: string;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CreateCampaignModal({
  tokenId,
  musicTitle,
  onClose,
  onSuccess,
}: CreateCampaignModalProps) {
  const { isConnected } = useAccount();
  const {
    createCampaign,
    isCreating,
    isConfirming,
    isConfirmed,
    createError,
    transactionHash,
  } = useCrowdfundingPool();

  const [goalAmount, setGoalAmount] = useState<string>("");
  const [royaltyPercentage, setRoyaltyPercentage] = useState<string>("25");
  const [durationInDays, setDurationInDays] = useState<string>("30");
  const [lockupPeriodInDays, setLockupPeriodInDays] = useState<string>("90");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [poolData, setPoolData] = useState<{
    musicTitle: string;
    goalAmount: string;
    royaltyPercentage: string;
    duration: string;
    lockupPeriod: string;
  } | null>(null);

  const handleSubmit = () => {
    if (!isConnected) {
      alert("Please connect your wallet");
      return;
    }

    if (!goalAmount || parseFloat(goalAmount) <= 0) {
      alert("Please enter a valid funding goal");
      return;
    }

    const royaltyBasisPoints = Math.floor(parseFloat(royaltyPercentage) * 100);
    if (royaltyBasisPoints <= 0 || royaltyBasisPoints > 5000) {
      alert("Royalty percentage must be between 0.01% and 50%");
      return;
    }

    // Save pool data before transaction
    setPoolData({
      musicTitle,
      goalAmount,
      royaltyPercentage,
      duration: durationInDays,
      lockupPeriod: lockupPeriodInDays,
    });

    // Trigger wallet modal
    createCampaign(
      tokenId,
      goalAmount,
      royaltyBasisPoints,
      parseInt(durationInDays),
      parseInt(lockupPeriodInDays)
    );
  };

  // Watch for transaction hash - shows modal 3 seconds after user signs in wallet
  useEffect(() => {
    if (transactionHash && poolData) {
      const timer = setTimeout(() => {
        setShowSuccessModal(true);
        onSuccess?.();
      }, 3000); // 3 second delay

      return () => clearTimeout(timer);
    }
  }, [transactionHash, poolData, onSuccess]);

  useEffect(() => {
    if (createError) {
      alert(`Error creating campaign: ${createError.message}`);
    }
  }, [createError]);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setPoolData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-neutral-900 border border-white rounded-[1.111vw] p-[2.222vw] w-[50vw] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-[1.667vw]">
          <h2 className="text-white text-[1.667vw] font-bold">
            Create Funding Campaign
          </h2>
          <button
            onClick={onClose}
            className="text-white text-[1.5vw] hover:text-gray-400"
          >
            ✕
          </button>
        </div>

        <p className="text-white-darker text-[0.972vw] mb-[1.111vw]">
          Music: <span className="text-white font-semibold">{musicTitle}</span>
        </p>

        <div className="flex flex-col gap-[1.111vw]">
          {/* Goal Amount */}
          <div className="flex flex-col gap-[0.444vw]">
            <label className="text-white text-[0.972vw] font-medium">
              Funding Goal (ETH)
            </label>
            <input
              type="number"
              step="0.001"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="0.1"
              className="w-full text-white bg-black border border-white rounded-[0.556vw] p-[0.778vw] text-[1.111vw] outline-none"
            />
          </div>

          {/* Royalty Percentage */}
          <div className="flex flex-col gap-[0.444vw]">
            <label className="text-white text-[0.972vw] font-medium">
              Royalty Share for Backers (%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0.01"
              max="50"
              value={royaltyPercentage}
              onChange={(e) => setRoyaltyPercentage(e.target.value)}
              placeholder="25"
              className="w-full text-white bg-black border border-white rounded-[0.556vw] p-[0.778vw] text-[1.111vw] outline-none"
            />
            <p className="text-white-darker text-[0.833vw]">
              Backers will receive {royaltyPercentage}% of future royalties
            </p>
          </div>

          {/* Campaign Duration */}
          <div className="flex flex-col gap-[0.444vw]">
            <label className="text-white text-[0.972vw] font-medium">
              Campaign Duration (Days)
            </label>
            <input
              type="number"
              min="1"
              max="90"
              value={durationInDays}
              onChange={(e) => setDurationInDays(e.target.value)}
              placeholder="30"
              className="w-full text-white bg-black border border-white rounded-[0.556vw] p-[0.778vw] text-[1.111vw] outline-none"
            />
          </div>

          {/* Lockup Period */}
          <div className="flex flex-col gap-[0.444vw]">
            <label className="text-white text-[0.972vw] font-medium">
              Lockup Period (Days)
            </label>
            <input
              type="number"
              min="0"
              value={lockupPeriodInDays}
              onChange={(e) => setLockupPeriodInDays(e.target.value)}
              placeholder="90"
              className="w-full text-white bg-black border border-white rounded-[0.556vw] p-[0.778vw] text-[1.111vw] outline-none"
            />
            <p className="text-white-darker text-[0.833vw]">
              Period during which backers cannot withdraw their shares
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[1.111vw] mt-[1.111vw]">
            <button
              onClick={handleSubmit}
              disabled={isCreating || isConfirming || !isConnected}
              className="flex-1 bg-purple-base text-white rounded-[0.556vw] p-[0.778vw] text-[0.972vw] font-semibold hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCreating || isConfirming ? "Creating..." : "Create Campaign"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-neutral-700 text-white rounded-[0.556vw] p-[0.778vw] text-[0.972vw] font-semibold hover:bg-neutral-600"
            >
              Cancel
            </button>
          </div>

          {transactionHash && (
            <p className="text-white-darker text-[0.833vw] text-center">
              Transaction: {transactionHash}
            </p>
          )}
        </div>
      </div>

      <TransactionSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseSuccessModal}
        transactionHash={transactionHash}
        title="Pool Created Successfully!"
      >
        <div className="space-y-[1.111vw]">
          <div className="bg-black border border-white-darker rounded-[0.556vw] p-[1.111vw]">
            <h3 className="font-semibold font-jakarta text-white text-[1.111vw] mb-[0.833vw]">Pool Details</h3>
            <div className="space-y-[0.556vw]">
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Music:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{poolData?.musicTitle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Funding Goal:</span>
                <span className="font-bold text-white text-[0.833vw] font-jakarta">{poolData?.goalAmount} ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Royalty Share:</span>
                <span className="font-medium text-green-400 text-[0.833vw] font-jakarta">{poolData?.royaltyPercentage}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Duration:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{poolData?.duration} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white-darker text-[0.833vw] font-jakarta">Lockup Period:</span>
                <span className="font-medium text-white text-[0.833vw] font-jakarta">{poolData?.lockupPeriod} days</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500 bg-opacity-20 border border-green-400 rounded-[0.556vw] p-[1.111vw]">
            <p className="text-[0.833vw] text-white font-jakarta">
              Your crowdfunding pool has been created! Investors can now contribute to your music campaign. You will receive funds once the goal is reached.
            </p>
          </div>

          <div className="bg-purple-base bg-opacity-20 border border-purple-lighter rounded-[0.556vw] p-[1.111vw]">
            <h4 className="font-semibold font-jakarta text-white text-[0.972vw] mb-[0.556vw]">Next Steps:</h4>
            <ul className="text-[0.833vw] text-white-darker font-jakarta list-disc list-inside space-y-[0.278vw]">
              <li>Share your campaign with potential investors</li>
              <li>Monitor your funding progress in the dashboard</li>
              <li>Withdraw funds after reaching your goal</li>
            </ul>
          </div>
        </div>
      </TransactionSuccessModal>
    </div>
  );
}
