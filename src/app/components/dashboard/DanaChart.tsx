import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const danaData = [
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

const DanaChart = () => {
  return (
    <div className="w-[35vw] aspect-[525/190]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={480} height={194} data={danaData}>
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
    </div>
  );
};

export default DanaChart;
