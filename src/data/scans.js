export const scans = [
  {
    id: "1",
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed", // Completed | Scheduled | Running | Failed
    progress: 100,
    lastScan: "4d ago",
    vulnerabilities: {
      critical: 5,
      high: 12,
      medium: 23,
      low: 18,
    },
  },

  {
    id: "2",
    name: "Payment Gateway API",
    type: "Blackbox",
    status: "Running", // Completed | Scheduled | Running | Failed
    progress: 65,
    lastScan: "2h ago",
    vulnerabilities: {
      critical: 2,
      high: 8,
      medium: 15,
      low: 10,
    },
  },
  {
    id: "3",
    name: "Internal Admin Panel",
    type: "Whitebox",
    status: "Scheduled", // Completed | Scheduled | Running | Failed
    progress: 0,
    lastScan: "Never",
    vulnerabilities: {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
  },
  {
    id: "4",
    name: "Mobile Backend Service",
    type: "Greybox",
    status: "Failed", // Completed | Scheduled | Running | Failed
    progress: 40,
    lastScan: "1d ago",
    vulnerabilities: {
      critical: 1,
      high: 4,
      medium: 9,
      low: 6,
    },
  },
  {
    id: "5",
    name: "Customer Portal",
    type: "Blackbox",
    status: "Completed", // Completed | Scheduled | Running | Failed
    progress: 100,
    lastScan: "6h ago",
    vulnerabilities: {
      critical: 3,
      high: 7,
      medium: 14,
      low: 11,
    },
  },
];
