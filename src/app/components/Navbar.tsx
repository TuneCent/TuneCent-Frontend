"use client";
import { usePrivy, useWallets } from '@privy-io/react-auth';

const Navbar = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const { wallets } = useWallets();

  // Get the first wallet (primary wallet)
  const wallet = wallets[0];

  // Format wallet address for display
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="relative w-[100vw] h-[6.667vw] flex flex-row justify-center p-[1.667vw]">
      <div className="w-[80vw] flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="flex flex-col gap-[0.222vw] text-white">
            <p className="font-jakarta font-bold text-[1.111vw] text-white">
              TuneCent
            </p>
            <p className="font-jakarta text-[0.889vw] text-white">
              Own your sound
            </p>
          </div>
        </div>
        {/* <div className="relative flex flex-row justify-center items-center w-[32.917vw] gap-[1.778vw] aspect-[474/44] rounded-[1.042vw] bg-gradient-to-r from-[#8B609B]/20 to-[#302135]/20">
            {NavbarMenu.map((menuKey) => (
              <button
                key={menuKey.menuName}
                onClick={() => handleClickMenu(menuKey.link)}
              >
                <p className="cursor-pointer text-white font-jakarta font-regular text-[1.111vw]">
                  {menuKey.menuName}
                </p>
              </button>
            ))}
          </div> */}

        {/* Privy Login/Logout Button */}
        {ready && !authenticated ? (
          <button
            onClick={login}
            className="px-[1.5vw] py-[0.5vw] bg-gradient-to-r from-[#8B609B] to-[#302135] rounded-[0.5vw] text-white font-jakarta font-medium text-[0.889vw] hover:opacity-80 transition-opacity"
          >
            Connect Wallet
          </button>
        ) : ready && authenticated ? (
          <div className="flex flex-row items-center gap-[0.833vw]">
            {wallet && (
              <div className="px-[1vw] py-[0.5vw] bg-gradient-to-r from-[#8B609B]/20 to-[#302135]/20 rounded-[0.5vw] text-white font-jakarta text-[0.778vw]">
                {formatAddress(wallet.address)}
              </div>
            )}
            <button
              onClick={logout}
              className="px-[1.5vw] py-[0.5vw] border border-white/20 rounded-[0.5vw] text-white font-jakarta font-medium text-[0.889vw] hover:bg-white/10 transition-colors"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <div className="px-[1.5vw] py-[0.5vw] bg-gradient-to-r from-[#8B609B]/20 to-[#302135]/20 rounded-[0.5vw] text-white/50 font-jakarta text-[0.889vw]">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
