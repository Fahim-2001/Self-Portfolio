import React from "react";
import QuizHunter2 from "../../../assets/Project Images/QuizHunter(2).jpg";
import QuizHunter3 from "../../../assets/Project Images/QuizHunter(3).jpg";
import QuizHunter4 from "../../../assets/Project Images/QuizHunter(4).jpg";

const Project2 = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-green-600">
        QuizHunter
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 my-16">
        <img src={QuizHunter2} alt="" className="rounded-lg shadow-lg" />
        <img src={QuizHunter3} alt="" className="rounded-lg shadow-lg" />
        <img src={QuizHunter4} alt="" className="rounded-lg shadow-lg" />
      </div>
      <div className="mx-5 md:mx-24 text-left text-xl font-medium">
        <ul>
          <li>This project is made with ReactJS, TailwindCSS, MambaUI</li>
          <li>This project is a Quiz test small application.</li>
          <li>
            Here learners test their acquired knowledge of React, CSS,
            JavaScript and Git.
          </li>
        </ul>
      </div>
      <div className="my-10 flex justify-center">
        <a
          href="https://statuesque-tapioca-96dd4e.netlify.app/"
          className="bg-green-600 text-lg text-white font-lg py-3 px-5 rounded-xl"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Project2;
