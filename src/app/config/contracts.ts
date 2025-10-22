import { baseSepolia } from 'wagmi/chains';

// Contract addresses on Base Sepolia (Chain ID: 84532)
export const CONTRACT_ADDRESSES = {
  [baseSepolia.id]: {
    MusicRegistry: '0xd10c657cad43cc213bd1a69e602ee46359b209d6' as `0x${string}`,
    CrowdfundingPool: '0x8aa70d908e36cb7598a38de15392e21674dd0ffe' as `0x${string}`,
    RoyaltyDistributor: '0x1cfeb8a7ffd5268c488a8ee6e8bbdcc20ad263c4' as `0x${string}`,
    ReputationScore: '0x0c32b07d938d07eb5c62c7aba95f652dda23a901' as `0x${string}`,
  },
} as const;

// Music Registry ABI
export const MUSIC_REGISTRY_ABI = [
  {
    type: 'function',
    name: 'registerMusic',
    inputs: [
      { name: 'ipfsCID', type: 'string', internalType: 'string' },
      { name: 'fingerprintHash', type: 'bytes32', internalType: 'bytes32' },
      { name: 'title', type: 'string', internalType: 'string' },
      { name: 'artist', type: 'string', internalType: 'string' },
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getMusicMetadata',
    inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct MusicRegistry.MusicMetadata',
        components: [
          { name: 'ipfsCID', type: 'string', internalType: 'string' },
          { name: 'fingerprintHash', type: 'bytes32', internalType: 'bytes32' },
          { name: 'creator', type: 'address', internalType: 'address' },
          { name: 'registeredAt', type: 'uint256', internalType: 'uint256' },
          { name: 'title', type: 'string', internalType: 'string' },
          { name: 'artist', type: 'string', internalType: 'string' },
          { name: 'isActive', type: 'bool', internalType: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTotalRegistered',
    inputs: [],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'verifyFingerprint',
    inputs: [{ name: 'fingerprintHash', type: 'bytes32', internalType: 'bytes32' }],
    outputs: [
      { name: 'exists', type: 'bool', internalType: 'bool' },
      { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
      { name: 'creator', type: 'address', internalType: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'MusicRegistered',
    inputs: [
      { name: 'tokenId', type: 'uint256', indexed: true, internalType: 'uint256' },
      { name: 'creator', type: 'address', indexed: true, internalType: 'address' },
      { name: 'fingerprintHash', type: 'bytes32', indexed: true, internalType: 'bytes32' },
      { name: 'ipfsCID', type: 'string', indexed: false, internalType: 'string' },
      { name: 'title', type: 'string', indexed: false, internalType: 'string' },
    ],
    anonymous: false,
  },
] as const;

// Crowdfunding Pool ABI
export const CROWDFUNDING_POOL_ABI = [
  {
    type: 'function',
    name: 'createCampaign',
    inputs: [
      { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
      { name: 'goalAmount', type: 'uint256', internalType: 'uint256' },
      { name: 'royaltyPercentage', type: 'uint256', internalType: 'uint256' },
      { name: 'durationInDays', type: 'uint256', internalType: 'uint256' },
      { name: 'lockupPeriodInDays', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'contribute',
    inputs: [{ name: 'campaignId', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'getCampaign',
    inputs: [{ name: 'campaignId', type: 'uint256', internalType: 'uint256' }],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct CrowdfundingPool.Campaign',
        components: [
          { name: 'tokenId', type: 'uint256', internalType: 'uint256' },
          { name: 'creator', type: 'address', internalType: 'address' },
          { name: 'goalAmount', type: 'uint256', internalType: 'uint256' },
          { name: 'raisedAmount', type: 'uint256', internalType: 'uint256' },
          { name: 'royaltyPercentage', type: 'uint256', internalType: 'uint256' },
          { name: 'deadline', type: 'uint256', internalType: 'uint256' },
          { name: 'lockupPeriod', type: 'uint256', internalType: 'uint256' },
          { name: 'status', type: 'uint8', internalType: 'enum CrowdfundingPool.CampaignStatus' },
          { name: 'fundsWithdrawn', type: 'bool', internalType: 'bool' },
          { name: 'createdAt', type: 'uint256', internalType: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getCampaignByToken',
    inputs: [{ name: 'tokenId', type: 'uint256', internalType: 'uint256' }],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTotalCampaigns',
    inputs: [],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'finalizeCampaign',
    inputs: [{ name: 'campaignId', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'withdrawFunds',
    inputs: [{ name: 'campaignId', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'CampaignCreated',
    inputs: [
      { name: 'campaignId', type: 'uint256', indexed: true, internalType: 'uint256' },
      { name: 'tokenId', type: 'uint256', indexed: true, internalType: 'uint256' },
      { name: 'creator', type: 'address', indexed: true, internalType: 'address' },
      { name: 'goalAmount', type: 'uint256', indexed: false, internalType: 'uint256' },
      { name: 'royaltyPercentage', type: 'uint256', indexed: false, internalType: 'uint256' },
      { name: 'deadline', type: 'uint256', indexed: false, internalType: 'uint256' },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ContributionMade',
    inputs: [
      { name: 'campaignId', type: 'uint256', indexed: true, internalType: 'uint256' },
      { name: 'contributor', type: 'address', indexed: true, internalType: 'address' },
      { name: 'amount', type: 'uint256', indexed: false, internalType: 'uint256' },
      { name: 'totalRaised', type: 'uint256', indexed: false, internalType: 'uint256' },
    ],
    anonymous: false,
  },
] as const;

// Helper to get contract address for current chain
export function getContractAddress(chainId: number, contractName: keyof typeof CONTRACT_ADDRESSES[84532]) {
  const addresses = CONTRACT_ADDRESSES[chainId as keyof typeof CONTRACT_ADDRESSES];
  if (!addresses) {
    throw new Error(`No contract addresses configured for chain ID ${chainId}`);
  }
  return addresses[contractName];
}
