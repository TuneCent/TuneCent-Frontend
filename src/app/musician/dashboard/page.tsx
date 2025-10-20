import HeroDashboard from "@/app/components/dashboard/HeroDashboard";
import MusicPool from "@/app/components/dashboard/MusicPool";
import SmartContractAudit from "@/app/components/dashboard/SmartContractAudit";

export default function DashboardMusisi() {
  return (
    <section className="flex flex-col w-[75vw] gap-[2.222vw]">
      <HeroDashboard />

      <MusicPool />

      <MusicPool title="Pool yang didanai" />
      <SmartContractAudit isLanding={false} />
    </section>
  );
}
