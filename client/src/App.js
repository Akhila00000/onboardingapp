// src/App.js
import React, { useState } from "react";
import Onboarding from "./components/onboarding/onboarding";
import Dashboard from "./components/dashboard";

function App() {
  const [finished, setFinished] = useState(
    !!localStorage.getItem("onboardingData")
  );

  return finished ? (
    <Dashboard />
  ) : (
    <Onboarding onFinish={() => setFinished(true)} />
  );
}
<button className="btn btn-warning m-3" onClick={() => {
  localStorage.removeItem("onboardingData");
  window.location.reload();
}}>
  Start New Onboarding
</button>


export default App;
