import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
// import "./App.css";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
