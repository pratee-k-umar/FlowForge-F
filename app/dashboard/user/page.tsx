import AttendanceChart from "@/components/AttendanceChart";
import Bandwidth2 from "@/components/Bandwidth2";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
// import Announcements from "@/components/Announcements";
import React from "react";

const UserPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Databases" />
          <UserCard type="Storage" />
          <UserCard type="Authentication" />
          <UserCard type="Functions" />
        </div>
        {/* middle  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full h-[500px]">
            <FinanceChart />
          </div>
        </div>
        {/* bottom  */}
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <AttendanceChart />
        <Bandwidth2 />
      </div>
    </div>
  );
};

export default UserPage;
