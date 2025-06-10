// src/components/onboarding/step3.js
import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Step3({ data, onChange }) {
  const { setTheme, setLayout } = useTheme();

  const handle = (e) => {
    onChange(e);
    if (e.target.name === "theme") setTheme(e.target.value);
    if (e.target.name === "layout") setLayout(e.target.value);
  };

  return (
    <>
      <label>Theme Preference</label><br />
      {["Light","Dark"].map((opt) => (
        <div key={opt} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="theme"
            value={opt}
            checked={data.theme === opt}
            onChange={handle}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}

      <hr />

      <label>Dashboard Layout</label><br />
      {["Cards","Compact"].map((opt) => (
        <div key={opt} className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="layout"
            value={opt}
            checked={data.layout === opt}
            onChange={handle}
          />
          <label className="form-check-label">{opt}</label>
        </div>
      ))}
    </>
  );
}
