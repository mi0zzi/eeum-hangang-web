import { Link } from "react-router-dom";
import "./ResultPage.css";

function ResultPage() {
  return (
    <div className="page">
      <h1>결과 페이지</h1>
      <Link to="/">처음으로</Link>
    </div>
  );
}

export default ResultPage;