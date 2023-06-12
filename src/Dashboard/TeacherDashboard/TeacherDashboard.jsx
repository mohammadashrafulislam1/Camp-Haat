import { Helmet } from "react-helmet";
import useAuth from "../../hock/useAuth";

const TeacherDashboard = () => {
  const {user} = useAuth();
  const orders =;
    return (
      <div>
    <Helmet>
        <title>Camp Haat - Dashboard</title>
    </Helmet>
      <h2 className="text-2xl mt-10">Admin: {user?.displayName} </h2>  \
      <div className="stats shadow w-full my-4">

<div className="stat place-items-center">
<div className="stat-title">Total Users</div>
<div className="stat-value">{}</div>
</div>

<div className="stat place-items-center">
<div className="stat-title">Approved Courses</div>
<div className="stat-value text-secondary">{}</div>
</div>

<div className="stat place-items-center">
<div className="stat-title">Teachers</div>
<div className="stat-value">{}</div>
</div>
<div className="stat place-items-center">
<div className="stat-title">Students</div>
<div className="stat-value">{}</div>
</div>

</div>
    </div>
    );
};

export default TeacherDashboard;