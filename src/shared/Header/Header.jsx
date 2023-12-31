import { Link } from "react-router-dom";
import useAuth from "../../hock/useAuth";
import useCart from "../../hock/useCart";
import useAdmin from "../../hock/useAdmin";
import useInstructor from "../../hock/useInstructor";

const Header = () => {
    const mycarts = useCart();
    const {user, logOut} = useAuth();
    const handleLogOut =()=>{
        logOut();
    }
    const navItems =<>
     <Link className="mx-5 font-bold" to='/'><li>Home</li></Link>
     <Link className="mx-5 font-bold" to='/instructors'><li>Instructors</li></Link>
     <Link className="mx-5 font-bold" to='/classes'><li>Classes</li></Link>
    </>
     const [isAdmin] = useAdmin();
     const [isTeacher] =useInstructor();
    return (
        <div className="navbar bg-base-100 mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Camp Haat</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end z-10">
  {user? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar indicator tooltip tooltip-bottom"  data-tip={`${user?.displayName}`}>
      <span className="indicator-item badge badge-secondary">{mycarts?.length ||0}</span> 
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to={isAdmin ? '/dashboard/admindashboard' : isTeacher ? '/dashboard/teacherdashboard' : '/dashboard/studentdashboard'}>Dashboard</Link>
        </li>
        <li><Link to="/dashboard/profile">Profile
        </Link></li>
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div> : <Link to="/login"><button className="btn btn-outline btn-secondary">Login</button></Link>}
  </div>
</div>
    );
};

export default Header;