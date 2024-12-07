import React from "react"; // React 라이브러리를 가져옵니다.
import ReactDOM from "react-dom/client"; // ReactDOM을 통해 HTML DOM에 렌더링을 수행합니다.
import App from "./App"; // 애플리케이션의 메인 컴포넌트.
import "./styles/global.css"; // index.js에서 global stylesheet을 import하면 전역적으로 스타일이 적용돼요

// React 애플리케이션의 루트 DOM 요소를 설정합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

// 루트 DOM에 App 컴포넌트를 렌더링합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// <React.StrictMode>: React 개발 모드에서 잠재적인 문제를 감지하고 경고를 표시.
