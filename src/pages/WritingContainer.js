import React from "react";
import { Link } from "react-router-dom";

function WritingContainer() {
  return (
    <div className="container_writing">
      <div className="lines_container">
        <div className="lines_grid">
          <div className="white_line">
            <Link to="/" id="name_tag">
              <span>Home</span>
            </Link>
          </div>
          <div className="blue_line">
            <Link to="/video" id="name_tag">
              <span>Video</span>
            </Link>
          </div>
          <div className="red_line">
            <Link to="/performance" id="name_tag">
              <span>Performance</span>
            </Link>
          </div>
        </div>
      </div>
      <main>
        <header>
          <p className="header_description">
            Graduation Thesis <br />
            Essays
          </p>
          <p className="header_china_title">寫作</p>
          <div>
            <h1>Articles & Essays</h1>
            <div className="header__photo"></div>
          </div>
        </header>
        <section className="about">
          <h2>Graduation Thesis</h2>
          <div className="about__columns">
            <div className="about__column">
              <div className="img__wrapper">
                <a
                  href="https://brunch.co.kr/@tumeo201/11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="https://i.imgur.com/MCo4Epb.png" alt="image1" />
                </a>
              </div>
              <span>
                ▲ 유학동양학과 졸업논문 소수자 인권을 통한 양주사상 해석/2020
                <br />
                인권과 개인의 자유는 현대사회를 구성하는 중요한 가치이다.
                공동체와 사회, 사람 사이의 관계를 중심으로 하는 동아시아철학은
                개인에 대한 존중을 살피기 어렵다는 비판에 직면해있다. 개인의
                자유와 인권 등의 주제를 반영한 ‘인권유학’이라는 새로운 틀이
                요청된다. 유가사상과는 갈등이 있었지만, 동아시아철학사에서
                ‘개인’이라는 주제를 전면에 내세운 최초 사례인 양주 사상을
                살피며, 천하와 국가로부터 독립된 ‘개인’을 다룬 사례를 조명한다.
              </span>
            </div>
          </div>
        </section>

        <section className="about1">
          <h2>Essays</h2>
          <div className="about1__columns">
            <div className="about1__column">
              <div className="img__wrapper">
                <img src="https://i.imgur.com/sxKeXmM.jpg" alt="image1" />
              </div>
              <span>-</span>
            </div>
            <div className="about1__column">
              <div className="img__wrapper">
                <img src="https://i.imgur.com/NWbkRTn.jpg" alt="image1" />
              </div>
              <span>-</span>
            </div>
            <div className="about1__column">
              <div className="img__wrapper">
                <img src="https://i.imgur.com/b8qTWSq.jpg" alt="image1" />
              </div>
              <span>-</span>
            </div>
            <div className="about1__column">
              <div className="img__wrapper">
                <img src="https://i.imgur.com/QAyCb8o.jpg" alt="image1" />
              </div>
              <span>-</span>
            </div>
            <div className="about1__column">
              <div className="img__wrapper">
                <img src="https://i.imgur.com/xtxVLLW.jpg" alt="image1" />
              </div>
              <span>-</span>
            </div>
            <div className="about1__column">
              <div className="img__wrapper">
                <img src="https://i.imgur.com/Ro6z9sh.jpg" alt="image1" />
              </div>
              <span>-</span>
            </div>
          </div>
        </section>

        <section className="contact">
          <Link to="/" className="btn">
            Home
          </Link>
        </section>
      </main>
    </div>
  );
}

export default WritingContainer;
