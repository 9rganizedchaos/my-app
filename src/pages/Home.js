import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <main>
        <header>
          <h1>
            I am a collector. <br />
            <br />
            People often told me it’s time to focus on one thing. However, it is
            difficult for me to stop expanding my interests. <br />
            <br />
            There is a reason why I chose the word “collector”, not just a word
            like “hoarding disorder”. I have themes, when I gather things up.
            This page introduces the things I have collected around my two
            themes; Art Media and Languages.
            <br />
            <br />▼
          </h1>
          <div class="header__photo"></div>
        </header>
        <section class="about">
          <h2>Art Media</h2>
          <div class="about__columns">
            <div class="about__column">
              <div class="img__wrapper">
                <img src="https://i.imgur.com/rZsTJFW.png" alt="image1" />
              </div>
              <span>
                2013-2019 영상학 복수전공 <br />
                2018 영상학과 졸업작품 상영회 FRIED SCREEN 단편영화 "농필름"
                상영
              </span>
            </div>
            <div class="about__column">
              <div class="img__wrapper">
                <img src="https://i.imgur.com/XBQUgFF.png" alt="image1" />
              </div>
              <span>
                2013 대학로 거리극 축제 공연 <br />
                2014-2019 무용학 복수전공 <br />
                2015 홍대 길거리축제 공연 <br />
                2019 무용학과 졸업작품발표회 작품 "쓸쓸" 공연
              </span>
            </div>
            <div class="about__column">
              <div class="img__wrapper">
                <img src="https://i.imgur.com/t1CRpvm.png" alt="image1" />
              </div>
              <span>
                2013-2019 동양철학과 전공 <br />
                2019- 웹진 칼럼 기고 <br />
                2020 졸업논문 "소수자 인권을 통한 양주사상 해석" 작성
              </span>
            </div>
          </div>
        </section>
        <section class="about1">
          <h2>Languages</h2>
          <div class="about1__columns">
            <div class="about1__column">
              <div class="img__wrapper">
                <div class="location__address">
                  <h3>Foreign Languages</h3>
                </div>
              </div>
              <span>
                🇺🇸 2020.1.12 OPIC AL ACTFL <br /> 🇯🇵 2019.7.7 JLPT N2
                일본국제교류기금 <br />
                🇨🇳 2018.3.24 HSK 5급 중국국가한반 <br /> 🇫🇷 2016.11.26-27 DELF
                B1 프랑스교육부
              </span>
            </div>

            <div class="about1__column">
              <a
                href="https://velog.io/@9rganizedchaos"
                target="_blank"
                rel="noreferrer"
              >
                <div class="img__wrapper">
                  <div class="location__address">
                    <h3>Programming Languages</h3>
                  </div>
                </div>
              </a>
              <span>
                2020.12.7 - 2021.1.8 CODESTATES PRE COURSE 9기 <br />
                2021.1.11 - CODESTATES IMMERSIVE COURSE 26기
              </span>
            </div>
          </div>
        </section>
        <section class="contact">
          <h4>Check the portfolios!</h4>
          <Link to="/video" class="btn">
            Click here
          </Link>
        </section>
      </main>
      <div className="lines_container">
        <div className="lines_grid">
          <div className="blue_line">
            <Link to="/video" id="name_tag">
              <span>Video</span>
            </Link>
          </div>
          <div className="red_line_line">
            <Link to="/performance" id="name_tag">
              <span>Performance</span>
            </Link>
          </div>
          <div className="yellow_line">
            <Link to="/writing" id="name_tag">
              <span>Writing</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
