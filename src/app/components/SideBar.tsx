"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SideBarProps {
  id: number;
  menu: string;
  icon: string;
  link: string;
}

const SideBarMenu: SideBarProps[] = [
  { id: 1, menu: "Dashboard", icon: "asdks", link: "dashboard" },
  { id: 2, menu: "Music", icon: "asdks", link: "music" },
  { id: 3, menu: "Portofolio", icon: "asdks", link: "portofolio" },
  { id: 4, menu: "Create", icon: "asdks", link: "create" },
  { id: 5, menu: "Wallet", icon: "asdks", link: "wallet" },
];

const SideBar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard");

  const handleClickMenu = (menu: string, link: string) => {
    setActiveMenu(menu);
    router.push(`/musician/${link.toLowerCase()}`);
  };

  return (
    <div className="flex flex-col bg-neutral-black-base w-[17.222vw] px-[1.111vw] py-[1.667vw] gap-[2vw]">
      <div className="flex flex-row gap-[0.556vw] items-center">
        <div className="w-[4.167vw] aspect-[60/47] bg-black"></div>
        <div className="font-jakarta flex flex-col">
          <p className="text-[1.25vw] font-bold text-white">TuneCent</p>
          <p className="text-[0.833vw] font-regular text-white">
            Own your sound
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[0.667vw] w-full">
        {SideBarMenu.map((key) => (
          <button
            key={key.id}
            onClick={() => {
              handleClickMenu(key.menu, key.link);
            }}
            className={
              activeMenu === key.menu
                ? `cursor-pointer w-full aspect-[228/65] flex flex-row items-center px-[1vw] gap-[1.111vw] bg-purple-base rounded-[0.486vw]`
                : `cursor-pointer w-full aspect-[228/65] flex flex-row items-center px-[1vw] gap-[1.111vw] rounded-[0.486w]`
            }
          >
            <div className="w-[2.75vw] aspect-[1/1]  bg-white"></div>
            <p className="text-[1vw] font-jakarta text-white">{key.menu}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
