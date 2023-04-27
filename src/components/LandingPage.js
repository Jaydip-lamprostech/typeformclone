import React, { useEffect, useState } from "react";
import "./landing.css";
import { useRef } from "react";

function LandingPage() {
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);
  const inputRefThree = useRef(null);

  const [showAll, setAll] = useState({ name: "", firstName: "", lastName: "" });

  const refArr = [
    { section: refOne, input: inputRefOne },
    { section: refTwo, input: inputRefTwo },
    { section: refThree, input: inputRefThree },
  ];

  const handleClick = (e) => {
    if (e === 0 && showAll.name === "") {
      alert("Enter Name pls");
    } else if (e === 1 && showAll.firstName === "") {
      alert("Enter first Name pls");
    } else if (e === 2 && showAll.lastName === "") {
      alert("Enter last Name pls");
    } else {
      // console.log(refArr[e + 1].section);
      const test = refArr[e + 1].section;
      // console.log(test);
      test.current?.scrollIntoView({ behavior: "smooth" });
      console.log(test.current?.scrollIntoView({ behavior: "smooth" }));
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
    }, 500);
  };

  const target = (e, num) => {
    // if (e.keyCode === 13) {
    //   if (num === 0 && showAll.name === "") {
    //     alert("Enter Name pls");
    //   } else if (num === 1 && showAll.firstName === "") {
    //     alert("Enter first Name pls");
    //   } else if (num === 2 && showAll.lastName === "") {
    //     alert("Enter first Name pls");
    //   } else {
    //     handleClick(num);
    //   }
    // }

    if (e.keyCode === 13) {
      handleClick(num);
    }
  };

  //
  //   function jump(elmnt, content) {
  //     console.log(elmnt);
  //     document.addEventListener("keyup", function (event) {
  //       if (event.keyCode === 13) {
  //         console.log(elmnt.target.tabIndex);
  //         let t_index = elmnt.target.tabIndex;
  //         if (t_index === 1) {
  //           document.getElementById("secondInput").focus();
  //         } else if (t_index === 2) {
  //           document.getElementById("thirdInput").focus();
  //         }
  //       }
  //     });
  //   }
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
          <section className="f-first" ref={refOne} tabIndex="5">
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
                  <p className="f-p">Hi there! So what's your name?</p>
                  <input
                    className="f-input"
                    id="firstInput"
                    type="text"
                    tabIndex="1"
                    required
                    ref={inputRefOne}
                    placeholder="Type your answer here..."
                    onChange={(e) => {
                      e.target.value = e.target.value.toUpperCase();
                      setAll({ ...showAll, name: e.target.value });
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
          <section id="f-second" className="f-first" ref={refTwo}>
            <div className="f-inside-section">
              <div className="f-form-div">
                <p className="f-p">Enter Your First Name</p>
                <input
                  className="f-input"
                  id="secondInput"
                  type="text"
                  tabIndex="2"
                  required
                  ref={inputRefTwo}
                  onChange={(e) =>
                    setAll({ ...showAll, firstName: e.target.value })
                  }
                  onKeyUp={(e) => {
                    target(e, 1);
                  }}
                />
                <button
                  className="f-next-btn"
                  onClick={() => handleClickPrevious(1)}
                >
                  Previous
                </button>
                <button className="f-next-btn" onClick={() => handleClick(1)}>
                  Next
                </button>
              </div>
            </div>
          </section>
          <section className="f-first" ref={refThree}>
            <div className="f-inside-section">
              <div className="f-form-div">
                <p className="f-p">Enter Your Last Name</p>
                <input
                  className="f-input"
                  id="thirdInput"
                  type="text"
                  tabIndex="3"
                  required
                  ref={inputRefThree}
                  onChange={(e) =>
                    setAll({ ...showAll, lastName: e.target.value })
                  }
                  onKeyUp={(e) => {
                    target(e, 2);
                  }}
                  // onKeyUp={(e) => jump(e, e.tabIndex)}
                />
                <button
                  className="f-next-btn"
                  onClick={() => handleClickPrevious(2)}
                >
                  Previous
                </button>
                <button className="f-next-btn">Next</button>
              </div>
            </div>
          </section>
          <section className="f-first" ref={refThree}>
            <div className="f-inside-section">
              <div className="f-form-div">
                <p className="f-p">Enter Your Last Name</p>
                <input
                  className="f-input"
                  id="thirdInput"
                  type="text"
                  tabIndex="3"
                  required
                  ref={inputRefThree}
                  onChange={(e) =>
                    setAll({ ...showAll, lastName: e.target.value })
                  }
                  onKeyUp={(e) => {
                    target(e, 2);
                  }}
                  // onKeyUp={(e) => jump(e, e.tabIndex)}
                />
                <button
                  className="f-next-btn"
                  onClick={() => handleClickPrevious(2)}
                >
                  Previous
                </button>
                <button className="f-next-btn">Next</button>
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

export default LandingPage;
