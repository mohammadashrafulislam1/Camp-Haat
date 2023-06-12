import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";
import { FaBlog, FaBook, FaCartPlus, FaHome, FaHouseUser, FaLaugh, FaMoneyBill, FaPersonBooth, FaPlus, FaUsers, FaVideo } from "react-icons/fa";
import useAdmin from "../../hock/useAdmin";
import useInstructor from "../../hock/useInstructor";
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isTeacher] =useInstructor();
    return (
      <div className="w-full">
      <Helmet>
        <title>Camp Haat - Dashboard</title>
    </Helmet>
       <div className="flex overflow-hidden w-full">
        <div className=" lg:drawer-open fixed w-[20%]">
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
           <Link to='/dashboard/allcourses' className="btn flex">
           <FaBlog></FaBlog><li>All Courses</li></Link>

           <div className="divider"></div> 
            <Link className="btn flex" to='/'><FaHome></FaHome><li>Home</li></Link>
          <Link to="/dashboard/profile" className="btn flex"><FaLaugh></FaLaugh><li>Profile</li>
        </Link>
          </ul> 
          :
          isTeacher?
          <ul className="menu p-4  h-full bg-base-200 text-base-content">
            <Link to='/dashboard/teacherdashboard' className="btn flex"><FaHouseUser></FaHouseUser><li>Teacher Home</li></Link>
            <Link to='/dashboard/mycourses' className="btn flex"><FaVideo></FaVideo><li>My Courses</li></Link>
            <Link to='/dashboard/addcourse' className="btn flex"><FaPlus></FaPlus><li>Add Course</li></Link>
            <Link to='/dashboard/ordered' className="btn flex"><FaBook></FaBook><li>Ordered</li></Link>
            <div className="divider"></div> 
            <Link className="btn flex" to='/'><FaHome></FaHome><li>Home</li></Link>
            <Link to="/dashboard/profile" className="btn flex"><FaLaugh></FaLaugh><li>Profile</li>
        </Link>
          </ul>
          : 
          <ul className="menu p-4  h-full bg-base-200 text-base-content">
            <Link to='/dashboard/studentdashboard' className="btn flex"><FaHouseUser></FaHouseUser><li>Student Home</li></Link>

            <Link to='/dashboard/mycarts' className="btn flex"><FaCartPlus></FaCartPlus><li>My Cart</li></Link>

            <Link to='/dashboard/paymenthistory' className="btn flex"><FaMoneyBill></FaMoneyBill><li>Payment History</li></Link>
            <div className="divider"></div> 
            <Link className="btn flex" to='/'><FaHome></FaHome><li>Home</li></Link>
            <Link to="/dashboard/profile" className="btn flex"><FaLaugh></FaLaugh><li>Profile</li>
        </Link>
          </ul>}
      </div>
      </div>
     <div className="w-[80%] md:ms-[300px] me-[100px]">
     <Outlet></Outlet>
     </div>
      </div>
      </div>
    );
};

export default Dashboard;