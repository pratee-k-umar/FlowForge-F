"use client";
import React, { useState } from "react";

export default function AuthDashboard() {
  const [selectedDB, setSelectedDB] = useState("MongoDB");
  const [schemaInputs, setSchemaInputs] = useState([{ name: "", type: "" }]);
  const [submittedSchema, setSubmittedSchema] = useState<any>(null);

  const handleAddField = () => {
    setSchemaInputs([...schemaInputs, { name: "", type: "" }]);
  };

  const handleChangeField = (index: number, field: string, value: string) => {
    const newInputs = [...schemaInputs];
    // newInputs[index][field] = value;
    setSchemaInputs(newInputs);
  };

  const handleSchemaSubmit = () => {
    setSubmittedSchema(schemaInputs);
  };

  const redirectTo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div>
        <h2 className="text-2xl font-bold m-4">Databases</h2>
      </div>

      <nav className="flex space-x-4 px-6 py-4 border-b border-gray-200 bg-green-100">
        <button className="text-green-900 font-semibold">Databases</button>
        <button className="text-green-900 hover:text-green-600">Usage</button>
      </nav>

      <div className="p-6">
        {/* Search & Create */}
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

        {/* Create First DB */}
        {/* <div className="border border-dashed border-gray-300 p-8 rounded text-center mb-10">
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
        </div> */}

        {/* Database Providers */}

        {/* Schema Designer */}
        <div className="space-y-8 bg-gray-50 border-gray-400 rounded-lg p-6">
          {/* Database Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-lg">
              Choose your database
            </label>
            <select
              value={selectedDB}
              onChange={(e) => setSelectedDB(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="MongoDB">MongoDB</option>
              <option value="MySQL">MySQL</option>
              <option value="PostgreSQL">PostgreSQL</option>
            </select>
          </div>

          {/* Schema Designer */}
          <div className="border border-gray-200 p-6 rounded-lg bg-white shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Design your schema
            </h3>

            {schemaInputs.map((field, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 mb-3">
                <input
                  type="text"
                  placeholder="Field name"
                  value={field.name}
                  onChange={(e) =>
                    handleChangeField(index, "name", e.target.value)
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Field type"
                  value={field.type}
                  onChange={(e) =>
                    handleChangeField(index, "type", e.target.value)
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}

            <button
              onClick={handleAddField}
              className="text-green-600 font-medium hover:underline"
            >
              + Add parameter
            </button>

            <div className="mt-4">
              <button
                onClick={handleSchemaSubmit}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-lg shadow"
              >
                Submit Schema
              </button>
            </div>
          </div>

          {/* Schema Output */}
          {submittedSchema && (
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Schema Preview:
              </h4>

              {selectedDB === "MongoDB" ? (
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto whitespace-pre-wrap shadow-inner border border-gray-300">
                  {JSON.stringify(
                    Object.fromEntries(
                      submittedSchema.map((field: any) => [
                        field.name,
                        field.type,
                      ])
                    ),
                    null,
                    2
                  )}
                </pre>
              ) : (
                <div className="overflow-auto border rounded-lg shadow">
                  <table className="w-full text-sm border-collapse">
                    <thead className="bg-green-100 text-gray-800">
                      <tr>
                        <th className="border px-4 py-2 text-left">
                          Field Name
                        </th>
                        <th className="border px-4 py-2 text-left">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submittedSchema.map((field: any, idx: number) => (
                        <tr key={idx} className="even:bg-gray-50">
                          <td className="border px-4 py-2">{field.name}</td>
                          <td className="border px-4 py-2">{field.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 border border-gray-200 rounded-lg p-6 bg-gray-50 mb-10">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Or register with a provider
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                redirectTo("https://www.mongodb.com/cloud/atlas/register")
              }
              className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              MongoDB Atlas
            </button>
            <button
              onClick={() => redirectTo("https://neon.com/")}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
            >
              Neon (PostgreSQL)
            </button>
            <button
              onClick={() => redirectTo("https://planetscale.com/")}
              className="border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-50 transition"
            >
              PlanetScale (MySQL)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
