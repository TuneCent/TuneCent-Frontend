"use client";
import DanaChart from "./DanaChart";
import { ArrowUp } from "react-feather";
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useBalance } from 'wagmi';
import { formatEther } from 'viem';

const TotalDana = () => {
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];

  // Fetch balance from the wallet
  const { data: balance, isLoading } = useBalance({
    address: wallet?.address as `0x${string}` | undefined,
  });

  // Format balance for display
  const formatBalance = () => {
    if (!authenticated || !wallet) return "Connect Wallet";
    if (isLoading) return "Loading...";
    if (!balance) return "0.00";

    const ethBalance = parseFloat(formatEther(balance.value));
    // For demo, multiply ETH by ~$3000 to show USD value
    const usdValue = ethBalance * 3000;
    return `$${usdValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="w-[38.194vw] flex flex-col justify-between bg-black rounded-[1.042vw]p-[1.883vw]">
      <div className="flex flex-col gap-[0.111vw]">
        <p className="text-[1.333vw] font-jakarta text-white">Total Value</p>
        <div className="w-full flex flex-row gap-[1.333vw]">
          <p className="text-[2.222vw] text-white font-[700] font-jakarta">
            {formatBalance()}
          </p>
          {authenticated && wallet && balance && (
            <div className="flex flex-col gap-[0.111vw]">
              <div className="flex flex-row gap-[0.556vw] items-center">
                <ArrowUp color="white" size={16} />
                <p className="text-[#72FFC7] font-bold font-inter">30%</p>
              </div>
              <p className="text-[0.889vw] text-white/60 font-jakarta">
                {parseFloat(formatEther(balance.value)).toFixed(4)} {balance.symbol}
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <DanaChart />
      </div>
    </div>
  );
};

export default TotalDana;
