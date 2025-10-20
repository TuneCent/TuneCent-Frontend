import React from "react";
import SideBar from "../components/SideBar";

const MusicianLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-black w-full flex flex-row min-h-screen">
      <SideBar />
      <div className="w-[80vw] flex flex-col p-[2.222vw]">{children}</div>
    </section>
  );
};

export default MusicianLayout;
