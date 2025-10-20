import { RiArrowRightUpLine } from "@remixicon/react";

interface MusicPoolCardProps {
  onClick?: () => void;
}

const MusicPoolCard = ({ onClick }: MusicPoolCardProps) => {
  return (
    <div className="flex flex-col w-[12.9vw] aspect-[192/177]">
      <div className="bg-black-lighter aspect-[192/177] flex flex-row-reverse p-[0.111vw]">
        <div className="flex flex-row gap-[0.333vw] p-[0.556vw]">
          <div className="w-[1.875vw] bg-white-darker h-[1.875vw] rounded-full "></div>
          <div className="w-[1.875vw] bg-white-darker h-[1.875vw] rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPoolCard;
