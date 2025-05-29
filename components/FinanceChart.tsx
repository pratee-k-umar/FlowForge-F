"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    expense: 1000,
    income: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    expense: 3000,
    income: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    expense: 2000,
    income: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    expense: 2780,
    income: 3908,
    amt: 2000,
  },
  {
    name: "Jun",
    expense: 1890,
    income: 4800,
    amt: 2181,
  },
  {
    name: "Jul",
    expense: 2390,
    income: 3800,
    amt: 2500,
  },
  {
    name: "Aug",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Sept",
    expense: 3491,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    expense: 3492,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    expense: 3494,
    income: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    expense: 3490,
    income: 4300,
    amt: 2100,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Requests</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          {/* <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          /> */}
          {/* <Line
            type="monotone"
            dataKey="income"
            stroke="#fae27c"
            strokeWidth={5}
          /> */}
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#50c878"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
