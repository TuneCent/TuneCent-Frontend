import { useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { CONTRACT_ADDRESSES, MUSIC_REGISTRY_ABI } from '../config/contracts';
import { keccak256, toBytes } from 'viem';

export function useMusicRegistry() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].MusicRegistry;

  // Write function for registering music
  const {
    data: hash,
    isPending: isRegistering,
    writeContract,
    error: registerError,
  } = useWriteContract();

  // Skip waiting for transaction confirmation (for POC only)
  const isConfirming = false;
  const isConfirmed = false;

  /**
   * Register a new music piece on-chain
   * @param ipfsCID - IPFS content identifier for metadata
   * @param title - Music title
   * @param artist - Artist name
   * @param audioFileBuffer - Audio file buffer to generate fingerprint
   */
  const registerMusic = async (
    ipfsCID: string,
    title: string,
    artist: string,
    audioFileBuffer: ArrayBuffer
  ) => {
    // Generate fingerprint hash from audio file
    const fingerprintHash = keccak256(new Uint8Array(audioFileBuffer));

    // Call smart contract
    return writeContract({
      address: contractAddress,
      abi: MUSIC_REGISTRY_ABI,
      functionName: 'registerMusic',
      args: [ipfsCID, fingerprintHash, title, artist],
    });
  };

  return {
    registerMusic,
    isRegistering,
    isConfirming,
    isConfirmed,
    registerError,
    transactionHash: hash,
  };
}

/**
 * Hook to read music metadata from the contract
 */
export function useGetMusicMetadata(tokenId?: number) {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].MusicRegistry;

  const { data, isLoading, error, refetch } = useReadContract({
    address: contractAddress,
    abi: MUSIC_REGISTRY_ABI,
    functionName: 'getMusicMetadata',
    args: tokenId !== undefined ? [BigInt(tokenId)] : undefined,
    query: {
      enabled: tokenId !== undefined,
    },
  });

  return {
    metadata: data,
    isLoading,
    error,
    refetch,
  };
}

/**
 * Hook to get total registered music count
 */
export function useGetTotalRegistered() {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].MusicRegistry;

  const { data, isLoading, error } = useReadContract({
    address: contractAddress,
    abi: MUSIC_REGISTRY_ABI,
    functionName: 'getTotalRegistered',
  });

  return {
    totalRegistered: data ? Number(data) : 0,
    isLoading,
    error,
  };
}

/**
 * Hook to verify if a fingerprint exists
 */
export function useVerifyFingerprint(audioFileBuffer?: ArrayBuffer) {
  const contractAddress = CONTRACT_ADDRESSES[baseSepolia.id].MusicRegistry;

  const fingerprintHash = audioFileBuffer ? keccak256(new Uint8Array(audioFileBuffer)) : undefined;

  const { data, isLoading, error } = useReadContract({
    address: contractAddress,
    abi: MUSIC_REGISTRY_ABI,
    functionName: 'verifyFingerprint',
    args: fingerprintHash ? [fingerprintHash] : undefined,
    query: {
      enabled: !!fingerprintHash,
    },
  });

  return {
    exists: data ? data[0] : false,
    tokenId: data ? Number(data[1]) : 0,
    creator: data ? data[2] : undefined,
    isLoading,
    error,
  };
}
