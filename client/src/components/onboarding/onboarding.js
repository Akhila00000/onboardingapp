// src/components/onboarding/Onboarding.js
import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const Onboarding = ({ onFinish }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    size: "",
    theme: "Light",
    layout: "Cards",
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("onboardingData", JSON.stringify(data));
      setLoading(false);
      onFinish();
    }, 500);
  };

  if (loading)
    return <div style={styles.pageCenter}><div className="spinner-border" role="status"></div></div>;

  return (
    <div style={styles.pageCenter}>
      <div style={styles.card}>
        {step === 1 && <h2>Step 1: Personal Info</h2>}
        {step === 2 && <h2>Step 2: Business Info</h2>}
        {step === 3 && <h2>Step 3: Preferences</h2>}

        {step === 1 && <Step1 data={data} onChange={handleChange} />}
        {step === 2 && <Step2 data={data} onChange={handleChange} />}
        {step === 3 && <Step3 data={data} onChange={handleChange} />}

        <div style={{ display: "flex", justifyContent:"space-between", marginTop: "1.5rem" }}>
          {step > 1 && <button className="btn btn-secondary" onClick={back}>Back</button>}
          {step < 3 && <button className="btn btn-primary" onClick={next}>Next</button>}
          {step === 3 && <button className="btn btn-success" onClick={submit}>Submit</button>}
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageCenter: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
  },
};

export default Onboarding;
