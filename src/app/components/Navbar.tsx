"use client";
import { useRouter } from "next/navigation";
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface NavbarMenuProps {
  menuName: string;
  link: string;
}

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

  const handleClickMenu = (link: string) => {
    router.push(link);
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

        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
