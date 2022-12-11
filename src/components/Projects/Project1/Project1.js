import React from "react";
import DrTeeth2 from "../../../assets/Project Images/DrTeeth(2).jpg";
import DrTeeth3 from "../../../assets/Project Images/DrTeeth(3).jpg";
import DrTeeth4 from "../../../assets/Project Images/DrTeeth(4).jpg";

const Project1 = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-green-600">
        Doctor Teeth
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 my-16">
        <img src={DrTeeth2} alt="" className="rounded-lg shadow-lg" />
        <img src={DrTeeth3} alt="" className="rounded-lg shadow-lg" />
        <img src={DrTeeth4} alt="" className="rounded-lg shadow-lg" />
      </div>
      <div className="mx-5 md:mx-24 text-left text-xl font-medium">
        <ul>
          <li>
            This project is made with ReactJS, Firbase Authentication,
            TailwindCSS, DaisyUI for Frontend and NodeJS,ExpressJS , MongoDB for
            Backend.
          </li>
          <li>This project shows a platform for dental services.</li>
          <li>
            Here customers can easily confirm and suggest services for
            themselves.
          </li>
        </ul>
      </div>
      <div className="my-10 flex justify-center">
        <a
          href="https://dr-teeth.web.app/"
          className="bg-green-600 text-lg text-white font-lg py-3 px-5 rounded-xl"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Project1;
