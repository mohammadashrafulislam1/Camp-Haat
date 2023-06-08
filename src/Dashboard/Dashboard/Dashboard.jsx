import { Helmet } from "react-helmet";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    //TO DO:
    // const isAdmin = true;
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
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link to='/dashboard/studentdashboard'><li>Home</li></Link>
            <Link to='/dashboard/allusers'><li>AllUsers</li></Link>
          </ul>
        
        </div>
      </div>
     <div>
     <Outlet></Outlet>
     </div>
      </div>
      </>
    );
};

export default Dashboard;