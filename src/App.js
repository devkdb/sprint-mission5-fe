import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router imports
import MarketPage from "./pages/MarketPage/MarketPage"; // 마켓 페이지 컴포넌트
import HomePage from "./pages/HomePage/HomePage"; // 홈 페이지 컴포넌트
import Header from "./components/Layout/Header"; // 헤더 컴포넌트
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage"; // 자유게시판 페이지
import LoginPage from "./pages/LoginPage/LoginPage"; // 로그인 페이지

function App() {
  return (
    <Router>
      {/* 글로벌 네비게이션 바 */}
      <Header />

      <div className='withHeader'>
        <Routes>
          <Route path='/' element={<HomePage />} /> {/* 홈 페이지 라우트 */}
          <Route path='/market' element={<MarketPage />} />
          <Route path='/community' element={<CommunityFeedPage />} />
          <Route path='/login' element={<LoginPage />} />
          {/* 추가 라우트는 필요에 따라 여기에 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
