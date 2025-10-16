import MusicPoolCard from "./MusicPoolCard";

interface MusicPoolProps {
  title?: string;
  onClickLanjut?: () => void;
}

const MusicPool = ({
  title = "Daftar Trending Pool Musics",
}: MusicPoolProps) => {
  return (
    <div className="flex flex-col w-[75vw] gap-[1.111vw]">
      <p className="text-[1.667vw] text-white font-bold">{title}</p>
      <div className="w-full flex flex-row justify-center rounded-[1.042vw] bg-neutral-400 text-white">
        <div className="w-full rounded-[1.042vw] flex justify-center text-center bg-neutral-700 p-[0.556vw]">
          <p className="font-inter font-bold">TRENDING</p>
        </div>
        <div className="w-full rounded-[1.042vw] flex justify-center text-center p-[0.556vw]">
          <p className="font-inter font-bold">VERIFIED</p>
        </div>
      </div>
      <div className="flex flex-row gap-[2.667vw]">
        {[1, 2, 3].map((key: number) => (
          <MusicPoolCard key={key} />
        ))}
      </div>
    </div>
  );
};

export default MusicPool;
