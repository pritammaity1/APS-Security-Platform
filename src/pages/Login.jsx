import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE */}
      <div
        className="hidden lg:flex flex-1 relative text-white p-16
        bg-gradient-to-br from-[#0B1220] via-[#0F172A] to-[#1E293B]"
      >
        {/* App Name */}
        <div className="absolute top-8 left-12 flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          <span className="font-semibold text-lg">aps</span>
        </div>

        <div className="max-w-xl mt-20">
          <h1 className="text-4xl font-bold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-cyan-400">hours</span> not weeks.
          </h1>

          {/* Feature List */}
          <ul className="mt-8 space-y-4 text-gray-300 text-sm">
            <li>
              ✓ Effortlessly spider and map targets to uncover hidden flaws
            </li>
            <li>✓ Deliver high-quality, validated findings in hours</li>
            <li>✓ Generate enterprise-grade security reports automatically</li>
          </ul>

          <div className="mt-12 text-sm text-gray-400">
            ⭐ Rated 4.5/5 (100k+ reviews)
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Log in
          </h2>
          <p className="text-center text-sm text-gray-500 mt-1">
            Don't have an account?{" "}
            <span className="text-cyan-600 font-medium cursor-pointer hover:underline">
              Sign up
            </span>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address*"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password*"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <span className="text-xs text-cyan-600 font-medium cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition"
            >
              Log in
            </button>
          </form>

          {/* Social Buttons */}
          <div className="mt-6 flex justify-between gap-3">
            <button className="flex-1 flex items-center justify-center py-2 rounded-full bg-black text-white">
              <FaApple size={18} />
            </button>

            <button className="flex-1 flex items-center justify-center py-2 rounded-full bg-gray-100 border">
              <FcGoogle size={18} />
            </button>

            <button className="flex-1 flex items-center justify-center py-2 rounded-full bg-blue-600 text-white">
              <FaMeta size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
