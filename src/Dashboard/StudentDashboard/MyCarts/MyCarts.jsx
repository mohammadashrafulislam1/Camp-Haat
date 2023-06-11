
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useCart from "../../../hock/useCart";

const MyCarts = () => {
    const [mycarts] =useCart();
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
    <Link to="/dashboard/payment"><button className="btn btn-primary btn-sm">PAY</button></Link>
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
      </tr>)}
      
      </tbody>
  </table>
</div>
    );
};

export default MyCarts;