"use client";

interface LeaderboardArrayProps {
  rank: number;
  artist: string;
  score: string;
  isYourProfile?: boolean;
  isTopProfile?: boolean;
}

const LeaderboardMusisiArray: LeaderboardArrayProps[] = [
  {
    rank: 49,
    artist: "Juicy Luicy",
    score: "9.812",
    isYourProfile: false,
  },
  {
    rank: 50,
    artist: "Tenxi",
    score: "9.700",
    isYourProfile: true,
  },
  {
    rank: 51,
    artist: "Hindia",
    score: "9.650",
    isYourProfile: false,
  },
  {
    rank: 52,
    artist: "Rizky Febian",
    score: "9.600",
    isYourProfile: false,
  },
];

const LeaderboardArtistArray: LeaderboardArrayProps[] = [
  {
    rank: 1,
    artist: "NIKI",
    score: "9.812",
    isTopProfile: true,
  },
  {
    rank: 2,
    artist: "Tenxi",
    score: "9.700",
    isTopProfile: false,
  },
  {
    rank: 3,
    artist: "Hindia",
    score: "9.650",
    isTopProfile: false,
  },
  {
    rank: 4,
    artist: "Rizky Febian",
    score: "9.600",
    isTopProfile: false,
  },
];

const LeaderboardMusicArray: LeaderboardArrayProps[] = [
  {
    rank: 1,
    artist: "Mejikuhibiniu",
    score: "9.812",
    isTopProfile: true,
  },
  {
    rank: 2,
    artist: "Rasakan Nikmatnya Hidup",
    score: "9.700",
    isTopProfile: false,
  },
  {
    rank: 3,
    artist: "Pikiran Yang Matang",
    score: "9.650",
    isTopProfile: false,
  },
  {
    rank: 4,
    artist: "Kau Pemeran Utama di Sebuah Opera",
    score: "9.600",
    isTopProfile: false,
  },
];

interface LeaderboardProps {
  category?: "Artist" | "Music" | "Musician";
}

const Leaderboard = ({ category = "Artist" }: LeaderboardProps) => {
  return (
    <div className="flex flex-col w-[36.667vw] aspect-[528/268] bg-neutral-black-dark p-[1.111vw] rounded-[0.486vw] gap-[0.556vw]">
      <div className="w-full flex flex-row items-center justify-between pb-[0.667vw] border-b-[0.069vw] border-[#201C22]">
        <p className="text-white text-[1.389vw] font-jakarta font-bold">
          Leaderboard - Top {category}
        </p>
        <button
          onClick={() => {}}
          className="cursor-pointer text-[0.972vw] text-white-darker font-regular font-jakarta"
        >
          Show All
        </button>
      </div>
      {category === "Musician" ? (
        <div className="flex flex-col w-full aspect-[481/180] p-[0.333vw] gap-[0.333vw]">
          {LeaderboardMusisiArray.map((leaderboardKey) => (
            <div
              key={leaderboardKey.rank}
              className="w-full flex flex-row justify-between p-[0.222vw]"
            >
              {leaderboardKey.isYourProfile ? (
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                    <p className="text-[1.667vw] font-bold">
                      {leaderboardKey.rank}
                    </p>
                    <div className="flex flex-col gap-[0.111vw]">
                      <p className="text-[1.389vw] font-bold">
                        {leaderboardKey.artist}
                      </p>
                      <p className="text-[0.833vw]">
                        score: {leaderboardKey.score}
                      </p>
                    </div>
                  </div>
                  <div className="w-[3.889vw] aspect-[56/24] bg-linear-to-r from-[#8B609B] to-[#302135] flex justify-center items-center rounded-[0.347vw] p-[0.333vw]">
                    <p className="text-white font-jakarta text-[0.833vw] text-center">
                      You
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                  <p className="text-[0.833vw]">{leaderboardKey.rank}</p>
                  <div className="flex flex-col gap-[0.111vw]">
                    <p className="text-[0.972vw]">{leaderboardKey.artist}</p>
                    <p className="text-[0.833vw]">
                      score: {leaderboardKey.score}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : category === "Artist" ? (
        <div className="flex flex-col w-full aspect-[481/180] p-[0.333vw] gap-[0.333vw]">
          {LeaderboardArtistArray.map((leaderboardKey) => (
            <div
              key={leaderboardKey.rank}
              className="w-full flex flex-row justify-between p-[0.222vw]"
            >
              {leaderboardKey.isTopProfile ? (
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                    <p className="text-[1.667vw] font-bold">
                      {leaderboardKey.rank}
                    </p>
                    <div className="flex flex-col gap-[0.111vw]">
                      <p className="text-[1.389vw] font-bold">
                        {leaderboardKey.artist}
                      </p>
                      <p className="text-[0.833vw]">
                        score: {leaderboardKey.score}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                  <p className="text-[0.833vw]">{leaderboardKey.rank}</p>
                  <div className="flex flex-col gap-[0.111vw]">
                    <p className="text-[0.972vw]">{leaderboardKey.artist}</p>
                    <p className="text-[0.833vw]">
                      score: {leaderboardKey.score}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col w-full aspect-[481/180] p-[0.333vw] gap-[0.333vw]">
          {LeaderboardMusicArray.map((leaderboardKey) => (
            <div
              key={leaderboardKey.rank}
              className="w-full flex flex-row justify-between p-[0.222vw]"
            >
              {leaderboardKey.isTopProfile ? (
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                    <p className="text-[1.667vw] font-bold">
                      {leaderboardKey.rank}
                    </p>
                    <div className="flex flex-col gap-[0.111vw]">
                      <p className="text-[1.389vw] font-bold">
                        {leaderboardKey.artist}
                      </p>
                      <p className="text-[0.833vw]">
                        score: {leaderboardKey.score}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row items-center gap-[0.667vw] font-jakarta text-neutral-white-base">
                  <p className="text-[0.833vw]">{leaderboardKey.rank}</p>
                  <div className="flex flex-col gap-[0.111vw]">
                    <p className="text-[0.972vw]">{leaderboardKey.artist}</p>
                    <p className="text-[0.833vw]">
                      score: {leaderboardKey.score}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
