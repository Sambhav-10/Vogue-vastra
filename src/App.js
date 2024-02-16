import "./App.css";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Hole = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hole />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
