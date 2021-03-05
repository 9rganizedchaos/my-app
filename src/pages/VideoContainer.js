import "../dist/css/VideoContainer.css";
import React from "react";
import { Link } from "react-router-dom";

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graduationCurrent: "9kb2cBA8_Mo",
      documentaryCurrent: "7z5SyjNxSXE",
      nonDocuCurrent: "Vq_weY11w10",
    };
    this.handleGraduationClick = this.handleGraduationClick.bind(this);
    this.handleDocumentaryClick = this.handleDocumentaryClick.bind(this);
    this.handleNonDocuClick = this.handleNonDocuClick.bind(this);
  }
  handleGraduationClick(video) {
    this.setState({
      graduationCurrent: video,
    });
  }
  handleDocumentaryClick(video) {
    this.setState({
      documentaryCurrent: video,
    });
  }
  handleNonDocuClick(video) {
    this.setState({
      nonDocuCurrent: video,
    });
  }
  render() {
    return (
      <div className="container_video">
        <div className="lines_container_front">
          <div className="lines_grid">
            <div className="white_line">
              <Link to="/" id="name_tag">
                <span>Home</span>
              </Link>
            </div>
          </div>
        </div>
        <main>
          <header>
            <p className="header_description">
              The Graduation Project <br />
              The Final Projects: documentary <br />
              The Final Projects: Non-documentary
            </p>
            <p className="header_china_title">视频</p>
            <div>
              <h1>
                My Video <br /> Works
              </h1>
              <div className="header__photo"></div>
            </div>
          </header>
          <section className="about">
            <h2>The Graduation Project</h2>
            <p align="middle">
              <iframe
                className="video_graduation_player"
                src={`https://www.youtube.com/embed/${this.state.graduationCurrent}`}
                allowFullScreen
                frameBorder="0"
                title="video"
              ></iframe>
            </p>
            <div className="about__columns">
              <div className="about__column">
                <div className="img__wrapper">
                  <img
                    src="https://i.imgur.com/cjGIKnF.png"
                    alt="9kb2cBA8_Mo"
                    onClick={(event) =>
                      this.handleGraduationClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상학과 졸업작품 Non-film농필름/2018 360도 영상 버전
                  <br />
                  영화관이 정말 모든 영상매체를 위한 완벽한 창구인가, 하는
                  물음에서 시작해, 영화관이 제대로 기능할 수 없는 상황을
                  연출하는 것을 목표로 제작된 작품.
                </span>
              </div>
              <div className="about__column">
                <div className="img__wrapper">
                  <img
                    src="https://i.imgur.com/3KzVMSP.png"
                    alt="BZ2G6cJ4dXI"
                    onClick={(event) =>
                      this.handleGraduationClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상학과 졸업작품 Non-film농필름/2018 극장상영 버전
                  <br />
                  360도 카메라로 촬영된 영상을 영화관에서 상영하기 위해 제작된
                  극장상영버전 영상. 360도 영상을 극장에서 상영할 때, 관객들은
                  영상의 한 단면만을 확인할 수밖에 없다. 해당 영상은 360도 버전
                  영상의 단 부분만을 보여준다.
                </span>
              </div>
              <div className="about__column">
                <div className="img__wrapper">
                  <img
                    src="https://i.imgur.com/zJwFoB9.png"
                    alt="YaXnJIp85nY"
                    onClick={(event) =>
                      this.handleGraduationClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상학과 졸업작품 Non-film농필름/2018 GV
                  <br />
                  2018 영상학과 졸업작품 상영회에서, 작품 상영을 마치고 관객과의
                  대화 중 촬영한 영상클립. 왜 360도 카메라로 촬영을 하게
                  되었는가에 대한 간단한 설명.
                </span>
              </div>
            </div>
          </section>

          <section className="about1">
            <h2>The Final Projects: documentary</h2>
            <p align="middle">
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${this.state.documentaryCurrent}`}
                allowFullScreen
                frameBorder="0"
                title="video"
              ></iframe>
            </p>
            <div className="about1__columns">
              <div className="about1__column">
                <div className="img__wrapper">
                  <img
                    alt="bgF2eROsQU4"
                    src="https://i.imgur.com/gwBqgHt.png"
                    onClick={(event) =>
                      this.handleDocumentaryClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 다큐맨터리의이해 기말과제작 Dancer/2018
                  <br />
                  '직업을 주제로 다큐멘터리 제작하기' 기말과제로 제작된 작품.
                  무용수라는 것은 과연 직업일까, 정체성일까... 작품활동만으로
                  돈을 벌 수 없어도 여전히 예술가일 수 있을까. 손지민 무용가의
                  일상을 10분 분량으로 담은 다큐멘터리.
                </span>
              </div>
              <div className="about1__column">
                <div className="img__wrapper">
                  <img
                    alt="7z5SyjNxSXE"
                    src="https://i.imgur.com/z7znVAp.png"
                    onClick={(event) =>
                      this.handleDocumentaryClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 다큐맨터리워크샵 기말과제작 Je ne regrette rien/2017
                  <br />
                  '인물 다큐멘터리 제작하기' 과제로 제작된 30분 분량의 중편
                  다큐멘터리. 숱한 연애 끝에 돌연 결혼을 하고 싶다는 친구.
                  그동안의 애인들과의 추억의 장소를 함께 돌아다니며, 왜 결혼이
                  하고 싶어진 것일까, 생각해본다.
                </span>
              </div>
            </div>
          </section>

          <section className="about2">
            <h2>The Final Projects: Non-documentary</h2>
            <p align="middle">
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${this.state.nonDocuCurrent}`}
                allowFullScreen
                frameBorder="0"
                title="video"
              ></iframe>
            </p>
            <div className="about2__columns">
              <div className="about2__column">
                <div className="img__wrapper">
                  <img
                    alt="Vq_weY11w10"
                    src="https://i.imgur.com/S18tgXb.png"
                    onClick={(event) =>
                      this.handleNonDocuClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상스토리텔링2 독일표현주의 과제작 진표일과비밀의방/2017
                  <br />
                  독일 표현주의 사조의 특성들을 반영해 제작한 짧은 영상.
                  거식증을 앓고 있는 주인공의 내면 심리를 극적인 모습으로 연출.
                </span>
              </div>
              <div className="about2__column">
                <div className="img__wrapper">
                  <img
                    alt="YANWmd9SrPQ"
                    src="https://i.imgur.com/A1yZJy0.png"
                    onClick={(event) =>
                      this.handleNonDocuClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상스토리텔링2 소비에트몽타주 과제작
                  시험에들게하지마시고/2017
                  <br />
                  소비에트 몽타주 기법을 통해 제작한 짧은 영상. 시험을 준비하는
                  주인공의 압박감을 몽타주 기법을 통해 드러낸다.
                </span>
              </div>
              <div className="about2__column">
                <div className="img__wrapper">
                  <img
                    alt="p2Iwo17wbWs"
                    src="https://i.imgur.com/9gScBmq.png"
                    onClick={(event) =>
                      this.handleNonDocuClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상스토리텔링2 누벨바그 과제작 아무의미없음/2017
                  <br />
                  프랑스 누벨바그 사조의 특성들을 따라 연출한 짧은 영상.
                  점프컷과 시 인용, 카메라 응시 등의 특성들을 반영하여 제작.
                </span>
              </div>
              <div className="about2__column">
                <div className="img__wrapper">
                  <img
                    alt="KrRWoGyWYDA"
                    src="https://i.imgur.com/fwsIHDy.png"
                    onClick={(event) =>
                      this.handleNonDocuClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 영상스토리텔링2 세트촬영 과제작 아들아/2017
                  <br />
                  스투디오에서 직접 세트를 짓고 촬영. 중국집 세트를 직접 짓고,
                  1960대 혼분식 장려운동을 주제로 단편영화 제작.
                </span>
              </div>
              <div className="about2__column">
                <div className="img__wrapper">
                  <img
                    alt="S3jNhXYbW6c"
                    src="https://i.imgur.com/SsZY3RH.png"
                    onClick={(event) =>
                      this.handleNonDocuClick(event.target.alt)
                    }
                  />
                </div>
                <span>
                  ▲ 정신분석과영상연출 기말 과제작 A Fantasy in the Mirror/2019
                  <br />
                  라캉의 거울이론을 주제로 실험영상 제작.
                </span>
              </div>
            </div>
          </section>
          <section className="contact">
            <Link to="/performance" className="btn">
              Next Page
            </Link>
          </section>
        </main>
        <div className="lines_container_back">
          <div className="lines_grid">
            <div className="red_line">
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
}

export default VideoContainer;
