import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,
    {
      method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount){
        Swal.fire(
          'Good job!',
          `${user.name} is now an'Admin'`,
          'success'
        )
      }
    })
  }
  return (
    <div>
      <Helmet>
        <title>Dashboard - All Users</title>
    </Helmet>
      <h1>Total Users: {users?.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user, index) => <tr key={user._id}>
            <td>{index+1}</td>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{user?.name}</div>
                </div>
              </div>
            </td>
            <td>
              {user?.email}
            </td>
            <td>{user?.role}</td>
            <th>
              {user.role === 'admin' ? <button className="btn btn-xs">Admin</button> : <button className="btn btn-primary btn-xs" onClick={() => handleMakeAdmin(user)}>Make Admin</button>}
            </th>
            <th>
              <button className="btn btn-warning btn-xs">Delete</button>
            </th>
          </tr>)
      }
      
      
    </tbody>
    
  </table>
</div>
    </div>
  );
};

export default AllUsers;
