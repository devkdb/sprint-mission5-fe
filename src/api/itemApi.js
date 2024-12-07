// 아이템 관련 API 함수 정의
export async function getProducts(params = {}) {
  // URLSearchParams는 파라미터를 자동으로 인코딩. 쿼리 문자열 생성
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // JSON 데이터 반환
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
