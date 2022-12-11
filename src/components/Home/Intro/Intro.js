import React from "react";
import TypewriterComponent from "typewriter-effect";
import Profile from "../../../assets/Images/Fahim_1.jpg";
const Intro = () => {
  return (
    <div>
      <div className="block lg:flex justify-between items-center mx-56">
        <div>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<h1 style="color:#242624; font-size:50px; font-weight:800;">Hello everyone,</h1>'
                )
                .pauseFor(1000)
                .start()
                .typeString(
                  '<h1 style="color:#10a103; font-size:50px; font-weight:800;">I am Fahim.</h1>'
                )
                .pauseFor(1000)
                .start()
                .typeString(
                  '<h1 style="color:#242624; font-size:50px; font-weight:800;">A Web Developer</h1>'
                )
                .pauseFor(700)
                .deleteChars(15)
                .start()
                .typeString(
                  '<h1 style="color:#242624; font-size:50px; font-weight:800;">A React Developer and</h1>'
                )
                .pauseFor(1000)
                .deleteChars(21)
                .start()
                .typeString(
                  '<h1 style="color:#242624; font-size:50px; font-weight:800;">A MERN Developer.</h1>'
                )
                .stop();
            }}
          />
        </div>
        <div className="flex justify-center my-5">
          <img src={Profile} alt="" className="photo" />
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <a
          href="https://drive.google.com/file/d/10Zi2RxiHhMh0McOLic1lX8scMEEpjTKc/view?usp=sharing"
          className="btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Intro;
