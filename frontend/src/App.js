import "./App.css";
import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import Home from "./Pages/Home.js";
import Rehome from "./Pages/Rehome.js";
import Contact from "./Pages/Contact.js";
import About from "./Pages/About.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
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
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      ></ToastContainer>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
