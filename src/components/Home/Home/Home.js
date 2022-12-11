import React from "react";
import About from "../../About/About";
import ContactMe from "../../ContactMe/ContactMe";
import Projects from "../../Projects/Projects/Projects";
import Intro from "../Intro/Intro";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
