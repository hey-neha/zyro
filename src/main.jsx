import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/RouteHandling/Home.jsx";
import Service from "./Components/RouteHandling/Service.jsx";
import About from "./Components/RouteHandling/About.jsx";
import BookNow from "./Components/RouteHandling/BookNow.jsx";
import Contact from "./Components/RouteHandling/Contact.jsx";
// import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/service",
    element: <Service />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/booknow",
    element: <BookNow />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
