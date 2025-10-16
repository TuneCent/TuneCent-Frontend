import Image from "next/image";
import MusicPool from "./components/dashboard/MusicPool";
import AddressCard from "./components/dashboard/AddressCard";
import HeroDashboard from "./components/dashboard/HeroDashboard";
import DashboardMusisi from "./musician/dashboard/page";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-row gap-[2.778vw] bg-neutral-600 font-sans  min-h-screen">
      <SideBar />

      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <DashboardMusisi />
      </main>
    </div>
  );
}
