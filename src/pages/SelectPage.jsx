import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import ProgressBar from '../components/ProgressBar';
import mainfish2 from '../assets/images/mainfish.png';
import modalFish from '../assets/images/EEUM-LogoImage.png';
import plasticImg from '../assets/images/plastic.png';
import paperImg from '../assets/images/paper.png';
import './SelectPage.css';

const SelectPage = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

const handleNextClick = async () => {
  if (selectedMaterial === 'plastic') {
    setShowModal(true);
  } else if (selectedMaterial === 'paper') {
    const nickname = localStorage.getItem("nickname");

    if (!nickname) {
      navigate("/");
      return;
    }

    await supabase
      .from("participants")
      .insert({ nickname });

    navigate("/result");
  }
};

  return (
    <div className="page-wrapper">
      <div className="mobile-container">
      <ProgressBar currentStep={2} />
      <h1 className="title-text">
        오늘은 어떤 소재의 <span className="highlight-text">북커버</span>를<br />사용할까요?
      </h1>

      <div className="card-group">
        <button
          onClick={() => handleMaterialClick('plastic')}
          className={`cover-button ${selectedMaterial === 'plastic' ? 'plastic-selected' : ''}`}
        >
          {selectedMaterial === 'plastic' && <span className="check-icon plastic-check">✓</span>}
          <img src={plasticImg} alt="투명 비닐" className="cover-img" />
          <span className="material-label">투명 비닐</span>
        </button>

        <button
          onClick={() => handleMaterialClick('paper')}
          className={`cover-button ${selectedMaterial === 'paper' ? 'paper-selected' : ''}`}
        >
          {selectedMaterial === 'paper' && <span className="check-icon paper-check">✓</span>}
          <img src={paperImg} alt="친환경 종이" className="cover-img" />
          <span className="material-label">친환경 종이</span>
        </button>
      </div>

      <div className="bottom-section">
        <div className="mascot-bubble">
          <img src={mainfish2} alt="물고기" className="mascot-img" />
          <p className="mascot-text">
            친환경 종이를 선택하면<br />한강 수족관에 새로운 물고기 친구가 찾아와요.
          </p>
        </div>
      </div>

      <button
        onClick={handleNextClick}
        disabled={!selectedMaterial}
        className={`next-btn ${selectedMaterial ? 'next-active' : 'next-disabled'}`}
      >
        다음
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>✕</button>
            <img src={modalFish} alt="캐릭터" className="modal-mascot-img" />
            <h2 className="modal-title">한강을 위한<br />더 좋은 선택이 있어요.</h2>
            <p className="modal-desc">
              친환경 종이 북커버는 투명 비닐 북커버보다 탄소배출을<br />
              약 <strong className="highlight-percent">15.6%</strong> 줄일 수 있어요.<br /><br />
              <span className="dark-text">여러분의 작은 실천이 한강을 더 깨끗하게 만들어요.</span>
            </p>
            <button 
              className="modal-action-btn"
              onClick={async () => {
                const nickname = localStorage.getItem("nickname");

                if (!nickname) {
                  navigate("/");
                  return;
                }

                await supabase
                  .from("participants")
                  .insert({ nickname });

                setSelectedMaterial("paper");
                setShowModal(false);
                navigate("/result");
              }}
            >
              친환경 종이 선택
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default SelectPage;