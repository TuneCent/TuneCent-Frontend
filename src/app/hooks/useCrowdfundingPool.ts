import { useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { CONTRACT_ADDRESSES, CROWDFUNDING_POOL_ABI } from '../config/contracts';
import { parseEther } from 'viem';

export enum CampaignStatus {
  Active = 0,
  Successful = 1,
  Failed = 2,
  Cancelled = 3,
}

export interface Campaign {
  tokenId: bigint;
  creator: string;
  goalAmount: bigint;
  raisedAmount: bigint;
  royaltyPercentage: bigint;
  deadline: bigint;
  lockupPeriod: bigint;
  status: CampaignStatus;
  fundsWithdrawn: boolean;
  createdAt: bigint;
}

export function useCrowdfundingPool() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  // Write function for creating campaign
  const {
    data: hash,
    isPending: isCreating,
    writeContract,
    error: createError,
  } = useWriteContract();

  // Skip waiting for transaction confirmation (for POC only)
  const isConfirming = false;
  const isConfirmed = false;

  /**
   * Create a new crowdfunding campaign
   * @param tokenId - Music NFT token ID
   * @param goalAmountEth - Funding goal in ETH
   * @param royaltyPercentage - Percentage of royalties to offer (in basis points, e.g., 2500 = 25%)
   * @param durationInDays - Campaign duration in days
   * @param lockupPeriodInDays - Lock-up period in days
   */
  const createCampaign = (
    tokenId: number,
    goalAmountEth: string,
    royaltyPercentage: number,
    durationInDays: number,
    lockupPeriodInDays: number
  ) => {
    const goalAmount = parseEther(goalAmountEth);

    return writeContract({
      address: contractAddress,
      abi: CROWDFUNDING_POOL_ABI,
      functionName: 'createCampaign',
      args: [
        BigInt(tokenId),
        goalAmount,
        BigInt(royaltyPercentage),
        BigInt(durationInDays),
        BigInt(lockupPeriodInDays),
      ],
    });
  };

  return {
    createCampaign,
    isCreating,
    isConfirming,
    isConfirmed,
    createError,
    transactionHash: hash,
  };
}

/**
 * Hook to contribute to a campaign
 */
export function useContributeToCampaign() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  const {
    data: hash,
    isPending: isContributing,
    writeContract,
    error: contributeError,
  } = useWriteContract();

  // Skip waiting for transaction confirmation (for POC only)
  const isConfirming = false;
  const isConfirmed = false;

  /**
   * Contribute to a campaign
   * @param campaignId - Campaign ID
   * @param amountEth - Amount to contribute in ETH
   */
  const contribute = (campaignId: number, amountEth: string) => {
    const amount = parseEther(amountEth);

    return writeContract({
      address: contractAddress,
      abi: CROWDFUNDING_POOL_ABI,
      functionName: 'contribute',
      args: [BigInt(campaignId)],
      value: amount,
    });
  };

  return {
    contribute,
    isContributing,
    isConfirming,
    isConfirmed,
    contributeError,
    transactionHash: hash,
  };
}

/**
 * Hook to get campaign details
 */
export function useGetCampaign(campaignId?: number) {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  const { data, isLoading, error, refetch } = useReadContract({
    address: contractAddress,
    abi: CROWDFUNDING_POOL_ABI,
    functionName: 'getCampaign',
    args: campaignId !== undefined ? [BigInt(campaignId)] : undefined,
    query: {
      enabled: campaignId !== undefined && campaignId > 0,
    },
  });

  return {
    campaign: data as Campaign | undefined,
    isLoading,
    error,
    refetch,
  };
}

/**
 * Hook to get campaign ID by token ID
 */
export function useGetCampaignByToken(tokenId?: number) {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  const { data, isLoading, error } = useReadContract({
    address: contractAddress,
    abi: CROWDFUNDING_POOL_ABI,
    functionName: 'getCampaignByToken',
    args: tokenId !== undefined ? [BigInt(tokenId)] : undefined,
    query: {
      enabled: tokenId !== undefined,
    },
  });

  return {
    campaignId: data ? Number(data) : 0,
    isLoading,
    error,
  };
}

/**
 * Hook to get total campaigns count
 */
export function useGetTotalCampaigns() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  const { data, isLoading, error } = useReadContract({
    address: contractAddress,
    abi: CROWDFUNDING_POOL_ABI,
    functionName: 'getTotalCampaigns',
  });

  return {
    totalCampaigns: data ? Number(data) : 0,
    isLoading,
    error,
  };
}

/**
 * Hook to finalize a campaign
 */
export function useFinalizeCampaign() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  const {
    data: hash,
    isPending: isFinalizing,
    writeContract,
    error: finalizeError,
  } = useWriteContract();

  // Skip waiting for transaction confirmation (for POC only)
  const isConfirming = false;
  const isConfirmed = false;

  const finalizeCampaign = (campaignId: number) => {
    return writeContract({
      address: contractAddress,
      abi: CROWDFUNDING_POOL_ABI,
      functionName: 'finalizeCampaign',
      args: [BigInt(campaignId)],
    });
  };

  return {
    finalizeCampaign,
    isFinalizing,
    isConfirming,
    isConfirmed,
    finalizeError,
    transactionHash: hash,
  };
}

/**
 * Hook to withdraw funds from successful campaign
 */
export function useWithdrawFunds() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].CrowdfundingPool;

  const {
    data: hash,
    isPending: isWithdrawing,
    writeContract,
    error: withdrawError,
  } = useWriteContract();

  // Skip waiting for transaction confirmation (for POC only)
  const isConfirming = false;
  const isConfirmed = false;

  const withdrawFunds = (campaignId: number) => {
    return writeContract({
      address: contractAddress,
      abi: CROWDFUNDING_POOL_ABI,
      functionName: 'withdrawFunds',
      args: [BigInt(campaignId)],
    });
  };

  return {
    withdrawFunds,
    isWithdrawing,
    isConfirming,
    isConfirmed,
    withdrawError,
    transactionHash: hash,
  };
}
