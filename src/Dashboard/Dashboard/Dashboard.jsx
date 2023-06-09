import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaHouseUser, FaPlus, FaUsers, FaVideo } from "react-icons/fa";
const Dashboard = () => {
    //TO DO:
    const isAdmin = false;
    const isTeacher =true;
    return (
      <div className="w-full">
      <Helmet>
        <title>Camp Haat - Dashboard</title>
    </Helmet>
       <div className="flex overflow-hidden w-full">
        <div className=" lg:drawer-open fixed w-[18%]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
    {isAdmin ? 
          <ul className="menu p-4  h-full bg-base-200 text-base-content">
          <Link to='/dashboard/admindashboard' className="btn flex"><FaHouseUser></FaHouseUser><li>Admin Home</li></Link>
          <Link to='/dashboard/allusers' className="btn flex">
           <FaUsers></FaUsers><li>AllUsers</li></Link>
           <div className="divider"></div> 
            <Link className="btn flex" to='/'><FaHome></FaHome><li>Home</li></Link>
          </ul> 
          :
          isTeacher?
          <ul className="menu p-4  h-full bg-base-200 text-base-content">
            <Link to='/dashboard/teacherdashboard' className="btn flex"><FaHouseUser></FaHouseUser><li>Teacher Home</li></Link>
            <Link to='/dashboard/mycourses' className="btn flex"><FaVideo></FaVideo><li>My Courses</li></Link>
            <Link to='/dashboard/addcourse' className="btn flex"><FaPlus></FaPlus><li>Add Course</li></Link>
            <div className="divider"></div> 
            <Link className="btn flex" to='/'><FaHome></FaHome><li>Home</li></Link>
         
          </ul>
          : 
          <ul className="menu p-4  h-full bg-base-200 text-base-content">
            <Link to='/dashboard/studentdashboard'><FaHouseUser></FaHouseUser><li>Student Home</li></Link>
            <Link to='/dashboard/allusers'><li></li></Link>
            <div className="divider"></div> 
            <Link className="btn flex" to='/'><FaHome></FaHome><li>Home</li></Link>
          </ul>}
      </div>
      </div>
     <div className="w-[60%] mx-auto">
     <Outlet></Outlet>
     </div>
      </div>
      </div>
    );
};

export default Dashboard;