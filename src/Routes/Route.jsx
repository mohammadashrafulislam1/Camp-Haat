import { createBrowserRouter } from "react-router-dom";
import Registration from "../Registration/Registration";
import Login from "../Registration/Login";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <p>404</p>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path:'register',
            element:<Registration></Registration>
        },
        {
            path:'login',
            element:<Login></Login>
        }
      ],
    },
  ]);