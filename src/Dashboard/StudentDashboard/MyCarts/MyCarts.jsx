import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hock/useAxiosSecure";
import useAuth from "../../../hock/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const MyCarts = () => {
    const {user} = useAuth();
    const [axiosSecure] =useAxiosSecure();
    const [mycarts, setMycarts] = useState();
    const url = `http://localhost:5000/mycarts?enrollEmail=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMycarts(data)
        })
    })
    const handleDelete = (id, seats) => {
        console.log(id);
        axiosSecure.delete(`/mycarts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Deleted",
              showConfirmButton: false,
              timer: 1500,
            });
            updateSeats(id, seats);
          }
        });
      };
    
      const updateSeats = (id, seats) => {
        axiosSecure
          .patch(`/courses/${id}`, { seats: seats + 1 })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    const totalPrice = mycarts?.reduce(
        (accumulator, currentCart) => accumulator + currentCart.price,
        0
      );
    return (
        <div className="overflow-x-auto">
    <Helmet>
        <title>Dashboard - My Carts</title>
    </Helmet>
    <SectionTitle heading="All Your added courses"
    subHeading="All Added Courses" moto="Courses"></SectionTitle>
    <div className="flex justify-between">   
    <h3 className="text-2xl font-semibold">Total courses: {mycarts?.length}</h3>
    <h3 className="text-2xl font-semibold">Total price: {totalPrice}</h3>
    </div>
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
      {mycarts?.map(mycart =><tr key={mycart._id}>
        <td> <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={mycart.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div></td>
            <td><div>
              <div className="font-bold">{mycart.name}</div>
            </div>
        </td>
        <td>{mycart.instructor}</td>
        <td>{mycart.price}</td>
        <td>
          <button className="btn btn-xs bg-red-600 text-white" onClick={()=>handleDelete(mycart._id, mycart.seats)}>Delete</button>
        </td>
      </tr>)}
      
      </tbody>
  </table>
</div>
    );
};

export default MyCarts;