import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard"; // 개별 상품을 렌더링하는 컴포넌트
import { getProducts } from "../../../api/itemApi"; // 상품 데이터를 가져오는 API 함수

// 뷰포트 크기 기반 페이지 크기 계산
// 화면 크기에 따라 한 페이지에 표시할 상품 수를 동적으로 설정
const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 744) {
    // Mobile viewport
    return 1;
  } else if (width < 1280) {
    // Tablet viewport
    return 2;
  } else {
    // Desktop viewport
    return 4;
  }
};

function BestItemsSection() {
  const [itemList, setItemList] = useState([]); // 상품 리스트 데이터 상태
  const [pageSize, setPageSize] = useState(getPageSize()); // 현재 화면 크기에 따라 계산된 한 페이지의 상품 수

  /*
  orderBy: "favorite": 상품을 선호도 순으로 정렬하여 가져옴.
  pageSize: 화면 크기에 맞게 상품을 제한된 수로 가져옴.*/
  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  /*  
  화면 크기 변경 시 페이지 크기 업데이트 및 상품 데이터 재요청

  화면 크기 변경 처리:
  화면 크기가 변경될 때 pageSize를 다시 계산하여 상태를 업데이트.
  컴포넌트가 언마운트되면 이벤트 리스너를 제거.
  */
  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy: "favorite", pageSize });

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]); // pageSize 상태가 변경될 때마다 실행

  /*
  상품 렌더링:
  itemList를 순회하며 각 상품을 ItemCard 컴포넌트로 렌더링.
  */
  return (
    <div className='bestItemsContainer'>
      <h1 className='sectionTitle'>베스트 상품</h1>

      <div className='bestItemsCardSection'>
        {itemList?.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;
