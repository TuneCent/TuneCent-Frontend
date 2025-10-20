import ProfileRow from "@/app/components/dashboard/ProfileRow";
import TotalDana from "@/app/components/dashboard/TotalDana";
import HeroTransaction from "@/app/components/wallet/HeroTransaction";

const WalletPage = () => {
  return (
    <div className="w-[75vw] flex flex-col bg-black gap-[2.222vw]">
      <p className="text-white font-jakarta font-bold text-[1.667vw]">
        Smart Contract Audit Overview
      </p>
      <HeroTransaction />
    </div>
  );
};

export default WalletPage;
