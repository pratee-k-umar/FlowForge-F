"use client";

import { useState, useRef } from "react";
import {
  ChartNoAxesCombined,
  ChevronsLeftRightEllipsis,
  Database,
  KeyRound,
  Parentheses,
  ShieldEllipsis,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowFeatures(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowFeatures(false);
    }, 300);
  };

  const features = [
    {
      id: 1,
      title: "Analytics",
      description:
        "Gain insights into your project's performace and API usage effortlessly.",
      icon: <ChartNoAxesCombined className="w-8 h-8 text-white" />,
      url: "/features/auth",
    },
    {
      id: 2,
      title: "Auth",
      description: "Secure user access with JWT and role-based permissions",
      icon: <KeyRound className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Database",
      description: "Data backups ensures data integrity and availability.",
      icon: <Database className="w-8 h-8 text-white" />,
    },
    {
      id: 4,
      title: "Functions",
      description: "Define and deploy logic with dynamic APIs",
      icon: <Parentheses className="w-8 h-8 text-white" />,
    },
    {
      id: 5,
      title: "Realtime",
      description: "Enable live updates and collabration features.",
      icon: <ChevronsLeftRightEllipsis className="w-8 h-8 text-white" />,
    },
    {
      id: 6,
      title: "Testing",
      description: "Track API performance and catch issues early.",
      icon: <ShieldEllipsis className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-bold text-white cursor-pointer">
                FlowForge
              </h1>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center font-medium">
                Feature
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    showFeatures ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {showFeatures && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 mt-5 w-screen max-w-6xl">
                  <div className="bg-black backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-8">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="group p-6 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0">
                              {feature.icon}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-3 group-hover:text-blue-100 transition-colors duration-300">
                                {feature.title}
                              </h3>
                              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Pricing
            </Link> */}
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
