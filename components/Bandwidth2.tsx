"use client";
import React from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const data = [
  {
    name: "May",
    absent: 40,
    present: 10,
  },
  {
    name: "June",
    absent: 30,
    present: 6,
  },
  {
    name: "July",
    absent: 20,
    present: 8,
  },
  {
    name: "Aug",
    absent: 27,
    present: 9,
  },
  {
    name: "Sept",
    absent: 27,
    present: 4,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Realtime Connections</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={800} height={300} data={data} barSize={14}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          {/* <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          /> */}
          <Bar
            dataKey="present"
            fill="#50c878"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          {/* <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
