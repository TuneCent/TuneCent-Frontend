import AddressCard from "./AddressCard";
import TotalDana from "./TotalDana";

const HeroDashboard = () => {
  return (
    <div className="flex flex-col gap-[1.111vw]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[2.222vw] font-bold text-white">Hi Bryan!</p>
          <p className="text-[1.389vw] text-white">
            Look at your update and progress portfolio
          </p>
        </div>
        <div className="flex flex-row gap-[1.111vw]">
          <button className=""></button>
          <button className=""></button>
        </div>
      </div>
      <TotalDana />
      <div className="flex flex-row gap-[2.667vw]">
        {[1, 2, 3].map((key: number) => (
          <AddressCard key={key} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default HeroDashboard;
