import { createBrowserRouter } from "react-router-dom";
import Registration from "../Registration/Registration";
import Login from "../Registration/Login";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import StudentDashboard from "../Dashboard/StudentDashboard/StudentDashboard";
import TeacherDashboard from "../Dashboard/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "../Dashboard/AdminDashboard/AdminDashboard";
import AddCourse from "../Dashboard/TeacherDashboard/AddCourse";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
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
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<ErrorPage/>,
        children:[
          // Admin area
            {
              path:'admindashboard',
              element:<AdminDashboard></AdminDashboard>
            },
            {
              path:'allusers',
              element:<AllUsers></AllUsers>
            },
            // Teacher area
            {
              path:'teacherdashboard',
              element:<TeacherDashboard></TeacherDashboard>
            },
            {
              path:'addcourse',
              element:<AddCourse></AddCourse>
            },
            // Student area
            {
                path:'studentdashboard',
                element: <StudentDashboard></StudentDashboard>
            },
            
        ]
    }
  ]);