interface QuickStatsCardProps {
  category: string;
  categoryCount: number;
}

const QuickStatsCardArray: QuickStatsCardProps[] = [
  {
    category: "Active Pools",
    categoryCount: 3,
  },
  {
    category: "Kontributor",
    categoryCount: 224,
  },
  {
    category: "Avg Viral Score",
    categoryCount: 17733,
  },
  {
    category: "Avg Funded",
    categoryCount: 72,
  },
];

const QuickStats = () => {
  return (
    <div className="flex flex-col w-[30vw] aspect-[426/280] bg-neutral-black-base gap-[1.111vw] p-[1.111vw] justify-center">
      <div className="flex flex-row w-full justify-between">
        <p className="font-bold text-[1.389vw] text-white font-jakarta">
          Quick Stats
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-full aspect-[378/178] gap-[0.333vw]">
        {QuickStatsCardArray.map((dataKey) => (
          <div key={dataKey.category}>
            <div className="flex flex-col justify-center items-center bg-black w-[12.778vw] aspect-[184/81] rounded-[0.694vw] gap-[0.222vw]">
              <p className="text-white font-inter text-[0.833vw">
                {dataKey.category}
              </p>
              <p className="text-white font-inter font-bold text-[1.667vw">
                {dataKey.categoryCount}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default QuickStats;
