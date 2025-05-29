"use client";

import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import React from "react";

const tabs = ["Projects", "Domains", "Members", "Usage", "Billing", "Settings"];

const ProjectsPage: React.FC = () => {
  const router = useRouter();

  const handleCreateProject = () => {
    router.push("/dashboard/user");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 pb-10">
      {/* Navbar */}
      <div className="flex justify-between items-center py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-gray-600">
          <button
            onClick={() => router.push("/")}
            className="text-green-600 font-bold text-lg hover:text-green-700"
          >
            FlowForge
          </button>
          <span className="text-sm">/</span>
          <span className="text-gray-800 font-semibold">Personal projects</span>
          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
            Free
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-sm text-gray-500 hover:text-green-700">
            Upgrade
          </button>
          <button className="text-sm text-gray-500 hover:text-green-700">
            Feedback
          </button>
          <button className="text-sm text-gray-500 hover:text-green-700">
            Support
          </button>
          <div className="w-8 h-8 rounded-full bg-green-500 text-center text-sm font-bold text-white flex items-center justify-center">
            I
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-3xl font-bold">Personal projects</h1>
        <button className="bg-green-100 text-green-800 px-3 py-1 rounded border border-green-300 hover:bg-green-200">
          + Invite
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1.5 text-sm rounded-md ${
              tab === "Projects"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Title & Button */}
      <div className="flex justify-between items-center mt-10 mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <button
          onClick={handleCreateProject}
          className="bg-green-600 text-white px-4 py-2 text-sm font-medium rounded hover:bg-green-500"
        >
          + Create project
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500 mb-1">No apps</p>
            <h3 className="text-lg font-semibold text-gray-800">
              FlowForge Project {i + 1}
            </h3>
            <p className="text-sm text-right text-gray-400 mt-8">Backend</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
