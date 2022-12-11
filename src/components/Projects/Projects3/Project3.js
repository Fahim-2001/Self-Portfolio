import React from "react";
import CarBazar2 from "../../../assets/Project Images/CarBazar(2).jpg";
import CarBazar3 from "../../../assets/Project Images/CarBazar(3).jpg";
import CarBazar4 from "../../../assets/Project Images/CarBazar(4).jpg";

const Project3 = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-green-600">
        Car Bazar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 my-16">
        <img src={CarBazar2} alt="" className="rounded-lg shadow-lg" />
        <img src={CarBazar3} alt="" className="rounded-lg shadow-lg" />
        <img src={CarBazar4} alt="" className="rounded-lg shadow-lg" />
      </div>
      <div className="mx-5 md:mx-24 text-left text-xl font-medium">
        <ul>
          <li>
            This project is made with ReactJS, TailwindCSS, MambaUI, Firebase
            Authentication and NodeJS, ExpressJS, mongoDB. This is a full stack
            site.
          </li>
          <li>
            This project is for selling and buying reconditioned or old cars.
          </li>
          <li>
            In this site there is a Dashboard where an Admin can check all the
            user. He/She can remove users from the user list or can make anyone
            admin.
          </li>
        </ul>
      </div>
      <div className="my-10 flex justify-center">
        <a
          href="https://resale-shop-b1967.web.app/"
          className="bg-green-600 text-lg text-white font-lg py-3 px-5 rounded-xl"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Project3;
