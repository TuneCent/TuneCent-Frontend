"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SideBarProps {
  variant?: "musician" | "user";
}
interface SideBarMenuProps {
  id: number;
  menu: string;
  icon: string;
  link: string;
}

const SideBarMenuMusician: SideBarMenuProps[] = [
  { id: 1, menu: "Dashboard", icon: "asdks", link: "dashboard" },
  { id: 2, menu: "Music", icon: "asdks", link: "music" },
  { id: 3, menu: "Portofolio", icon: "asdks", link: "portofolio" },
  { id: 4, menu: "Create", icon: "asdks", link: "create" },
  { id: 5, menu: "Wallet", icon: "asdks", link: "wallet" },
];

const SideBarMenuUser: SideBarMenuProps[] = [
  { id: 1, menu: "Home", icon: "asdks", link: "home" },
  { id: 2, menu: "Search", icon: "asdks", link: "search" },
  { id: 3, menu: "Invest", icon: "asdks", link: "invest" },
  { id: 4, menu: "Settings", icon: "asdks", link: "settings" },
  { id: 5, menu: "Sign Out", icon: "asdks", link: "" },
];

const SideBar = ({ variant = "musician" }: SideBarProps) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string>(() =>
    variant === "musician" ? "Dashboard" : "Home"
  );

  const handleClickMenu = (menu: string, link: string) => {
    setActiveMenu(menu);
    if (variant === "musician") router.push(`/musician/${link.toLowerCase()}`);
    else {
      if (menu === "Sign Out") router.push("/");
      else router.push(`/user/${link.toLowerCase()}`);
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen flex flex-col bg-neutral-black-base w-[17.222vw] px-[1.111vw] py-[1.667vw] gap-[2vw] overflow-y-auto">
      <div className="flex flex-row gap-[0.556vw] items-center">
        <div className="w-[4.167vw] aspect-[60/47] bg-black"></div>
        <div className="font-jakarta flex flex-col">
          <p className="text-[1.25vw] font-bold text-white">TuneCent</p>
          <p className="text-[0.833vw] font-regular text-white">
            Own your sound
          </p>
        </div>
      </div>

      {variant === "musician" ? (
        <div className="flex flex-col gap-[0.667vw] w-full">
          {SideBarMenuMusician.map((key) => (
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
      ) : (
        <div className="flex flex-col gap-[0.667vw] w-full">
          {SideBarMenuUser.map((key) => (
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
      )}
    </div>
  );
};

export default SideBar;
