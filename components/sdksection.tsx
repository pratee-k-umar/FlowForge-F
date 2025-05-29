import React from "react";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaVuejs,
  FaAngular,
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiSvelte,
  SiRuby,
  SiDart,
  SiJavascript,
} from "react-icons/si";

const sdkIcons = [
  { icon: <SiFlutter size={24} />, label: "Flutter" },
  { icon: <SiNextdotjs size={24} />, label: "Next.js" },
  { icon: <FaReact size={24} />, label: "React" },
  { icon: <SiSvelte size={24} />, label: "Svelte" },
  { icon: <FaVuejs size={24} />, label: "Vue" },
  { icon: <FaAngular size={24} />, label: "Angular" },
  { icon: <FaJava size={24} />, label: "Java" },
  { icon: <FaApple size={24} />, label: "iOS" },
  { icon: <FaAndroid size={24} />, label: "Android" },
  { icon: <FaNodeJs size={24} />, label: "Node.js" },
  { icon: <SiRuby size={24} />, label: "Ruby" },
  { icon: <SiDart size={24} />, label: "Dart" },
  { icon: <FaPython size={24} />, label: "Python" },
  { icon: <SiJavascript size={24} />, label: "JavaScript" },
  { icon: <FaVuejs size={24} />, label: "Vue" },
  { icon: <FaReact size={24} />, label: "React" },
];

export default function SdkSection() {
  return (
    <section className="bg-green-50 text-green-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-green-700 text-white px-3 py-1 rounded-md w-fit mb-4 text-sm font-semibold">
            SDKS_
          </div>
          <h2 className="text-5xl font-bold mb-6">Code the way you want</h2>
          <p className="text-lg text-green-800 mb-6">
            We support many SDKs making Appwrite flexible to your needs and
            ensuring you can code with the language you want at any time.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {sdkIcons.slice(0, 10).map((sdk, idx) => (
              <div
                key={idx}
                className="bg-green-200 text-green-900 rounded-md p-3 flex items-center justify-center hover:bg-green-400 transition"
              >
                {sdk.icon}
              </div>
            ))}
          </div>
          <button className="bg-green-700 hover:bg-green-600 transition text-white px-4 py-2 rounded-md border border-green-900">
            Explore all SDKs
          </button>
        </div>

        <div className="relative w-full h-[400px] flex items-center justify-center">
          <div className="absolute w-40 h-40 bg-gradient-to-r from-green-600 to-green-400 rounded-full animate-pulse flex items-center justify-center">
            {/* <SiFlutter size={40} className="text-white" /> */}
          </div>
          <div className="absolute w-full h-full">
            <div className="w-full h-full relative">
              {sdkIcons.slice(10).map((sdk, idx) => {
                const angle = (360 / sdkIcons.slice(10).length) * idx;
                const radius = 150;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);
                return (
                  <div
                    key={idx}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px - 20px)`,
                      top: `calc(50% + ${y}px - 20px)`,
                    }}
                  >
                    <div className="w-10 h-10 bg-green-200 text-green-900 rounded-full flex items-center justify-center hover:bg-green-400 transition">
                      {sdk.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
