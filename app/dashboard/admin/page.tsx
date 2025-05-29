"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  UserGroupIcon,
  PuzzlePieceIcon,
  CubeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline"; // You can install @heroicons/react if not yet installed
import { Puzzle } from "lucide-react";

const data = [
  { name: "Total Users", value: 2 },
  { name: "Total SDKs integrated", value: 1 },
  { name: "Database Connected", value: 1 },
  { name: "Functionalities implemented", value: 1 },
];

const stats = [
  {
    label: "Total Users",
    value: 2,
    icon: UserGroupIcon,
    color: "text-blue-500",
  },
  {
    label: "Profiles Registered",
    value: 1,
    icon: CubeIcon,
    color: "text-green-500",
  },
  {
    label: "SDKs Integrated",
    value: 1,
    icon: PuzzlePieceIcon,
    color: "text-purple-500",
  },
  {
    label: "Database Connected",
    value: 1,
    icon: Puzzle,
    color: "text-yellow-500",
  },
  {
    label: "Functions Implemented",
    value: 1,
    icon: Cog6ToothIcon,
    color: "text-red-500",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 tracking-tight">
        Admin Dashboard
      </h2>

      {/* Stats summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full mb-12">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-lg shadow-md p-5 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`p-3 bg-gray-100 rounded-full ${color}`}>
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{label}</p>
              <p className="text-2xl font-semibold text-gray-900">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Stats details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Detailed statistics card */}
        <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Detailed Statistics
          </h3>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Total Users: <strong className="text-green-600">2</strong>
            </p>
            <p>
              Total Profiles Registered:{" "}
              <strong className="text-green-600">1</strong>
            </p>
            <p>
              Total SDKs Integrated:{" "}
              <strong className="text-green-600">1</strong>
            </p>
            <p>
              Database Connected: <strong className="text-green-600">1</strong>
            </p>
            <p>
              Functionalities Implemented:{" "}
              <strong className="text-green-600">1</strong>
            </p>
          </div>
        </div>

        {/* Chart container */}
        <div className="bg-white p-6 rounded-lg shadow-lg h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a6fbb2" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#a6fbb3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                interval={0}
                angle={-30}
                textAnchor="end"
                height={60}
              />
              <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  borderRadius: 8,
                  border: "none",
                }}
                itemStyle={{ color: "#3b7", fontWeight: "bold" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b8"
                fillOpacity={1}
                fill="url(#colorValue)"
                activeDot={{ r: 7 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm select-none">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
