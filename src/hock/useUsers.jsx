import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();
  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axiosSecure.get('/users');
      setUsers(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isLoading, error, refetch: fetchUsers };
};

export default useUsers;
