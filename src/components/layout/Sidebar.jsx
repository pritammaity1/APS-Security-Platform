import React from "react";
import { NavLink } from "react-router-dom";
import { FiGrid, FiBarChart2 } from "react-icons/fi";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FiGrid size={18} /> },

    { name: "Scans", path: "/activeScan", icon: <FiBarChart2 size={18} /> },
  ];

  return (
    <div
      className="w-64 min-h-screen hidden md:flex flex-col justify-between
    bg-gray-100 dark:bg-[#0F172A]
    border-r border-gray-200 dark:border-gray-800"
    >
      {/* Logo */}
      <div>
        <div className="px-6 py-6">
          <h1 className="text-xl font-bold text-cyan-600 dark:text-cyan-400">
            aps
          </h1>
        </div>

        {/* Menu */}
        <nav className="px-4 space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-800/30 dark:text-cyan-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#1E293B]"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          admin@edu.com
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Security Lead
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
