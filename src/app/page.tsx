import Image from "next/image";
import MusicPool from "./components/dashboard/MusicPool";
import AddressCard from "./components/dashboard/AddressCard";
import HeroDashboard from "./components/dashboard/HeroDashboard";
import DashboardMusisi from "./musician/dashboard/page";
import SideBar from "./components/SideBar";
import WalletPage from "./musician/wallet/page";
import PortofolioPage from "./musician/portofolio/page";
import Navbar from "./components/Navbar";
import Hero from "./components/landingpage/Hero";
import SmartContractAudit from "./components/dashboard/SmartContractAudit";
import TotalDana from "./components/dashboard/TotalDana";

export default function Home() {
  return (
    <div className="flex flex-col gap-[3.333vw] items-center justify-center overflow-x-hidden bg-black font-sans  min-h-screen">
      <Navbar />
      <main className="flex flex-col w-[75vw] gap-[5.556vw] py-[2.222vw] row-start-2 sm:items-start">
        <Hero />
        <div className="w-full flex flex-row justify-between">
          <TotalDana />
          <div className="flex flex-col gap-[0.667vw]">
            <div className="flex flex-row justify-between items-center">
              <p className="text-[1.389vw] text-white font-bold">Transaction</p>
              <p className="text-[0.972vw] text-white-darker font-regular">
                Lihat Riwayat Payout
              </p>
            </div>
            {[1, 2, 3].map((key: number) => (
              <AddressCard key={key} />
            ))}
          </div>
        </div>
        <SmartContractAudit />
      </main>
    </div>
  );
}
