## 내가 원하는 파일 구조 테스트 형태로 출력

find ./public/ ./src/ -type f >file_list.txt

## 프로젝트 디렉토리 구조

![alt text](image-25.png)
![alt text](image-26.png)
![alt text](image-27.png)

## 파일 간 의존성 및 호출 관계

![alt text](image-28.png)

## 초기 로드 동작 순서

![alt text](image-41.png)
![alt text](image-42.png)

## 메인 HTML 파일:

### index.html

![alt text](image-1.png)

## 엔트리 및 주요 구성 요소:

### index.js

![alt text](image-2.png)
![alt text](image-3.png)

### App.js

![alt text](image-4.png)
![alt text](image-5.png)

## API 파일:

### itemApi.js

![alt text](image-21.png)
![alt text](image-22.png)
![alt text](image-23.png)

### 레이아웃 컴포넌트: Header.jsx, Header.css

![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)

### UI 컴포넌트:

### Button.jsx

### DropdownList.jsx, DropdownList.css

### PaginationBar.jsx

![alt text](image-30.png)

- 시작 페이지 계산
  ![alt text](image-31.png)
  ![alt text](image-32.png)
  ![alt text](image-33.png)
- 표시할 페이지 목록 생성
  ![alt text](image-34.png)
  ![alt text](image-35.png)
  ![alt text](image-36.png)
  ![alt text](image-37.png)

### PaginationBar.css

![alt text](image-29.png)

### (\_, i) => startPage + i 에 대한 설명

![alt text](image-38.png)
![alt text](image-39.png)
![alt text](image-40.png)

### 페이지 컴포넌트:

### AddItemPage.jsx, AddItemPage.css

### CommunityFeedPage.jsx, CommunityFeedPage.css

### HomePage.jsx, HomePage.css

### LoginPage.jsx, LoginPage.css

### MarketPage.css

![alt text](image-20.png)
![alt text](image-16.png)

### MarketPage.jsx,

![alt text](image-9.png)
![alt text](image-10.png)

### AllItemsSection.jsx

![alt text](image-15.png)
![alt text](image-17.png)
![alt text](image-18.png)

### BestItemsSection.jsx

![alt text](image-11.png)
![alt text](image-12.png)
![alt text](image-13.png)
![alt text](image-14.png)

### ItemCard.jsx

![alt text](image-19.png)

## 전역 스타일:

### global.css

![alt text](image-24.png)
