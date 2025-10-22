"use client";

import SearchBar from "../SearchBar";
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useMemo } from 'react';

interface ProfileRowProps {
  userRole?: "Creator" | "User";
}

const ProfileRow = ({ userRole = "Creator" }: ProfileRowProps) => {
  const { authenticated, user } = usePrivy();
  const { wallets } = useWallets();

  // Format wallet address for display
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  // Get username from various sources
  const username = useMemo(() => {
    if (!authenticated || !user) return "Guest";

    // Priority: Twitter username > Discord username > GitHub username > Email name > Wallet address
    if (user.twitter?.username) return user.twitter.username;
    if (user.discord?.username) return user.discord.username;
    if (user.github?.username) return user.github.username;
    if (user.email?.address) {
      // Extract name part from email (before @)
      const emailName = user.email.address.split('@')[0];
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }
    if (wallets.length > 0) {
      return formatAddress(wallets[0].address);
    }

    return "User";
  }, [authenticated, user, wallets]);

  // Get user ID for display
  const userId = useMemo(() => {
    if (!authenticated || !user) return "GUEST";

    // Priority: Email > Twitter handle > Shortened wallet address > User ID
    if (user.email?.address) {
      const handle = user.email.address.split('@')[0].toUpperCase();
      return handle;
    }
    if (user.twitter?.username) return user.twitter.username.toUpperCase();
    if (wallets.length > 0) {
      return formatAddress(wallets[0].address).toUpperCase();
    }

    return user.id.slice(0, 12).toUpperCase();
  }, [authenticated, user, wallets]);

  return (
    <div className="w-full flex flex-row justify-between border-b-[0.069vw] border-[#201C22] pb-[1.111vw]">
      <div className="flex flex-row gap-[1.111vw]">
        <div className="w-[3.65vw] aspect-[1/1] bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-jakarta font-bold text-[1.5vw]">
          {username.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col gap-[0.111vw]">
          <div className="flex flex-row gap-[1.111vw] items-center">
            <p className="font-jakarta text-[#FFFEFF] text-[1.111vw]">
              {username}
            </p>
            <div className="bg-gradient-to-r from-[#8B609B] to-[#302135] rounded-[0.347vw] px-[0.556vw] py-[0.278vw]">
              <p className="text-[0.833vw] font-regular font-jakarta text-white">
                {userRole}
              </p>
            </div>
            {!authenticated && (
              <div className="bg-yellow-500/20 rounded-[0.347vw] px-[0.556vw] py-[0.278vw]">
                <p className="text-[0.833vw] font-regular font-jakarta text-yellow-500">
                  Not Connected
                </p>
              </div>
            )}
          </div>
          <p className="font-jakarta text-white-darker text-[0.833vw]">
            @{userId}
          </p>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default ProfileRow;
