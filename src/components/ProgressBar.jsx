import checkIcon from "../assets/images/check.png";
import "./ProgressBar.css";

function ProgressBar({ currentStep = 1 }) {
  return (
    <div className="progress-bar">
      <Step number={1} currentStep={currentStep} />
      <Line active={currentStep >= 2} />

      <Step number={2} currentStep={currentStep} />
      <Line active={currentStep >= 3} />

      <Step number={3} currentStep={currentStep} />
    </div>
  );
}

function Step({ number, currentStep }) {
  const isCompleted = currentStep > number;
  const isActive = currentStep >= number;

  return (
    <div className={`progress-circle ${isActive ? "active" : ""}`}>
      {isCompleted ? (
        <img src={checkIcon} alt="" />
      ) : (
        number
      )}
    </div>
  );
}

function Line({ active }) {
  return <div className={`progress-line ${active ? "active" : ""}`} />;
}

export default ProgressBar;