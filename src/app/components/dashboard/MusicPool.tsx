"use client";

import { useState, useRef, useEffect } from "react";
import MusicPoolCard from "./MusicPoolCard";
import { RiArrowRightUpLine } from "@remixicon/react";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import ArtistProfileExpanded from "./ArtistProfileExpanded";

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
  musicArtist: string;
  musicUrl: string;
}

const DummyMusic: MusicProps[] = [
  {
    musicId: 1,
    musicTitle: "Mejikuhibiniu",
    musicCloseHour: 48,
    musicArtist: "Tenxi",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/mejikuhibiniu.mp3",
  },
  {
    musicId: 2,
    musicTitle: "Pikiran yang matang",
    musicCloseHour: 12,
    musicArtist: "Perunggu",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/pikiran-yang-matang.mp3",
  },
  {
    musicId: 3,
    musicTitle: "Alamak",
    musicCloseHour: 24,
    musicArtist: "Rizky Febian, Adrian Khalif",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/alamak.mp3",
  },
  {
    musicId: 4,
    musicTitle: "kids",
    musicCloseHour: 48,
    musicArtist: "Hindia",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/kids-hindia.mp3",
  },
  {
    musicId: 5,
    musicTitle: "Tabola Bale",
    musicCloseHour: 18,
    musicArtist: "Silet Open Up, Jacson Zeran, Juan Reza, Diva Aurel",
    musicOnClick: () => {},
    musicUrl: "/assets/songs/tabola-bale.mp3",
  },
];

const MusicPool = ({ title = "Top Lagu Anda" }: MusicPoolProps) => {
  const [activeSongId, setActiveSongId] = useState<number | null>(null);
  const [activeSong, setActiveSong] = useState<MusicProps | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (activeSong) {
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(activeSong.musicUrl); // tetap valid untuk file lokal
      audioRef.current = audio;

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("timeupdate", () => {
        setProgress(audio.currentTime);
      });

      audio.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
      });

      audio.play();
      setIsPlaying(true);

      return () => {
        audio.pause();
        audio.removeAttribute("src");
      };
    }
  }, [activeSong]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  // Klik dari MusicPoolCard
  const handleTogglePlay = (music: MusicProps) => {
    setActiveSongId((prev) => (prev === music.musicId ? null : music.musicId));
    if (activeSong?.musicId === music.musicId) {
      // Toggle jika sama
      togglePlayPause();
    } else {
      setActiveSong(music);
    }
  };

  // Format detik → menit:detik
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <>
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
          {DummyMusic.map((music) => (
            <div
              onClick={music.musicOnClick}
              key={music.musicId}
              className="flex flex-col gap-[1.111vw]"
            >
              <MusicPoolCard
                isPlayingSong={activeSongId === music.musicId}
                onClickPlay={() => handleTogglePlay(music)}
              />
              <div className="cursor-pointer flex flex-row justify-between text-start">
                <div className="flex flex-col gap-[0.333vw]">
                  <p className="text-white font-jakarta text-[1.111vw] font-[700]">
                    {music.musicTitle}
                  </p>
                  <p className="text-white font-jakarta text-[0.833vw] font-regular">
                    Pool tutup: {music.musicCloseHour} jam
                  </p>
                </div>
                <button
                  onClick={() => setIsProfileExpanded(true)}
                  className="cursor-pointer w-[1.667vw] aspect-[24/24] flex justify-center bg-blackrounded-[1.042vw]"
                >
                  <RiArrowRightUpLine color="white" size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tampilkan Detail Artist */}
      {isProfileExpanded && (
        <ArtistProfileExpanded
          songTitle={activeSong ? activeSong.musicTitle : ""}
          artist={activeSong ? activeSong.musicArtist : ""}
          onClose={() => setIsProfileExpanded(false)}
        />
      )}

      {/* Tampilkan bar lagu di bawah layar */}
      {activeSong && (
        <div className="fixed z-[10] bottom-0 left-0 w-full aspect-[1440/96] bg-black border-t border-neutral-700 px-[2vw] flex flex-row justify-between items-center">
          <div className="w-full flex flex-row justify-between items-center">
            <div className="w-[18.472vw] flex flex-row gap-[1.111vw] items-center">
              <div className="w-[3.75vw] aspect-[1/1] bg-neutral-black-base"></div>
              <div className="flex flex-col text-white">
                <p className="text-[1vw] font-bold">{activeSong.musicTitle}</p>
                <p className="text-[0.8vw] text-white-darker">
                  {activeSong.musicArtist}
                </p>
              </div>
            </div>
            <div className="w-[55.555vw] flex flex-col items-center gap-[0.222vw]">
              <div className="flex flex-row gap-[1.111vw] w- items-center">
                <FiSkipBack size={20} color={"#2B252D"} />
                {isPlaying ? (
                  <button onClick={togglePlayPause} className="cursor-pointer">
                    <FaPauseCircle size={36} color={"#552368"} />
                  </button>
                ) : (
                  <button onClick={togglePlayPause} className="cursor-pointer">
                    <FaPlayCircle size={36} color={"#552368"} />
                  </button>
                )}
                <FiSkipForward size={20} color={"#2B252D"} />
              </div>
              {/* Progress bar */}

              <div className="w-full flex flex-row items-center gap-[0.5vw]">
                <span className="text-white text-[0.7vw]">
                  {formatTime(progress)}
                </span>
                <div className="relative w-full h-[0.4vw] bg-neutral-700 rounded-full">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#552368] rounded-full"
                    style={{ width: `${(progress / duration) * 100}%` }}
                  ></div>
                </div>
                <span className="text-white text-[0.7vw]">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-[1vw] items-center">
              <div className="text-white text-[0.9vw] w-[6vw] aspect-square bg-black"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPool;
