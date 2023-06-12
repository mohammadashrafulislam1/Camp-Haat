import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hock/useAuth";
import Swal from "sweetalert2";
import useOrdered from "../../hock/useOrdered";

const Ordered = () => {
  const orders = useOrdered();

  const handleStatusUpdate = (orderId) => {
    axios
      .patch(`http://localhost:5000/ordered/${orderId}`)
      .then((response) => {
        const { data } = response;
        if (data.modifiedCount) {
          Swal.fire(
            'Success!',
            `Status of order ${orderId} is Approved`,
            'success'
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ordered Page</h1>
      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Transaction ID</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Order Date</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Items</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="py-2 px-4 border-b">{order.email}</td>
                <td className="py-2 px-4 border-b">{order.transactionId}</td>
                <td className="py-2 px-4 border-b">${order.price}</td>
                <td className="py-2 px-4 border-b">{order.date}</td>
                <td className="py-2 px-4 border-b">{order.quantity}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">
                  {order.itemNames.map((itemName) => (
                    <p key={itemName}>{itemName}</p>
                  ))}
                </td>
                <td className="py-2 px-4 border-b">
                  {order.status === "Pending" ? (
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                      onClick={() => handleStatusUpdate(order._id, "Approved")}
                    >
                      Approve
                    </button>
                  ) :<button className="btn btn-disabled">Already Approved</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Ordered;
