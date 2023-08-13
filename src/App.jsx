import './App.css'
import './scss/main.scss'

//render page views
import AppLayout from './UI/AppLayout';

import Home from './Views/Home.jsx';
// import About from './Views/About.jsx';
import Car from './Views/Car.jsx';
import Contact from './Views/Contact.jsx';

//React router
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/#about",
        // element: <About />,
      },
      {
        path: "/car",
        element: <Car />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
