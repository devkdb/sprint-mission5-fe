import React from "react";

// React 컴포넌트로, 단순히 텍스트(text)를 받아 <div> 태그에 출력
function Button({ text }) {
  return <div className='button'>{text}</div>;
}
export default Button;
