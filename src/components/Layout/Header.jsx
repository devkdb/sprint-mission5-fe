import React from "react";
import Logo from "../../assets/images/logo/logo.svg";
import "./Header.css";
import { useNavigate } from "react-router-dom"; // Importing navigation hook

function Header() {
  const navigate = useNavigate(); // Initialize navigation hook
  return (
    <header className='globalHeader'>
      <div className='headerLeft'>
        {/* 로고 이미지 */}
        <img
          src={Logo}
          alt='판다마켓 로고'
          width='153'
          className='headerLogo'
          onClick={() => navigate("/")} // Navigate to HomePage on logo click
          style={{ cursor: "pointer" }} // Add cursor pointer for better UX
        />

        {/* 네비게이션 메뉴 */}
        <nav>
          <ul>
            <li
              onClick={() => navigate("/community")}
              style={{ cursor: "pointer" }}
            >
              자유게시판
            </li>
            <li
              onClick={() => navigate("/market")}
              style={{ cursor: "pointer" }}
            >
              중고마켓
            </li>
          </ul>
        </nav>
      </div>
      {/* 로그인 버튼 */}
      <button
        type='button'
        className='loginLink button'
        onClick={() => navigate("/login")} // 로그인 클릭 시 이동
        style={{ cursor: "pointer" }}
      >
        로그인
      </button>
    </header>
  );
}

export default Header;
