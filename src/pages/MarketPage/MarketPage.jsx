import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./MarketPage.css";

function MarketPage() {
  return (
    <div className='wrapper'>
      {/* 인기 상품 섹션 */}
      <BestItemsSection />
      {/* 전체 상품 섹션 */}
      <AllItemsSection />
    </div>
  );
}

export default MarketPage;
