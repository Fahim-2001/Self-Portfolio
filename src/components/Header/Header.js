import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/Logo.jpg";

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100   text-xl font-medium py-4">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <div className="block md:hidden dropdown">
          <label tabIndex={0} className="btn m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/home"
                className="flex items-center px-4 -mb-1  dark:border-transparent"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/aboutme"
                className="flex items-center px-4 -mb-1  dark:border-transparent"
              >
                About Me
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/projects"
                className="flex items-center px-4 -mb-1  dark:border-transparent"
              >
                Projects
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/contactme"
                className="flex items-center px-4 -mb-1  dark:border-transparent"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1  dark:border-transparent"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/aboutme"
              className="flex items-center px-4 -mb-1  dark:border-transparent"
            >
              About Me
            </Link>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src={logo} alt="" width={"140px"} className="rounded-xl" />
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              to="/projects"
              className="flex items-center px-4 -mb-1  dark:border-transparent"
            >
              Projects
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/contactme"
              className="flex items-center px-4 -mb-1  dark:border-transparent"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
