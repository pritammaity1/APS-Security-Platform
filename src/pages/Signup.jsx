import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";

    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Minimum 8 characters required";
    }

    if (!form.agree) newErrors.agree = "You must accept Terms & Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", form);
    }
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
            Sign up
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* First Name */}
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={form.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={form.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>

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
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (8+ characters)*"
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
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Checkbox */}
            <div>
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1"
                />
                <p>
                  I agree to Aps’s{" "}
                  <span className="text-cyan-600 font-medium">
                    Terms & Conditions
                  </span>{" "}
                  and acknowledge the{" "}
                  <span className="text-cyan-600 font-medium">
                    Privacy Policy
                  </span>
                </p>
              </div>
              {errors.agree && (
                <p className="text-red-500 text-xs mt-1">{errors.agree}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition"
            >
              Create account
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

export default Signup;
