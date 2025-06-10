const ProgressBar = ({ step }) => {
    const steps = ["Personal", "Business", "Preferences"];
    return (
      <div className="flex justify-between mb-6">
        {steps.map((label, index) => (
          <div key={label} className="text-center flex-1">
            <div
              className={`rounded-full w-8 h-8 mx-auto mb-2 ${
                step > index ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProgressBar;
  