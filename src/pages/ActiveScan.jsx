import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import { logs } from "../data/logs";
import {
  FiGlobe,
  FiMap,
  FiActivity,
  FiCheckCircle,
  FiFileText,
  FiClock,
  FiUsers,
  FiFolder,
  FiList,
} from "react-icons/fi";

// ── Static Data ────────────────────────────────────────────
const steps = [
  { name: "Spidering", icon: <FiGlobe /> },
  { name: "Mapping", icon: <FiMap /> },
  { name: "Testing", icon: <FiActivity /> },
  { name: "Validating", icon: <FiCheckCircle /> },
  { name: "Reporting", icon: <FiFileText /> },
];

const findings = [
  {
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    time: "10:45:23",
    description:
      "Time-based blind SQL injection confirmed during authentication flow.",
  },
  {
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    time: "10:45:23",
    description:
      "Authenticated low-privilege user accessed metadata of other users.",
  },
  {
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    time: "10:45:23",
    description: "No effective rate limiting detected on login attempts.",
  },
];

// ── Component ──────────────────────────────────────────────
const ActiveScan = ({ scanId = "scan-001" }) => {
  const [activeStep] = useState(0);
  const [activeTab, setActiveTab] = useState("activity");

  const severityColor = {
    Critical: "bg-red-500 text-white",
    High: "bg-orange-500 text-white",
    Medium: "bg-yellow-500 text-black",
  };

  // Pick logs for the current scan, fallback to empty array
  const currentLogs = logs[scanId] ?? [];

  // Colour-code log lines by keyword
  const getLogColor = (line) => {
    if (
      line.toLowerCase().includes("fail") ||
      line.toLowerCase().includes("error")
    )
      return "text-red-400";
    if (
      line.toLowerCase().includes("timeout") ||
      line.toLowerCase().includes("warning")
    )
      return "text-yellow-400";
    if (
      line.toLowerCase().includes("completed") ||
      line.toLowerCase().includes("found")
    )
      return "text-teal-400";
    return "text-green-400";
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/*  HEADER SECTION  */}
        <div className="bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-6">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Circular Progress */}
            <div
              className="flex flex-col items-center justify-center w-32 h-32 rounded-full
              bg-gray-100 dark:bg-[#111827] border border-gray-300 dark:border-gray-700"
            >
              <span className="text-2xl font-bold text-teal-500">0%</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                In Progress
              </span>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px h-16 bg-gray-300 dark:bg-gray-700" />

            {/* Step Tracker */}
            <div className="flex-1 relative flex justify-between">
              {/* Horizontal Connector Line */}
              <div className="absolute top-5 left-5 right-5 h-px bg-gray-300 dark:bg-gray-700 z-0" />

              {steps.map((step, index) => (
                <div
                  key={step.name}
                  className="flex flex-col items-center z-10"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                      index === activeStep
                        ? "bg-teal-500/20 border-teal-500 text-teal-500"
                        : "bg-gray-100 dark:bg-[#111827] border-gray-300 dark:border-gray-700 text-gray-500"
                    }`}
                    style={
                      index === activeStep
                        ? {
                            boxShadow:
                              "0 0 12px 3px rgba(20, 184, 166, 0.5), 0 0 24px 6px rgba(20, 184, 166, 0.25)",
                          }
                        : {}
                    }
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`text-sm mt-2 ${
                      index === activeStep
                        ? "text-teal-500"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-sm border-t border-gray-300 dark:border-gray-700 pt-6">
            <Meta icon={<FiActivity />} label="Scan Type" value="Grey Box" />
            <Meta icon={<FiGlobe />} label="Targets" value="google.com" />
            <Meta
              icon={<FiClock />}
              label="Started At"
              value="Nov 22, 09:00AM"
            />
            <Meta icon={<FiUsers />} label="Credentials" value="2 Active" />
            <Meta icon={<FiFolder />} label="Files" value="Control.pdf" />
            <Meta
              icon={<FiList />}
              label="Checklists"
              value="40/350"
              highlight
            />
          </div>
        </div>

        {/*  MAIN SECTION  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Live Console */}
          <div className="lg:col-span-2 bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800 rounded-2xl">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-800">
              <Tab
                label="Activity Log"
                active={activeTab === "activity"}
                onClick={() => setActiveTab("activity")}
              />
              <Tab
                label="Verification Loops"
                active={activeTab === "loops"}
                onClick={() => setActiveTab("loops")}
              />
            </div>

            {/* Console */}
            <div className="p-6 h-[350px] overflow-y-auto bg-black font-mono text-sm rounded-b-2xl">
              {activeTab === "activity" ? (
                currentLogs.length > 0 ? (
                  currentLogs.map((line, i) => (
                    <p key={i} className={`mb-1 ${getLogColor(line)}`}>
                      {line}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500">
                    No logs available for this scan.
                  </p>
                )
              ) : (
                <>
                  <p className="text-green-400">
                    [Loop 1] Re-validating SQL injection payload...
                  </p>
                  <p className="text-green-400">
                    [Loop 2] Confirmed DB response timing variance
                  </p>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: Findings */}
          <div className="bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 space-y-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Finding Log
            </h3>

            {findings.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-[#111827] p-4 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`text-xs px-2 py-1 rounded ${severityColor[item.severity]}`}
                  >
                    {item.severity}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.time}
                  </span>
                </div>

                <h4 className="font-medium text-gray-800 dark:text-gray-200 mt-2">
                  {item.title}
                </h4>

                <p className="text-teal-500 text-sm mt-1">{item.endpoint}</p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*  BOTTOM STATUS BAR  */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4
          bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800
          rounded-2xl px-6 py-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <div>Sub-agents: 0</div>
          <div>Parallel Executions: 2</div>
          <div>Operations: 1</div>
          <div className="flex gap-4">
            <span className="text-red-500">Critical: 0</span>
            <span className="text-orange-500">High: 0</span>
            <span className="text-yellow-500">Medium: 0</span>
            <span className="text-green-500">Low: 0</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

/*  REUSABLE COMPONENTS  */

const Meta = ({ icon, label, value, highlight }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
      {icon}
      {label}
    </div>
    <div
      className={`text-sm ${highlight ? "text-teal-500" : "text-gray-800 dark:text-gray-200"}`}
    >
      {value}
    </div>
  </div>
);

const Tab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 text-sm font-medium transition ${
      active
        ? "text-teal-500 border-b-2 border-teal-500"
        : "text-gray-500 dark:text-gray-400"
    }`}
  >
    {label}
  </button>
);

export default ActiveScan;
