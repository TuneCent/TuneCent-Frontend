"use client";
import { ArrowUpRight } from "react-feather";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

interface WalletProps {
  walletName: string;
  walletIcon?: string;
  walletOnClick: () => void;
}

interface NavbarMenuProps {
  menuName: string;
  link: string;
}

const Wallet: WalletProps[] = [
  { walletName: "Metamask", walletIcon: "asladf", walletOnClick: () => {} },
  { walletName: "Phantom", walletIcon: "asladf", walletOnClick: () => {} },
  {
    walletName: "Coinbase Wallet",
    walletIcon: "asladf",
    walletOnClick: () => {},
  },
  {
    walletName: "Other Wallets",
    walletIcon: "asladf",
    walletOnClick: () => {},
  },
];

const NavbarMenu: NavbarMenuProps[] = [
  {
    menuName: "Dashboard",
    link: "/musician/dashboard",
  },
  {
    menuName: "Music",
    link: "/musician/music",
  },
  {
    menuName: "Portofolio",
    link: "/musician/portofolio",
  },
  {
    menuName: "Create",
    link: "/musician/create",
  },
  {
    menuName: "Wallet",
    link: "/musician/wallet",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [onClickConnect, setOnClickConnect] = useState<boolean>(false);

  const handleClickConnect = () => {
    setOnClickConnect(!onClickConnect);
  };

  const handleClickMenu = (link: string) => {
    router.push(link);
  };

  // const handleClickMusic ()

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
        <div className="relative flex flex-row justify-center items-center w-[32.917vw] gap-[1.778vw] aspect-[474/44] rounded-[1.042vw] bg-gradient-to-r from-[#8B609B]/20 to-[#302135]/20">
          {NavbarMenu.map((menuKey) => (
            <button
              key={menuKey.menuName}
              onClick={() => handleClickMenu(menuKey.link)}
            >
              <p className="text-white font-jakarta font-regular text-[1.111vw]">
                {menuKey.menuName}
              </p>
            </button>
          ))}
        </div>

        <button
          onClick={handleClickConnect}
          className="cursor-pointer w-[11.25vw] flex flex-row gap-[0.556vw] rounded-[0.556vw] justify-center items-center aspect-[162/40] bg-purple-base"
        >
          <p className="font-inter text-[0.972vw] text-[#FFFEFF]">
            Connect Wallet
          </p>
          <ArrowUpRight size={20} color="white" />
        </button>
        {onClickConnect && (
          <div className="absolute flex flex-col gap-[0.889vw] right-[10vw] top-[6vw] w-[28.819vw] aspect-[413/324] bg-neutral-black-base rounded-[1.042vw] p-[1.111vw]">
            <div className="w-full flex flex-col gap-[0.056vw]">
              <div className="w-full flex flex-row justify-between">
                <h4 className="font-jakarta font-semibold text-[1.389vw] text-white">
                  Connect Wallet
                </h4>
              </div>
              <p className="text-[0.833vw] text-white-darker font-jakarta">
                Get started by connecting your preferred wallet below.
              </p>
            </div>
            {Wallet.map((walletKey) => (
              <button
                key={walletKey.walletName}
                className="cursor-pointer w-full flex flex-col gap-[0.889vw]"
              >
                <div className="flex flex-row justify-between items-center bg-black-lighter p-[0.667vw]">
                  <div className="flex flex-row gap-[0.667vw] items-center">
                    <div className="w-[1.736vw] aspect-[1/1] bg-white-darker"></div>
                    <h6 className="font-bold font-jakarta text-white text-[0.972vw]">
                      {walletKey.walletName}
                    </h6>
                  </div>
                  <ArrowUpRight size={20} color="white" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
