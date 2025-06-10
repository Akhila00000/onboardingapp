// src/components/dashboard.js
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { theme, layout } = useTheme();
  const [d, setD] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("onboardingData") || "{}");
    setD(saved);
  }, []);

  const cardStyle = layout === "Cards"
    ? { padding: "1rem", margin: "0.5rem 0", background: theme === "Dark" ? "#444" : "#eef", borderRadius: "4px" }
    : { padding: "0.5rem", margin: "0.5rem 0", border: "1px solid", borderColor: theme === "Dark" ? "#666" : "#ccc" };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Welcome, {d.name}</h2>
      <p>Email: {d.email}</p>
      <p>Company: {d.company}</p>
      <p>Theme: {theme}</p>
      <p>Layout: {layout}</p>

      <div style={{ marginTop: "1rem" }}>
        <div style={cardStyle}>Team Members: 5 Active Members</div>
        <div style={cardStyle}>Active Projects: 3 Projects Ongoing</div>
        <div style={cardStyle}>Notifications: 2 New Alerts</div>
      </div>
    </div>
  );
}
