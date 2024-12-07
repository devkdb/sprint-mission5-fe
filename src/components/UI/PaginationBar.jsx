import React from "react";
import "./PaginationBar.css";
import { ReactComponent as LeftArrow } from "../../assets/images/icons/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../assets/images/icons/arrow_right.svg";

const PaginationBar = ({ totalPageNum, activePageNum, onPageChange }) => {
  const maxVisiblePages = 5; // 한 번에 보이는 최대 페이지 수
  let startPage;

  // 시작 페이지 계산
  if (totalPageNum <= maxVisiblePages) {
    startPage = 1;
  } else {
    // 현재 페이지 중심으로 범위 계산
    startPage = Math.max(activePageNum - Math.floor(maxVisiblePages / 2), 1);

    // 범위를 페이지 범위 내로 제한
    startPage = Math.min(startPage, totalPageNum - maxVisiblePages + 1);
  }

  // 표시할 페이지 목록 생성
  const pages = Array.from(
    { length: Math.min(maxVisiblePages, totalPageNum - startPage + 1) },
    (_, i) => startPage + i
  );
  /*
  (_, i) => startPage + i 에 대한 설명
  이 코드는 **화살표 함수(arrow function)**로, 
  배열의 각 인덱스를 기반으로 값을 생성하는 함수. 
  여기서 _와 i는 Array.from의 두 번째 매개변수로 사용됨.

  매개변수:
  _: 첫 번째 매개변수로, 배열의 요소를 의미합니다.
    여기서는 배열 요소를 사용하지 않으므로 _로 처리하여 "사용하지 않는 값"임을 표현한다.
  
  i: 두 번째 매개변수로, 현재 인덱스를 의미한다.

  더 자세한 것은 Readme.md 파일 참조.

  */

  return (
    <div className='paginationBar'>
      {/* 이전 페이지 버튼 */}
      <button
        className='paginationButton'
        disabled={activePageNum === 1} // 첫 페이지에서 비활성화
        onClick={() => onPageChange(activePageNum - 1)}
      >
        <LeftArrow /> {/* 왼쪽 화살표 아이콘 */}
      </button>

      {/* 페이지 번호 버튼 */}
      {pages.map((page) => (
        <button
          key={page} // React에서 고유 키 필요
          className={`paginationButton ${
            activePageNum === page ? "active" : ""
          }`} // 현재 페이지에 활성화 스타일 적용
          onClick={() => onPageChange(page)} // 페이지 변경 함수 호출
        >
          {page} {/* 페이지 번호 표시 */}
          {page}
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button
        className='paginationButton'
        disabled={activePageNum === totalPageNum} // 마지막 페이지에서 비활성화
        onClick={() => onPageChange(activePageNum + 1)}
      >
        <RightArrow />
      </button>
    </div>
  );
};

export default PaginationBar;
