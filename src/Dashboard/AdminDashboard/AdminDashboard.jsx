import useAuth from "../../hock/useAuth";
import useCourses from "../../hock/useCourses";
import useUsers from "../../hock/useUsers";

const AdminDashboard = () => {
    const {users} = useUsers();
    const {user} = useAuth();
    const courses = useCourses();
    const teachers = users.filter(user => user.role === 'Instructor');
    const students = users.filter(user => user.role === 'Student');
    return (
        <div>
          <h2 className="text-2xl mt-10">Admin: {user?.displayName} </h2>  \
          <div className="stats shadow w-full my-4">
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Users</div>
    <div className="stat-value">{users?.length}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Approved Courses</div>
    <div className="stat-value text-secondary">{courses?.length}</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Teachers</div>
    <div className="stat-value">{teachers?.length}</div>
  </div>
  <div className="stat place-items-center">
    <div className="stat-title">Students</div>
    <div className="stat-value">{students?.length}</div>
  </div>
  
</div>
        </div>
    );
};

export default AdminDashboard;