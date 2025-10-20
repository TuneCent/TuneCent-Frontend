import MusicValue from "./MusicValue";
import QuickStats from "./QuickStats";

const ResonansiTerkini = () => {
  return (
    <div className="flex flex-col w-full p-[1.111vw] gap-[0.667vw]">
      <p className="font-jakarta text-white text-[1.389vw] font-bold">
        Resonansi Terkini - Viral Performance Showcase
      </p>
      <div className="flex flex-row justify-between">
        <MusicValue />
        <QuickStats />
      </div>
    </div>
  );
};

export default ResonansiTerkini;
