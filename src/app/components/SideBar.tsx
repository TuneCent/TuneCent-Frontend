"use client";

import { useState } from "react";

interface SideBarProps {
  id: number;
  menu: string;
  icon: string;
  onClick: () => void;
}

const SideBarMenu: SideBarProps[] = [
  { id: 1, menu: "Dashboard", icon: "asdks", onClick: () => {} },
  { id: 2, menu: "Music", icon: "asdks", onClick: () => {} },
  { id: 3, menu: "Portfolio", icon: "asdks", onClick: () => {} },
  { id: 4, menu: "Buat Karya", icon: "asdks", onClick: () => {} },
  { id: 5, menu: "Wallet", icon: "asdks", onClick: () => {} },
];

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard");

  return (
    <div className="flex flex-col bg-neutral-500 w-[17.222vw] pl-[1.111vw] py-[1.667vw] gap-[2vw]">
      <div className="flex flex-row gap-[0.556vw] items-center">
        <div className="w-[4.167vw] aspect-[60/47] bg-neutral-600"></div>
        <p className="text-[1.25vw] font-bold text-white">TuneCent</p>
      </div>
      <div className="flex flex-col gap-[0.667vw] w-full">
        {SideBarMenu.map((key) => (
          <button
            key={key.id}
            onClick={() => setActiveMenu(key.menu)}
            className={
              activeMenu === key.menu
                ? `cursor-pointer w-full aspect-[228/65] flex flex-row items-center px-[1vw] gap-[1.111vw] bg-neutral-400 rounded-[1.042vw]`
                : `cursor-pointer w-full aspect-[228/65] flex flex-row items-center px-[1vw] gap-[1.111vw] rounded-[1.042vw]`
            }
          >
            <div className="w-[3.125vw] aspect-[1/1] rounded-full bg-white"></div>
            <p className="text-[1.25vw] font-bold text-white">{key.menu}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
