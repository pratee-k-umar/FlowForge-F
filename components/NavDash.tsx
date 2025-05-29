import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex item-center justify-between p-4">
      {/* search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="logo" width={14} height={12} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* other units */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={10} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={10} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-green-600 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Prateek Kumar</span>
          <span className="text-[10px] text-gray-500 text-right">Profile</span>
        </div>
        <div>
          <Image
            src="/menu.svg"
            alt=""
            width={20}
            height={20}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
