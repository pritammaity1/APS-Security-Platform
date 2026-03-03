import React from "react";
import { useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiChevronRight } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const pathNames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="w-full bg-white dark:bg-[#0B1220] border-b border-gray-200 dark:border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* BreadCrump */}
        <div className="w-full bg-white dark:bg-[#0B1220] px-6 py-3">
          <span className="font-medium text-gray-900 dark:text-white">
            {pathNames.length === 0
              ? "Dashboard"
              : pathNames[0].charAt(0).toUpperCase() + pathNames[0].slice(1)}
          </span>

          {pathNames.slice(1).map((name, index) => (
            <React.Fragment key={index}>
              <FiChevronRight size={14} />
              <span className="text-cyan-500">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#0F1B2E] hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? (
              <FiSun className="text-yellow-400" size={18} />
            ) : (
              <FiMoon className="text-gray-700" size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
