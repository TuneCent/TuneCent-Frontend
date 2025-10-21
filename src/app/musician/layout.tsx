import React from "react";
import SideBar from "../components/SideBar";
import ProfileRow from "../components/dashboard/ProfileRow";

const MusicianLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-black w-full flex flex-row min-h-screen">
      <SideBar />
      <div className="w-[80vw] flex flex-col px-[2.222vw] py-[1.111vw] gap-[1.111vw]">
        <div className="w-full">
          <ProfileRow />
        </div>
        <div className="">{children}</div>
      </div>
    </section>
  );
};

export default MusicianLayout;
