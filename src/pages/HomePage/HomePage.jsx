import React from "react";
import "./HomePage.css"; // HomePage 전용 스타일
import "../../styles/global.css"; // 글로벌 스타일 (필요 시)
import Header from "../../components/Layout/Header"; // Header 컴포넌트
import Feature1_image from "../../assets/images/home/feature1-image.png";
import Feature2_image from "../../assets/images/home/feature2-image.png";
import Feature3_image from "../../assets/images/home/feature3-image.png";
import FacebookLogo from "../../assets/images/social/facebook-logo.svg";
import TwitterLogo from "../../assets/images/social/twitter-logo.svg";
import YouTubeLogo from "../../assets/images/social/youtube-logo.svg";
import InstagramLogo from "../../assets/images/social/instagram-logo.svg";

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header />

      <main className='with-header'>
        {/* 배너 섹션 */}
        <section id='hero' className='banner'>
          <div className='wrapper'>
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <a href='/items' className='button pill-button'>
              구경하러 가기
            </a>
          </div>
        </section>

        {/* 주요 기능 섹션 */}
        <section id='features' className='wrapper'>
          <div className='feature'>
            <img src={Feature1_image} alt='인기 상품' />
            <div className='feature-content'>
              <h2>Hot item</h2>
              <h1>
                인기 상품을{" "}
                <span className='break-on-desktop'>
                  <br />
                </span>
                확인해 보세요
              </h1>
              <p className='feature-description'>
                가장 HOT한 중고거래 물품을
                <br />
                판다마켓에서 확인해 보세요
              </p>
            </div>
          </div>
          <div className='feature'>
            <img src={Feature2_image} alt='검색 기능' />
            <div className='feature-content'>
              <h2>Search</h2>
              <h1>
                구매를 원하는{" "}
                <span className='break-on-desktop'>
                  <br />
                </span>
                상품을 검색하세요
              </h1>
              <p className='feature-description'>
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </p>
            </div>
          </div>
          <div className='feature'>
            <img src={Feature3_image} alt='판매 상품 등록' />
            <div className='feature-content'>
              <h2>Register</h2>
              <h1>
                판매를 원하는{" "}
                <span className='break-on-desktop'>
                  <br />
                </span>
                상품을 등록하세요
              </h1>
              <p className='feature-description'>
                어디서든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </p>
            </div>
          </div>
        </section>

        {/* 하단 배너 */}
        <section id='bottomBanner' className='banner'>
          <div className='wrapper'>
            <h1>
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </h1>
          </div>
        </section>
      </main>

      <footer>
        <div id='copyright'>&copy;codeit - 2024</div>
        <div id='footerMenu'>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/faq'>FAQ</a>
        </div>
        <div id='socialMedia'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='판다마켓 페이스북'
          >
            <img src={FacebookLogo} alt='페이스북' width='20' />
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='판다마켓 트위터'
          >
            <img src={TwitterLogo} alt='트위터' width='20' />
          </a>
          <a
            href='https://www.youtube.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='판다마켓 유튜브'
          >
            <img src={YouTubeLogo} alt='유튜브' width='20' />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='판다마켓 인스타그램'
          >
            <img src={InstagramLogo} alt='인스타그램' width='20' />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
