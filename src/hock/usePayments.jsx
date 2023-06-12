import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePayments = () => {
  const axiosSecure = useAxiosSecure();
  const [payments, setPayments] = useState([]);
  const {user} = useAuth();
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`http://localhost:5000/payments?email=${user.email}`)
        .then((res) => setPayments(res.data))
        .catch((error) => console.log(error));
    }
  }, [user]);

  return payments;
};

export default usePayments;
