import { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from './useAuth';

const useOrdered = () => {
    const {user} = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/ordered?email=${user?.email}`
        );
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user]);

  return orders;
};

export default useOrdered;
