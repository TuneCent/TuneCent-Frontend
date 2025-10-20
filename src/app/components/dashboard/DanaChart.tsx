"use client";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

interface ChartProps {
  variant?: "dana" | "studio" | "portofolio";
}
interface GrafikProps {
  month: string;
  value: number;
}

const grafikData: GrafikProps[] = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 280 },
  { month: "Mar", value: 120 },
  { month: "Apr", value: 300 },
  { month: "May", value: 700 },
  { month: "Jun", value: 300 },
  { month: "Jul", value: 290 },
  { month: "Aug", value: 100 },
  { month: "Sep", value: 20 },
  { month: "Oct", value: 1200 },
  { month: "Nov", value: 900 },
  { month: "Dec", value: 400 },
];

const DanaChart = ({ variant = "dana" }: ChartProps) => {
  return (
    <div
      className={`w-[40vw] aspect-[525/190] ${
        variant !== "dana" ? "relative" : ""
      }`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={480} height={194} data={grafikData}>
          <CartesianGrid stroke="#ccc" opacity={"0.2"} horizontal={false} />
          <Line
            type={"monotone"}
            stroke={"#552368"}
            strokeWidth={3}
            dataKey={"value"}
            dot={false}
          />
          <XAxis dataKey={"month"} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      {variant !== "dana" ? (
        <div className="absolute bottom-[3.333vw] right-[2.222vw] flex flex-col gap-[0.556vw] w-[12.972vw] aspect-[186/156] bg-neutral-black-base p-[1.111vw]">
          <p className="font-jakarta text-white font-regular text-[0.972vw]">
            Royalty Pulse
          </p>
          <div className="flex flex-row gap-[0.333vw] items-end">
            <h4 className="font-bold font-jakarta text-[1.667vw] text-white">
              +520%
            </h4>
            <p className="font-jakarta text-[1vw] text-white">Spotify</p>
          </div>
          <div className="flex flex-row gap-[0.333vw] items-end">
            <h4 className="font-bold font-jakarta text-[1.667vw] text-white">
              +520%
            </h4>
            <p className="font-jakarta text-[1vw] text-white">TIktok</p>
          </div>
          <div className="flex flex-row gap-[0.333vw] items-end">
            <h4 className="font-bold font-jakarta text-[1.333vw] text-white">
              ~18,500
            </h4>
            <p className="font-jakarta text-[0.889vw] text-white">avrg views</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DanaChart;
