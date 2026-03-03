import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { scans } from "../data/scans";
import { FiAlertCircle } from "react-icons/fi";
import { MdOutlineWarningAmber } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { FiFilter, FiColumns, FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/layout/Header";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const { theme, toggleTheme } = useTheme();

  const totals = scans.reduce(
    (acc, scan) => {
      acc.critical += scan.vulnerabilities.critical;
      acc.high += scan.vulnerabilities.high;
      acc.medium += scan.vulnerabilities.medium;
      acc.low += scan.vulnerabilities.low;
      return acc;
    },
    { critical: 0, high: 0, medium: 0, low: 0 },
  );

  const filterScans = scans.filter((scan) =>
    scan.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Main Panel */}
        <div className="bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-6">
          {/* metadata strip */}
          <div className="flex flex-wrap gap-8.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-4">
            <span>
              <strong className="text-gray-800 dark:text-gray-300">Org:</strong>{" "}
              Project X
            </span>
            <span>|</span>
            <span>
              <strong className="text-gray-800 dark:text-gray-300">
                Owner:
              </strong>{" "}
              Nammagiri
            </span>
            <span>|</span>
            <span>
              <strong className="text-gray-800 dark:text-gray-300">
                Total Scan:
              </strong>{" "}
              100
            </span>
            <span>|</span>
            <span>
              <strong className="text-gray-800 dark:text-gray-300">
                Scheduled:
              </strong>{" "}
              1000
            </span>
            <span>|</span>
            <span>
              <strong className="text-gray-800 dark:text-gray-300">
                Rescans:
              </strong>{" "}
              100
            </span>
            <span>|</span>
            <span>
              <strong className="text-gray-800 dark:text-gray-300">
                Failed Scans:
              </strong>{" "}
              100
            </span>

            <div className="ml-auto flex items-center gap-2 text-cyan-500">
              <FiRefreshCw size={14} />
              <span>10 mins ago</span>
            </div>
          </div>

          {/* severity section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Critical */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-[#0F172A] rounded-xl px-6 py-5">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Critical Severity
                </p>
                <p className="text-2xl font-semibold text-red-500">
                  {totals.critical}
                </p>
                <p className="text-xs text-red-500/80 mt-1">
                  ↑ +2% increase than yesterday
                </p>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg text-red-400">
                <FiAlertCircle size={15} />
              </div>
            </div>

            {/* High */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-[#0F172A] rounded-xl px-6 py-5">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  High Severity
                </p>
                <p className="text-2xl font-semibold text-orange-500">
                  {totals.high}
                </p>
                <p className="text-xs text-red-500/80 mt-1">
                  ↑ +0.9% increase than yesterday
                </p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg text-orange-400">
                <MdOutlineWarningAmber size={15} />
              </div>
            </div>

            {/* Medium */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-[#0F172A] rounded-xl px-6 py-5">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Medium Severity
                </p>
                <p className="text-2xl font-semibold text-yellow-500">
                  {totals.medium}
                </p>
                <p className="text-xs text-emerald-400 mt-1">
                  ↓ -0.9% decrease than yesterday
                </p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg text-yellow-400">
                <AiOutlineInfoCircle size={15} />
              </div>
            </div>

            {/* Low */}
            <div className="flex items-center justify-between bg-gray-100 dark:bg-[#0F172A] rounded-xl px-6 py-5">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Low Severity
                </p>
                <p className="text-2xl font-semibold text-green-500">
                  {totals.low}
                </p>
                <p className="text-xs text-red-500/80 mt-1">
                  ↑ +0.9% increase than yesterday
                </p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <BsSearch size={15} />
              </div>
            </div>
          </div>
        </div>

        {/* SCAN TABLE PANEL */}
        <div className="bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search scans by name or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-100 dark:bg-[#0F1B2E] border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-800 dark:text-gray-300 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-[#0F1B2E] border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 transition cursor-pointer">
                <FiFilter size={16} />
                Filter
              </button>

              <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 dark:bg-[#0F1B2E] border border-gray-300 dark:border-gray-700 rounded-lg hover:border-gray-500 transition cursor-pointer">
                <FiColumns size={16} />
                Column
              </button>

              <button className="px-4 py-2 text-sm bg-cyan-600 rounded-lg hover:bg-cyan-500 transition cursor-pointer text-white">
                + New Scan
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 space-y-4 overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-6 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                <div>Scan Name</div>
                <div>Type</div>
                <div>Status</div>
                <div>Progress</div>
                <div>Vulnerability</div>
                <div>Last Scan</div>
              </div>

              {filterScans.map((scan) => (
                <div
                  key={scan.id}
                  className="grid grid-cols-6 items-center py-4 border-t border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-[#0F1B2E] transition-colors duration-150"
                >
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {scan.name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {scan.type}
                  </div>

                  <div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-md ${
                        scan.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : scan.status === "Scheduled"
                            ? "bg-gray-600/30 text-gray-300"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {scan.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          scan.progress === 100 ? "bg-cyan-500" : "bg-red-500"
                        }`}
                        style={{ width: `${scan.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {scan.progress}%
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="bg-red-500 text-xs font-medium px-2 py-1 rounded-md text-white">
                      {scan.vulnerabilities.critical}
                    </span>
                    <span className="bg-orange-500 text-xs font-medium px-2 py-1 rounded-md text-white">
                      {scan.vulnerabilities.high}
                    </span>
                    <span className="bg-yellow-500 text-xs font-medium px-2 py-1 rounded-md text-white">
                      {scan.vulnerabilities.medium}
                    </span>
                    <span className="bg-green-500 text-xs font-medium px-2 py-1 rounded-md text-white">
                      {scan.vulnerabilities.low}
                    </span>
                  </div>

                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {scan.lastScan}
                  </div>
                </div>
              ))}

              {filterScans.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  No Scans Found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
