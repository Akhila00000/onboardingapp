// src/components/onboarding/step2.js
import React from "react";

export default function Step2({ data, onChange }) {
  return (
    <>
      <label>Company Name</label>
      <input
        name="company"
        value={data.company}
        onChange={onChange}
        className="form-control mb-3"
      />
      <label>Industry</label>
      <select
        name="industry"
        value={data.industry}
        onChange={onChange}
        className="form-select mb-3"
      >
        <option value="">Select</option>
        {["Technology","Healthcare","Finance","Education","Retail","Manufacturing","Consulting","Media & Entertainment","Other"].map((x) => (
          <option key={x} value={x}>{x}</option>
        ))}
      </select>
      <label>Company Size</label>
      <select
        name="size"
        value={data.size}
        onChange={onChange}
        className="form-select mb-3"
      >
        <option value="">Select</option>
        {["1-10 employees","11-50 employees","51-200 employees","201-1000 employees","1000+ employees"].map((x)=>(
          <option key={x} value={x}>{x}</option>
        ))}
      </select>
    </>
  );
}
