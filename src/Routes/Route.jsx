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
import MyCourses from "../Dashboard/MyCourses/MyCourses";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import Details from "../Pages/Classes/Details/Details";
import MyCarts from "../Dashboard/StudentDashboard/MyCarts/MyCarts";
import Payment from "../Dashboard/Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import Ordered from "../Dashboard/TeacherDashboard/Ordered";
import AllCourses from "../Dashboard/AdminDashboard/AllCourses/AllCourses";
import Profile from "../shared/Profile/Profile";

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
        },
        {
          path:'instructors',
          element:<Instructor></Instructor>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        },
        {
          path: 'courses/:id',
          element: <Details />,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        }
        
      ],
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<ErrorPage/>,
        children:[
          // For All
          {
            path: 'profile',
            element:<Profile></Profile>
          },
          // Admin area
            {
              path:'admindashboard',
              element:<AdminDashboard></AdminDashboard>
            },
            {
              path:'allusers',
              element:<AllUsers></AllUsers>
            },
            {
              path: 'allcourses',
              element:<AllCourses></AllCourses>
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
            {
              path:'mycourses',
              element:<MyCourses></MyCourses>
            },
            {
              path:'ordered',
              element:<Ordered></Ordered>
            },
            // Student area
            {
                path:'studentdashboard',
                element: <StudentDashboard></StudentDashboard>
            },
            {
              path:'mycarts',
              element:<MyCarts></MyCarts>
            },
            {
              path:'payment',
              element:<Payment></Payment>
            },
            {
              path:'paymenthistory',
              element:<PaymentHistory></PaymentHistory>
            }
            
        ]
    }
  ]);