import About from "../components/About/About";
import ContactMe from "../components/ContactMe/ContactMe";
import Home from "../components/Home/Home/Home";
import Projects from "../components/Projects/Projects/Projects";
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
    ],
  },
]);

export default routes;
