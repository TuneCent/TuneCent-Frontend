import MusicPool from "@/app/components/dashboard/MusicPool";
import TopArtist from "@/app/components/landingpage/TopArtist";
import Leaderboard from "@/app/components/music/Leaderboard";

const UserHomePage = () => {
  return (
    <section className="flex flex-col w-[75vw] gap-[2.222vw]">
      <div className="w-full bg-[#2B252D] aspect-[1080/256] flex flex-row justify-center items-center">
        <p className="text-[#201C22] font-bold font-jakarta text-[5vw]">
          MEJIKUHIBINIU
        </p>
      </div>
      <MusicPool title="Made For You" />
      <MusicPool title="Jump Back In" />
      <TopArtist />
      <div className="w-full flex flex-row gap-[1.111vw]">
        <Leaderboard category="Artist" />
        <Leaderboard category="Music" />
      </div>
    </section>
  );
};

export default UserHomePage;
