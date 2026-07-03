import { useNavigate } from "react-router-dom";

import ProgressBar from "../components/ProgressBar";
import Fish from "../components/Fish";

import mockParticipants from "../data/mockParticipants";

import mainFish from "../assets/images/mainfish.png";
import fishBlue from "../assets/images/fish-blue.png";
import fishYellow from "../assets/images/fish-yellow.png";
import fishSilver from "../assets/images/fish-silver.png";

import "./ResultPage.css";

const fishImages = [fishBlue, fishYellow, fishSilver];

const fishPositions = [
  { x: 55, y: 300 },
  { x: 295, y: 325 },
  { x: 80, y: 470 },
  { x: 270, y: 480 },
  { x: 55, y: 620 },
  { x: 295, y: 650 },
  { x: 150, y: 590 },
  { x: 230, y: 620 },
  { x: 85, y: 720 },
  { x: 300, y: 735 },
];

function ResultPage() {
  const navigate = useNavigate();

  const count = mockParticipants.length;
  const reduced = (count * 15.6).toFixed(1);

  return (
    <div className="result-page">
      <div className="hangangriver">
        {mockParticipants.slice(0, 10).map((participant, index) => (
          <Fish
            key={participant.id}
            image={fishImages[index % fishImages.length]}
            nickname={participant.nickname}
            x={fishPositions[index].x}
            y={fishPositions[index].y}
            delay={index * 0.2}
          />
        ))}
      </div>

      <div className="result-top">
        <ProgressBar currentStep={3} />

        <h1 className="result-title">고마워요!</h1>

        <p className="result-description">
          새로운 친구가 한강에 찾아왔어요
        </p>
      </div>

      <div className="result-card">
        <img src={mainFish} alt="" className="result-fish" />

        <p>
          <strong>{count}명</strong>이 함께했어요
        </p>

        <p>
          <strong>{reduced}g CO₂</strong>를 줄였어요
        </p>
      </div>

      <button className="result-button" onClick={() => navigate("/")}>
        처음으로
      </button>
    </div>
  );
}

export default ResultPage;