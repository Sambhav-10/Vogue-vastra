import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import Contact from './Components/Contact';
import About from './Components/About';
import App from './App';


// const Hole = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hole/>,
//     children: [
//       {
//         path: "/",
//         element: <Body/>,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
// ]);
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
