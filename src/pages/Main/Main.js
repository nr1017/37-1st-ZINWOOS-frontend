import React from 'react';
import Carousel from './Carousel';

const Main = () => {
  return (
    <div className="Main">
      <Carousel />
      <h1 className="main-title">#함께하는진우님</h1>
      <p className="main-content">
        우리는 많은 것들과 더불어 살고 있습니다. <br />
        가족, 반려자, 동물, 식물, 사소하게는 책까지. <br />
        진우스는 그들과 함께하는 매 순간이 더욱 행복하고 즐거울 수 있도록 항상
        고민합니다.
        <br /> <br />
        당신의 행복한 일상을 언제나 응원합니다.
        <br /> <br />
        당신과 함께하는 ZINWOOS
      </p>
      <div className="main-youtube">
        <iframe
          width="980"
          height="550"
          src="https://www.youtube.com/embed/_nXwrx4Qyz8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <ul className="main-ul">
        <li className="main-li">
          <img src="" alt="" />
          <p>
            진우스 <br />
            베스트셀러
          </p>
        </li>
        <li className="main-li">
          <img src="" alt="" />
          <p>
            100개를 넘는 <br />
            고객 후기
          </p>
        </li>
        <li className="main-li">
          <img src="" alt="" />
          <p>
            글로벌 소비자 평점 4.5점의 <br />
            검증 받은 브랜드
          </p>
        </li>
      </ul>

      <section className="main-best">
        <h2 className="main-sub-title">ZINWOOS best</h2>
        <img src="" alt="" />
      </section>
    </div>
  );
};

export default Main;
