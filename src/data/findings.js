export const findings = {
  "scan-001": [
    {
      id: "F-001",
      severity: "Critical",
      title: "SQL Injection Vulnerability",
      endpoint: "/api/login",
      description:
        "Unsanitized user input allows attackers to inject arbitrary SQL queries.",
    },
    {
      id: "F-002",
      severity: "High",
      title: "Insecure Direct Object Reference",
      endpoint: "/api/user/12",
      description:
        "Object reference is exposed and can be manipulated by attackers.",
    },
  ],

  "scan-002": [
    {
      id: "F-010",
      severity: "Medium",
      title: "Outdated Firmware Detected",
      endpoint: "192.168.1.23",
      description: "Device firmware version contains known vulnerabilities.",
    },
  ],
};
