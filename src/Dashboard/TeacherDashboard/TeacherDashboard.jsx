import { Helmet } from "react-helmet";
import useAuth from "../../hock/useAuth";
import useOrdered from "../../hock/useOrdered";

const TeacherDashboard = () => {
  const { user } = useAuth();
  const orders = useOrdered();
  const prices = orders.map(order => order.price).filter(price => price); // Extract and filter prices
  const totalPrice = prices.reduce((total, price) => total + price, 0); 

  console.log(orders);

  return (
    <div>
      <Helmet>
        <title>Camp Haat - Dashboard</title>
      </Helmet>
      <h2 className="text-2xl mt-10">Admin: {user?.displayName} </h2>
      <div className="stats shadow w-full my-4">
        <div className="stat place-items-center">
          <div className="stat-title">Total Orders</div>
          <div className="stat-value">{orders.length}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Total Earning</div>
          <div className="stat-value text-secondary">{totalPrice}</div>
        </div>

      </div>
    </div>
  );
};

export default TeacherDashboard;
