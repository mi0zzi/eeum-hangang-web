import { Link } from "react-router-dom";
import "./SelectPage.css";

function SelectPage() {
  return (
    <div className="page">
      <h1>선택 페이지</h1>
      <Link to="/result">다음 페이지</Link>
    </div>
  );
}

export default SelectPage;