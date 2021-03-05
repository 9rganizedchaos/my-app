import React from "react";
import { Link } from "react-router-dom";

class PerformanceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modernCurrent: "hd45hxQbIhc",
      urbanCurrent: "RvSz0BSpQ3c",
    };
    this.handleModernClick = this.handleModernClick.bind(this);
    this.handleUrbanClick = this.handleUrbanClick.bind(this);
  }
  handleModernClick(video) {
    this.setState({
      modernCurrent: video,
    });
  }
  handleUrbanClick(video) {
    this.setState({
      urbanCurrent: video,
    });
  }
  render() {
    return (
      <div className="container_performance">
        <div className="lines_container_front">
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
          </div>
        </div>
        <main>
          <header>
            <p className="header_description">
              Modern Dance <br />
              Dance Critic <br />
              Urban Dance
            </p>
            <p className="header_china_title">表演</p>
            <div>
              <h1>
                My Performances <br />
              </h1>
              <div className="header__photo"></div>
            </div>
          </header>
          <section className="about">
            <h2>Modern Dance</h2>
            <p align="middle">
              <iframe
                className="performance_modern_player"
                src={`https://www.youtube.com/embed/${this.state.modernCurrent}`}
                allowFullScreen
                frameBorder="0"
                title="video"
              ></iframe>
            </p>
            <div className="about__columns">
              <div className="about__column">
                <div className="img__wrapper">
                  <img
                    src="https://i.imgur.com/VIT0UZf.png"
                    alt="hd45hxQbIhc"
                    onClick={(event) =>
                      this.handleModernClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 무용학과 졸업작품 Seul-seul쓸쓸/2019
                  <br />
                  '우울'을 주제로 4분 가량의 무용작품 안무 및 공연. 소품과
                  조명을 활용해 무대에서 영상 및 연극 연출을 시도.
                </span>
              </div>
              <div className="about__column">
                <div className="img__wrapper">
                  <img
                    alt="1JGvVgJRuHM"
                    src="https://i.imgur.com/XBQUgFF.png"
                    onClick={(event) =>
                      this.handleModernClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 현대무용사 과제작 hommage to loie fuller/2019
                  <br />
                  '현대무용의 창시자는 누구인가'라는 소논문의 확장으로 제작된
                  과제 영상. 로이 풀러를 현대무용의 창시자로 조명하고,
                  로이풀러의 작품을 현대적으로 재해석한다. 타 장르, 신기술을
                  적극적으로 작품에 녹여낸 로이풀러의 특징을 반영해 제작.
                </span>
              </div>
              <div className="about__column">
                <div className="img__wrapper">
                  <img
                    alt="SudrPEnpANk"
                    src="https://i.imgur.com/Bqvdjw5.png"
                    onClick={(event) =>
                      this.handleModernClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 문화예술캡스톤디자인 기말과제작 맥다방 움직임퍼포먼스/2019
                  <br />
                  예술대학 통합 교과 문화예술캡스톤디자인. 디자인과와 무용과의
                  협업으로 제작. 종로구를 주제로 한 전시를 기획하고, 전시의
                  일부로 움직임퍼포먼스를 선보인다.
                </span>
              </div>
            </div>
          </section>

          <section className="about1">
            <h2>Dance Critic</h2>
            <div className="about1__columns">
              <div className="about1__column">
                <div className="img__wrapper">
                  <a
                    href="https://brunch.co.kr/@tumeo201/3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="https://i.imgur.com/rw3FcVn.png" alt="image1" />
                  </a>
                </div>
                <span>
                  ▲ 발레사 기말과제 소논문 La premiere Revolution du Ballet
                  <br />장 조르주 노베르를 '무용역사의 최초의 개혁'의 사례로
                  조명한다. 궁정발레에서 어떻게 발레의 근대를 열게 되었는지,
                  그가 주장한 팬터마임은 무엇이었는지와 한계는 무엇이었는지
                  탐구.
                </span>
              </div>
              <div className="about1__column">
                <div className="img__wrapper">
                  <a
                    href="https://brunch.co.kr/@tumeo201/2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="https://i.imgur.com/vtRJHyT.png" alt="image1" />
                  </a>
                </div>
                <span>
                  ▲ 무용음악 기말과제 소논문 The Power of Vulnerabilty
                  <br /> 연출된 상황을 통해 작품을 구성하는 티노 세갈에 대한
                  소논문. 유형의 오브제가 아니라 말, 행동, 움직임을 통해 상황을
                  연출하는 티노 세갈의 작품과 휘발성이 강한 무용예술을 연관지어
                  탐구.
                </span>
              </div>
              <div className="about1__column">
                <div className="img__wrapper">
                  <a
                    href="https://brunch.co.kr/@tumeo201/4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="https://i.imgur.com/tfZgXAy.png" alt="image1" />
                  </a>
                </div>
                <span>
                  ▲ 무용문헌연구 기말과제 소논문 농,농당스,누벨코레오그래피
                  <br /> 안드레 레페키의 저서 '코레오그래피란 무엇인가'의 서론과
                  결론을 동시대의 작품들과 연관지어 독해.
                </span>
              </div>
              <div className="about1__column">
                <div className="img__wrapper">
                  <a
                    href="https://brunch.co.kr/@tumeo201/1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="https://i.imgur.com/znPJ7OF.png" alt="image1" />
                  </a>
                </div>
                <span>
                  ▲ 현대무용사 기말과제 소논문 로이풀러를 통해 주명하는
                  현대무용의 새로운 가능성
                  <br /> 이사도라 던컨이 아니라 로이 풀러를 현대무용의 창시자로
                  조명. 로이 풀러의 작품을 현대무용의 시작으로 기념한다면, 과연
                  동시대의 무용이 지향해야 할 가치는 무엇인가 탐구한다.
                </span>
              </div>
            </div>
          </section>

          <section class="about2">
            <h2>Urban Dance</h2>
            <p align="middle">
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${this.state.urbanCurrent}`}
                allowFullScreen
                frameBorder="0"
                title="video"
              ></iframe>
            </p>
            <div class="about2__columns">
              <div class="about2__column">
                <div class="img__wrapper">
                  <img
                    alt="RvSz0BSpQ3c"
                    src="https://i.imgur.com/XSQDB13.png"
                    onClick={(event) => this.handleUrbanClick(event.target.alt)}
                  />
                </div>
                <span>▲ The man/Choreo by Kyle Hanagami(Cover)</span>
              </div>
              <div class="about2__column">
                <div class="img__wrapper">
                  <img
                    alt="ikK127FlNJ4"
                    src="https://i.imgur.com/FVAWcAl.png"
                    onClick={(event) => this.handleUrbanClick(event.target.alt)}
                  />
                </div>
                <span>▲ Dont Call Me Up/ Original Choreography</span>
              </div>
              <div class="about2__column">
                <div class="img__wrapper">
                  <img
                    alt="5R9Zmn6t8e8"
                    src="https://i.imgur.com/hAwfNvL.png"
                    onClick={(event) => this.handleUrbanClick(event.target.alt)}
                  />
                </div>
                <span>▲ 7rings/Choreo by Kyle Hanagami(Cover)</span>
              </div>
              <div class="about2__column">
                <div class="img__wrapper">
                  <img
                    alt="E0S4dhaXgrE"
                    src="https://i.imgur.com/1IRLUU3.png"
                    onClick={(event) => this.handleUrbanClick(event.target.alt)}
                  />
                </div>
                <span>▲ Money - Cardi B / Gosh Choreography</span>
              </div>
            </div>
          </section>

          <section class="contact">
            <Link to="/writing" class="btn">
              Next Page
            </Link>
          </section>
        </main>
        <div className="lines_container_back">
          <div className="lines_grid">
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
}

export default PerformanceContainer;
