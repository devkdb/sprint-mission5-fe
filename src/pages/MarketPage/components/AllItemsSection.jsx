import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemApi";
import ItemCard from "./ItemCard";
import { ReactComponent as SortIconMobile } from "../../../assets/images/icons/ic_sort_mobile.svg";
import { ReactComponent as SortIconArrowDown } from "../../../assets/images/icons/ic_arrow_down.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import DropdownList from "../../../components/UI/DropdownList"; // 정렬 드롭다운
import PaginationBar from "../../../components/UI/PaginationBar";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    // Mobile viewport
    return 4;
  } else if (width < 1280) {
    // Tablet viewport
    return 6;
  } else {
    // Desktop viewport
    return 10;
  }
};

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState("recent"); // 정렬 기준 (recent 또는 favorite).
  const [page, setPage] = useState(1); // 현재 페이지
  const [pageSize, setPageSize] = useState(getPageSize()); // 페이지 크기
  const [itemList, setItemList] = useState([]); // 상품 목록
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // 드롭다운 가시성
  const [totalPageNum, setTotalPageNum] = useState(); // 총 페이지 수
  const [keyword, setKeyword] = useState(""); // 검색 키워드

  // 상품 데이터 API 호출
  const fetchSortedData = async ({ orderBy, page, pageSize, keyword }) => {
    const products = await getProducts({ orderBy, page, pageSize, keyword });
    setItemList(products.list); // 상품 목록 상태 업데이트
    setTotalPageNum(Math.ceil(products.totalCount / pageSize)); // 총 페이지 수 계산
  };

  // 정렬 옵션 선택 처리
  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption); // 정렬 기준 업데이트
    setIsDropdownVisible(false); // 드롭다운 숨기기
  };

  // 검색 입력 변경 처리
  const handleInputChange = (event) => {
    setKeyword(event.target.value); // 검색 키워드 업데이트
  };

  // 검색 실행
  const handleSearch = () => {
    setPage(1); // 페이지를 첫 페이지로 초기화
    fetchSortedData({ orderBy, page: 1, pageSize, keyword });
  };

  // Enter 키로 검색 실행
  const handleKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  const convertToKorean = (orderBy) => {
    switch (orderBy) {
      case "recent":
        return "최신순";
      case "favorite":
        return "인기순";
      default:
        return "최신순";
    }
  };

  // 반응형 처리 및 데이터 로드
  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy, page, pageSize, keyword });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orderBy, page, pageSize, keyword]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // 페이지 변경 처리
  const onPageChange = (pageNumber) => {
    setPage(pageNumber); // 페이지 상태 업데이트
    fetchSortedData({ orderBy, page: pageNumber, pageSize, keyword });
  };

  return (
    <div>
      {/* 헤더 섹션 */}
      <div className='allItemsSectionHeader'>
        <h1 className='sectionTitle'>판매 중인 상품</h1>

        {/* 검색 바 */}
        <div className='searchBarWrapper'>
          <SearchIcon />
          <input
            className='searchBarInput'
            placeholder='검색할 상품을 입력해 주세요'
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div to='/additem' className='createItemButton button'>
          상품 등록하기
        </div>

        {/* 정렬 드롭다운 */}
        <div className='sortButtonWrapper'>
          <button
            className='sortDropdownTriggerButton'
            onClick={toggleDropdown}
          >
            <div className='sortBtn'>
              <span>{convertToKorean(orderBy)}</span>
              <SortIconArrowDown />
            </div>
            <SortIconMobile className='mobileSortBtn' />
          </button>
          {isDropdownVisible && (
            <DropdownList onSortSelection={handleSortSelection} />
          )}
        </div>
      </div>

      {/* 상품 목록 */}
      <div className='allItemsCardSection'>
        {itemList?.map((item) => (
          <ItemCard item={item} key={`market-item-${item.id}`} />
        ))}
      </div>

      {/* 페이지네이션 */}
      <div className='paginationBarWrapper'>
        <PaginationBar
          totalPageNum={totalPageNum}
          activePageNum={page}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export default AllItemsSection;
