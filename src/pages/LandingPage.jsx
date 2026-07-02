import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

import logo from "../assets/logo/EEUMlogo1.png";
import logoText from "../assets/logo/EEUM-LogoText1.png";

function LandingPage() {

  const navigate = useNavigate();

  return (
    <div 
      className="page"
      onClick={() => navigate("/name")}
    >

      {/* 배경 Glow */}
      <div className="background-glow"></div>

      {/* Dynamic Island */}
      <div className="dynamic-island"></div>

      {/* 가운데 정렬 컨테이너 */}
      <div className="landing-center">

        {/* 이음로고1 */}
        <img
          src={logo}
          alt="EEUMlogo1"
          className="landing-logo"
        />

        <img
          src={logoText}
          alt="EEUM-LogoText1"
          className="landing-logo-text"
        />

      </div>


      {/*
      기존 테스트 코드 (임시 보관)

      <h1>랜딩 페이지</h1>
      <Link to="/select">다음 페이지</Link>
      */}

    </div>
  );
}

export default LandingPage;