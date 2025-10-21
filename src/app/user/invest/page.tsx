import YourPath from "@/app/components/music/YourPath";
import InvestCard from "@/app/components/user/InvestCard";

const InvestPage = () => {
  return (
    <section className="w-[75vw] flex flex-col bg-black gap-[1.667vw]">
      <div className="w-full flex flex-row justify-between">
        <p className="font-jakarta font-bold text-white text-[1.667vw]">
          Always Support Your Artist
        </p>
      </div>
      <YourPath />
      <div className="flex flex-col w-full p-[1.111vw] gap-[0.667vw]">
        <p className="font-jakarta font-bold text-white text-[1.389vw]">
          Special Offer for you
        </p>
        {[1, 2, 3, 4].map((key: number) => (
          <InvestCard key={key} />
        ))}
        <div className="flex flex-row justify-between"></div>
      </div>
    </section>
  );
};

export default InvestPage;
