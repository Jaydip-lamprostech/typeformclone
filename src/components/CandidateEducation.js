import React, { useEffect, useState } from "react";

import "react-phone-input-2/lib/style.css";
import "./landing.css";
import { useRef } from "react";

function CandidateEducation() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSix = useRef(null);
  const refSeven = useRef(null);

  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);
  const inputRefFour = useRef(null);
  const inputRefFive = useRef(null);
  const inputRefSix = useRef(null);
  const inputRefSeven = useRef(null);

  const [showAll, setAll] = useState({
    iname: "",
    degree: "",
    fos: "",
    sdate: "",
    edate: "",
    grade: "",
    edesc: "",
  });

  const refArr = [
    { section: refOne, input: inputRefOne },
    { section: refTwo, input: inputRefTwo },
    { section: refThree, input: inputRefThree },
    { section: refFour, input: inputRefFour },
    { section: refFive, input: inputRefFive },
    { section: refSix, input: inputRefSix },
    { section: refSeven, input: inputRefSeven },
  ];

  const handleClick = (e) => {
    if (e === 0 && showAll.iname === "") {
      alert("Enter Name pls");
    } else if (e === 1 && showAll.degree === "") {
      alert("Enter degree pls");
    } else if (e === 2 && showAll.fos === "") {
      alert("Enter Field of Study pls");
    } else if (e === 3 && showAll.sdate === "") {
      alert("Select Start date of your degree pls");
    } else if (e === 4 && showAll.edate === "") {
      alert("Select End date of your degree pls");
    } else if (e === 5 && showAll.grade === "") {
      alert("Enter Grade pls");
    } else {
      // console.log(refArr[e + 1].section);
      const test = refArr[e + 1].section;
      // console.log(test);
      test.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const inputFocus = refArr[e + 1].input;
        inputFocus.current.focus();
      }, 500);
    }
  };

  const handleClickPrevious = (e) => {
    // console.log(refArr[e - 1].section);
    const test = refArr[e - 1].section;
    // console.log(test);
    test.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const inputFocus = refArr[e - 1].input;
      inputFocus.current.focus();
      console.log(inputFocus.current.focus());
    }, 500);
  };

  const target = (e, num) => {
    if (e.keyCode === 13) {
      handleClick(num);
    }
  };

  useEffect(() => {
    inputRefOne.current.focus();
  }, []);

  useEffect(() => {
    console.log(showAll);
  }, [showAll]);

  return (
    <>
      <section className="f-background">
        <section className="f-container">
          {/* *********************************************************** */}
          {/* 1st input field */}

          <section className="f-first" ref={refOne}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">1</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Enter Institue Name</p>
                  <input
                    className="f-input"
                    id="firstInput"
                    type="text"
                    tabIndex="1"
                    required
                    ref={inputRefOne}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      setAll({ ...showAll, iname: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 0);
                    }}
                  />
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(0)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 2nd input field */}

          <section className="f-first" ref={refTwo}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">2</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Enter Degree</p>
                  <input
                    className="f-input"
                    id="firstInput"
                    type="text"
                    tabIndex="1"
                    required
                    ref={inputRefTwo}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      setAll({ ...showAll, degree: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 1);
                    }}
                  />
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(1)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(1)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 3rd input field */}

          <section className="f-first" ref={refThree}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">3</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Enter Field of Study</p>
                  <input
                    className="f-input"
                    id="firstInput"
                    type="text"
                    tabIndex="1"
                    required
                    ref={inputRefThree}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      setAll({ ...showAll, fos: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 2);
                    }}
                  />
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(2)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(2)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 4th input field */}

          <section className="f-first" ref={refFour}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">4</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Select Start Date</p>
                  <input
                    className="f-input"
                    id="firstInput"
                    type="date"
                    required
                    ref={inputRefFour}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      setAll({ ...showAll, sdate: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 3);
                    }}
                  />

                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(3)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(3)}
                    >
                      <span>OK</span>
                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 5th input field */}

          <section className="f-first" ref={refFive}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">5</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Select End Date</p>

                  <input
                    className="f-input"
                    id="firstInput"
                    type="date"
                    required
                    ref={inputRefFive}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      setAll({ ...showAll, edate: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 4);
                    }}
                  />

                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(4)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(4)}
                    >
                      <span>NEXT</span>

                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          {/* 6th input field */}

          <section className="f-first" ref={refSix}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">6</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Enter Grade</p>

                  <input
                    className="f-input"
                    id="firstInput"
                    type="text"
                    required
                    ref={inputRefSix}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      setAll({ ...showAll, grade: e.target.value });
                    }}
                    onKeyUp={(e) => {
                      target(e, 5);
                    }}
                  />

                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(5)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(5)}
                    >
                      <span>NEXT</span>

                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}

          {/* 7th input field */}

          <section className="f-first" ref={refSeven}>
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">7</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Education Description</p>

                  <textarea
                    className="f-textarea"
                    name=""
                    id=""
                    placeholder="Type your answer here..."
                    ref={inputRefSeven}
                    onChange={(e) =>
                      setAll({ ...showAll, edesc: e.target.value })
                    }
                    onKeyUp={(e) => {
                      e.preventDefault();
                      target(e, 6);
                    }}
                    cols="30"
                    rows="10"
                  />
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(6)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(6)}
                    >
                      <span>NEXT</span>

                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* *********************************************************** */}
          <section className="f-first">
            <div className="f-outside-div">
              <div className="f-inside-section">
                <div className="f-left">
                  <span className="f-num">8</span>
                  <svg
                    className="f-right-ar"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 31.143 31.143"
                  >
                    <g>
                      <g id="c100_arrow">
                        <path
                          d="M0,15.571c0.001,1.702,1.383,3.081,3.085,3.083l17.528-0.002l-4.738,4.739c-1.283,1.284-1.349,3.301-0.145,4.507
			c1.205,1.201,3.222,1.138,4.507-0.146l9.896-9.898c1.287-1.283,1.352-3.301,0.146-4.506c-0.033-0.029-0.068-0.051-0.1-0.08
			c-0.041-0.043-0.07-0.094-0.113-0.139l-9.764-9.762c-1.268-1.266-3.27-1.316-4.474-0.111c-1.205,1.205-1.153,3.208,0.111,4.476
			l4.755,4.754H3.085C1.381,12.485,0,13.865,0,15.571z"
                        />
                      </g>
                      <g id="Capa_1_46_"></g>
                    </g>
                  </svg>
                </div>
                <div className="f-form-div">
                  <p className="f-p">Education Details</p>
                  <div className="f-ed-box">
                    <div>Institute Name : {showAll.iname}</div>
                    <div>Degree: {showAll.degree}</div>
                    <div>
                      <span>Field of Study: {showAll.fos}</span>
                      <span>Grade: {showAll.grade}</span>
                    </div>
                    <div>
                      <span>Start Date: {showAll.sdate}</span>
                      <span>End Date: {showAll.edate}</span>
                    </div>
                    <div>Description: {showAll.edesc}</div>
                  </div>
                  {/* <textarea
                    className="f-textarea"
                    name=""
                    id=""
                    placeholder="Type your answer here..."
                    ref={inputRefSeven}
                    onChange={
                      (e) => console.log(e.target.value)
                      // setAll({ ...showAll, edesc: e.target.value })
                    }
                    // onKeyUp={(e) => {
                    //   e.preventDefault();
                    //   target(e, 6);
                    // }}
                    cols="30"
                    rows="10"
                  /> */}
                  <div className="f-btn-flex">
                    <button
                      className="f-next-btn"
                      onClick={() => handleClickPrevious(6)}
                    >
                      <svg
                        className="f-back-ar"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 492 492"
                      >
                        <g>
                          <g>
                            <path
                              d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
			c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
			L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
			c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
			c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
			C492,219.198,479.172,207.418,464.344,207.418z"
                            />
                          </g>
                        </g>
                      </svg>

                      <span>GO BACK</span>
                    </button>
                    <button
                      className="f-next-btn"
                      onClick={() => handleClick(6)}
                    >
                      <span>NEXT</span>

                      <svg
                        className="f-correct-ar"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 240.608 240.608"
                      >
                        <path d="M208.789,29.972l31.819,31.82L91.763,210.637L0,118.876l31.819-31.82l59.944,59.942L208.789,29.972z" />
                      </svg>
                    </button>
                    <span className="f-press-enter">
                      press <span className="f-enter">Enter ↵</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* <button
          className="f-next-try-btn"
          onClick={() => console.log(document.activeElement)}
        >
          trying
        </button> */}
      </section>
    </>
  );
}

export default CandidateEducation;
