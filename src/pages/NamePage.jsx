import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NamePage.css";

import mainFish from "../assets/images/mainfish.png";

function NamePage() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  
  return (
    <div className="page">

      {/* 배경 Glow */}
      <div className="background-glow"></div>
      
      <div className="select-center">

        <img
          src={mainFish}
          alt="Main Fish"
          className="main-fish"
        />

        <h1 className="welcome-title">
          반가워요!
        </h1>

        <p className="welcome-description">
          함께 한강을 지킬 <span>물고기</span>에게 
          <br />
          이름을 지어주세요
        </p>

        <div className="name-input-box">
          <input
            type="text"
            placeholder="예시) 피라미"
            maxLength={10}
            className="name-input"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <span className="name-count">{nickname.length} / 10</span>
        </div>

        <button
          className="next-button"
          onClick={() => {
            if (nickName.trim() !== "") {
                navigate("/select");
            }
          }}
        >
          다음
        </button>

    </div>

    <button
        className="next-button"
        onClick={() => {
            if (nickname.trim() !== "") {
                navigate("/select");
            }
        }}
    >
        다음
    </button>
      
      {/*
      기존 테스트 코드 (임시 보관)

      <h1>선택 페이지</h1>
      <Link to="/result">다음 페이지</Link>
      */}

    </div>
  );
}

export default NamePage;