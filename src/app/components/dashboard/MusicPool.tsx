"use client";

import MusicPoolCard from "./MusicPoolCard";
import { RiArrowRightUpLine } from "@remixicon/react";
interface MusicPoolProps {
  title?: string;
  onClickLanjut?: () => void;
}

interface MusicProps {
  musicId: number;
  musicTitle: string;
  musicCloseHour: number;
  musicOnClick: () => void;
  musicIcon?: string;
}

const DummyMusic: MusicProps[] = [
  {
    musicId: 1,
    musicTitle: "Mejikuhibiniu",
    musicCloseHour: 48,
    musicOnClick: () => {},
  },
  {
    musicId: 2,
    musicTitle: "Pikiran yang matang",
    musicCloseHour: 12,
    musicOnClick: () => {},
  },
  {
    musicId: 3,
    musicTitle: "Alamak",
    musicCloseHour: 24,
    musicOnClick: () => {},
  },
  {
    musicId: 4,
    musicTitle: "kids",
    musicCloseHour: 48,
    musicOnClick: () => {},
  },
  {
    musicId: 5,
    musicTitle: "Filosofi Teras",
    musicCloseHour: 18,
    musicOnClick: () => {},
  },
];

const MusicPool = ({ title = "Top Lagu Anda" }: MusicPoolProps) => {
  return (
    <section className="flex flex-col w-[75vw] gap-[1.111vw]">
      <div className="flex flex-row justify-between items-end">
        <p className="text-[1.667vw] text-white font-bold">{title}</p>
        <button
          onClick={() => {}}
          className="cursor-pointer text-white-darker text-[0.833vw] font-jakarta"
        >
          Show all
        </button>
      </div>
      <div className="w-full flex flex-row justify-center rounded-[1.042vw] bg-neutral-400 text-white"></div>
      <div className="flex flex-row gap-[2.667vw]">
        {DummyMusic.map((key) => (
          <div key={key.musicId} className="flex flex-col gap-[1.111vw]">
            <MusicPoolCard />
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-[0.333vw]">
                <p className="text-white font-jakarta text-[1.111vw] font-[700]">
                  {key.musicTitle}
                </p>
                <p className="text-white font-jakarta text-[0.833vw] font-regular">
                  Pool tutup: {key.musicCloseHour} jam
                </p>
              </div>
              <button
                onClick={key.musicOnClick}
                className="cursor-pointer w-[1.667vw] aspect-[24/24] flex justify-center bg-blackrounded-[1.042vw]"
              >
                <RiArrowRightUpLine color="white" size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicPool;
