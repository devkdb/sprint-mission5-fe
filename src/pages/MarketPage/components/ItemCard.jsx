import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

/*
컴포넌트 구조:

item 속성: 부모 컴포넌트에서 전달받은 상품 정보를 사용.
<div className="itemCard">: 개별 상품 카드 컨테이너.
<img>: 상품 이미지를 렌더링하며, 접근성을 위해 alt 속성 설정.
<h2 className="itemName">: 상품 이름.
<p className="itemPrice">: 상품 가격을 천 단위로 쉼표(toLocaleString())를 추가하여 표시.
<div className="favoriteCount">: 좋아요 수를 HeartIcon과 함께 표시.
*/
function ItemCard({ item }) {
  return (
    <div className='itemCard'>
      <img src={item.images[0]} alt={item.name} className='itemCardThumbnail' />
      <div className='itemSummary'>
        <h2 className='itemName'>{item.name}</h2>
        <p className='itemPrice'>{item.price.toLocaleString()}원</p>
        <div className='favoriteCount'>
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
