import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaPlus, FaUsers, FaVideo } from "react-icons/fa";
const Dashboard = () => {
    //TO DO:
    const isAdmin = false;
    const isTeacher =true;
    return (
      <>
      <Helmet>
        <title>Camp Haat - Dashboard</title>
    </Helmet>
       <div className="flex overflow-hidden">
        <div className=" lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          {isAdmin ? 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <Link to='/dashboard/admindashboard' className="btn flex"><FaHome></FaHome><li>Admin Home</li></Link>
          <Link to='/dashboard/allusers' className="btn flex">
           <FaUsers></FaUsers><li>AllUsers</li></Link>
          </ul> 
          :
          isTeacher?
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <Link to='/dashboard/teacherdashboard' className="btn flex"><FaHome></FaHome><li>Teacher Home</li></Link>
            <Link to='/dashboard/mycourses' className="btn flex"><FaVideo></FaVideo><li>My Courses</li></Link>
            <Link to='/dashboard/addcourse' className="btn flex"><FaPlus></FaPlus><li>Add Course</li></Link>
          </ul>
          : 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <Link to='/dashboard/studentdashboard'><li>Student Home</li></Link>
            <Link to='/dashboard/allusers'><li></li></Link>
            
          </ul>}
        
        </div>
      </div>
     <div className="w-1/2 mx-auto">
     <Outlet></Outlet>
     </div>
      </div>
      </>
    );
};

export default Dashboard;