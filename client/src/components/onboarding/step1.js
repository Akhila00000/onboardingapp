// src/components/onboarding/step1.js
import React from "react";

export default function Step1({ data, onChange }) {
  return (
    <>
      <label>Name</label>
      <input
        name="name"
        value={data.name}
        onChange={onChange}
        className="form-control mb-3"
      />
      <label>Email</label>
      <input
        name="email"
        type="email"
        value={data.email}
        onChange={onChange}
        className="form-control mb-3"
      />
    </>
  );
}
