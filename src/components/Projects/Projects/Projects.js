import React from "react";
import DrTeeth from "../../../assets/Project Images/DrTeeth(1).jpg";
import QuizHunter from "../../../assets/Project Images/QuizHunter(1).jpg";
import CarBazar from "../../../assets/Project Images/CarBazar(1).jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="my-32" id="projects">
      <h1 className="text-center text-5xl font-bold text-green-600">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-5 my-5">
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={DrTeeth}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-600">
                Dr Teeth
              </h3>
              <p className="text-lg dark:text-gray-400">
                A site for Dentist which consists a amazing platform for the
                patients to take services.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/project1" className="btn">
                See Details
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={QuizHunter}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-600">
                Quiz Hunter
              </h3>
              <p className="text-lg dark:text-gray-400">
                A site for the web dev learners where learner's can test their
                Quiz knowledge.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/project2" className="btn">
                See Details
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="space-y-4">
            <div className="space-y-2">
              <img
                src={CarBazar}
                alt=""
                className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-600">
                Car Bazar
              </h3>
              <p className="text-lg dark:text-gray-400">
                Car Bazar is a platform to Buy , Sell reconditioned cars.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/project3" className="btn">
                See Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
