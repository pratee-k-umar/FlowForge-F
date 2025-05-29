"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic login check
    if (formData.email === "admin@gmail.com" && formData.password === "1234") {
      router.push("http://localhost:3000/projected");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl flex overflow-hidden">
        {/* Left form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <div className="max-w-md w-full">
            <h2 className="text-xl text-gray-500">Start your journey</h2>
            <h1 className="text-3xl font-bold mb-8">Log In</h1>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  E-mail
                </label>
                <div className="flex items-center border rounded-md mt-1 px-3 py-2">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="w-full focus:outline-none"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <div className="flex items-center border rounded-md mt-1 px-3 py-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full focus:outline-none"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400" />
                    ) : (
                      <FaEye className="text-gray-400" />
                    )}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-green-900 text-white font-semibold py-2 rounded-md hover:bg-green-800 transition"
              >
                Get Started
              </button>

              {/* Social login */}
              <div className="flex items-center gap-2 justify-center mt-4">
                <div className="border rounded-full p-2 cursor-pointer">
                  <FaFacebookF />
                </div>
                <div className="border rounded-full p-2 cursor-pointer">
                  <FaGoogle />
                </div>
                <div className="border rounded-full p-2 cursor-pointer">
                  <FaApple />
                </div>
              </div>

              <p className="text-sm text-center mt-4">
                Don't have an account?{" "}
                <span className="text-green-900 hover:text-green-800 font-medium cursor-pointer">
                  Contact Admin
                </span>
              </p>
            </form>
          </div>
        </div>

        {/* Right background image */}
        <div
          className="hidden md:block md:w-1/2"
          style={{
            backgroundImage: `url("/img01.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
