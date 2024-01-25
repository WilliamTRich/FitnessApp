import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "1/25/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1/26/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1/27/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1/28/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1/29/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1/30/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "1/31/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2/1/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2/2/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2/3/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2/4/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "2/5/24",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

function CalorieChart() {
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CalorieChart;
