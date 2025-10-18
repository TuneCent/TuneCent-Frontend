import Image from "next/image";
import MusicPool from "./components/dashboard/MusicPool";
import AddressCard from "./components/dashboard/AddressCard";
import HeroDashboard from "./components/dashboard/HeroDashboard";
import DashboardMusisi from "./musician/dashboard/page";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-row gap-[2.778vw] bg-black font-sans  min-h-screen">
      <SideBar />
      <main className="flex flex-col gap-[32px] py-[2.222vw] row-start-2 sm:items-start">
        <DashboardMusisi />
      </main>
    </div>
  );
}
