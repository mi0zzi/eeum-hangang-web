import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import "./ResultPage.css";

function ResultPage() {
  return (
    <div className="result-page">
      <ProgressBar currentStep={3} />

      <h1>결과 페이지</h1>
      <Link to="/">처음으로</Link>
    </div>
  );
}

export default ResultPage;