import React from "react";

export default function AuthDashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="">
        <h2 className="text-2xl font-bold m-4">Databases</h2>
      </div>
      <nav className="flex space-x-4 px-6 py-4 border-b border-gray-200 bg-green-100">
        <button className="text-green-900 font-semibold">Databases</button>
        <button className="text-green-900 hover:text-green-600">Usage</button>
      </nav>

      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by name, email, phone, or ID"
            className="w-full md:max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium">
            + Create database
          </button>
        </div>

        <div className="border border-dashed border-gray-300 p-8 rounded text-center">
          <h2 className="text-xl font-semibold mb-2">
            Create your first database
          </h2>
          <p className="mb-4 text-gray-600">
            Need a hand? Learn more in our documentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-50">
              Documentation
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Create database
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
