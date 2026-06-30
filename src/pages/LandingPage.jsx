import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
  <div className="page">
    <h1>랜딩 페이지</h1>
    <Link to="/select">다음 페이지</Link>
    </div>
  );
}

export default LandingPage;