
import usePayments from "../../../hock/usePayments";

const PaymentHistory = () => {
  const payments = usePayments();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>

      {payments.length === 0 ? (
        <p>No payment history available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Transaction ID</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Items</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id}>
                <td className="py-2 px-4 border-b">{payment.email}</td>
                <td className="py-2 px-4 border-b">{payment.transactionId}</td>
                <td className="py-2 px-4 border-b">${payment.price}</td>
                <td className="py-2 px-4 border-b">{payment.date}</td>
                <td className="py-2 px-4 border-b">{payment.quantity}</td>
                <td className="py-2 px-4 border-b">{payment.status}</td>
                <td className="py-2 px-4 border-b">
                  {payment.itemNames.map((itemName) => (
                    <p key={itemName}>{itemName}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistory;
