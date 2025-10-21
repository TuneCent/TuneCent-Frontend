import { RiArrowRightUpLine } from "@remixicon/react";
import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";

interface MusicPoolCardProps {
  onClickPlay?: () => void;
  isPlayingSong?: boolean;
  playable?: boolean;
}

const MusicPoolCard = ({
  onClickPlay,
  isPlayingSong = false,
  playable = true,
}: MusicPoolCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const hoveringAndPlay = (hovering: boolean, playing: boolean) => {
    if (!playing) setIsHovered(false);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => hoveringAndPlay(isHovered, isPlayingSong)}
        className={`relative flex flex-col w-[12.9vw] aspect-[192/177] `}
      >
        {playable && isHovered && (
          <button
            onClick={onClickPlay}
            className="cursor-pointer absolute right-[1.111vw] bottom-[1.111vw]"
          >
            {isPlayingSong ? (
              <FaPauseCircle size={40} color={"#552368"} />
            ) : (
              <FaCirclePlay size={40} color={"#552368"} />
            )}
          </button>
        )}
        <div className="bg-black-lighter aspect-[192/177] flex flex-row-reverse p-[0.111vw]">
          <div className="flex flex-row gap-[0.333vw] p-[0.556vw]">
            <div className="w-[1.875vw] bg-white-darker h-[1.875vw] rounded-full "></div>
            <div className="w-[1.875vw] bg-white-darker h-[1.875vw] rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPoolCard;
