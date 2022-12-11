import About from "../components/About/About";
import ContactMe from "../components/ContactMe/ContactMe";
import Home from "../components/Home/Home/Home";
import Project1 from "../components/Projects/Project1/Project1";
import Project2 from "../components/Projects/Project2/Project2";
import Projects from "../components/Projects/Projects/Projects";
import Project3 from "../components/Projects/Projects3/Project3";
import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/aboutme",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contactme",
        element: <ContactMe></ContactMe>,
      },
      {
        path: "/project1",
        element: <Project1></Project1>,
      },
      {
        path: "/project2",
        element: <Project2></Project2>,
      },
      {
        path: "/project3",
        element: <Project3></Project3>,
      },
    ],
  },
]);

export default routes;
