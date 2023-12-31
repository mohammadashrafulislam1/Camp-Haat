import { useEffect, useState } from "react";
import useAuth from "../../hock/useAuth";
import useAxiosSecure from "../../hock/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyCourses = () => {
    const {user} = useAuth();
    const axiosSecure =useAxiosSecure();
    const [mycourses, setMycourses] = useState();
    const url = `http://localhost:5000/mycourses?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMycourses(data)
        })
    })
    const handleDelete=id=>{
        console.log(id)
        axiosSecure.delete(`/mycourses/${id}`)
        .then(res => {
            if(res.data.deletedCount >0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Deleted',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="overflow-x-auto">
    <Helmet>
        <title>Dashboard - My Courses</title>
    </Helmet>
  <table className="table border rounded-lg p-10 my-10">
    {/* head */}
    <thead>
      <tr>
        <th>Photo</th>
        <th>Course Name</th>
        <th>Instructor</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {mycourses?.map(mycourse =><tr key={mycourse._id}>
        <td> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={mycourse.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
            <td><div>
              <div className="font-bold">{mycourse.name}</div>
            </div>
        </td>
        <td>{mycourse.instructor}</td>
        <td>{mycourse.price}</td>
        <td>
          <button className="btn btn-xs mr-3">Update</button>
          <button className="btn btn-xs bg-red-600 text-white" onClick={()=>handleDelete(mycourse._id)}>Delete</button>
        </td>
      </tr>)}
      
      </tbody>
  </table>
</div>
    );
};

export default MyCourses;