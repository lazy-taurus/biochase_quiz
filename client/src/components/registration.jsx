import React, { useEffect, useRef } from "react";
import "./registration.css"; // Make sure to import your CSS file
import "./more.css";
import logo4 from "./images/dancing.svg";
import { useNavigate } from "react-router-dom";
const YourComponent = () => {
  const animationElementsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      const windowTopPosition = window.scrollY;
      const windowBottomPosition = windowTopPosition + windowHeight;

      animationElementsRef.current.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = elementTopPosition + elementHeight;

        if (
          elementBottomPosition >= windowTopPosition &&
          elementTopPosition <= windowBottomPosition
        ) {
          element.classList.add("hasSlid1");
        } else {
          element.classList.remove("hasSlid1");
        }
      });
    };

    window.addEventListener("scroll", checkIfInView);
    window.addEventListener("resize", checkIfInView);

    // Initial check when the component mounts
    checkIfInView();

    return () => {
      window.removeEventListener("scroll", checkIfInView);
      window.removeEventListener("resize", checkIfInView);
    };
  }, []);

  return (
    <section className="module content">
      <div className="container padding-enlarge1">
        <div
          className="slide1"
          ref={(el) => animationElementsRef.current.push(el)}
        >
          <section className="rules">
            <div className="rulesll">
              <img src={logo4} className="logo3 " alt="logo" />
            </div>
            <div className="rulesrr rulesrr2">
              <div className="ruleshead">
                Register now and embark on a journey of discovery and triumph.
              </div>

              <div className="rulesbutton">
                <button
                  className="btnrr btnrr1"
                  onClick={() => navigate("/register")}
                >
                  Register Now
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
