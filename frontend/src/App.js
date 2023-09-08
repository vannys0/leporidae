import "./App.css";
import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import Home from "./Pages/Home.js";
import Rehome from "./Pages/Rehome.js";
import Contact from "./Pages/Contact.js";
import About from "./Pages/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Login />
        </div>
      ),
    },
    {
      path: "/signup",
      element: (
        <div>
          <Signup />
        </div>
      ),
    },
    {
      path: "/home",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
    {
      path: "/rehome",
      element: (
        <div>
          <Rehome />
        </div>
      ),
    },
    {
      path: "/contact",
      element: (
        <div>
          <Contact />
        </div>
      ),
    },
    {
      path: "/about",
      element: (
        <div>
          <About />
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
