import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const token = localStorage.getItem('access-token');
  const [mycarts, setMycarts] = useState([]);

  const url = `http://localhost:5000/mycarts?enrollEmail=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      headers: { authorization: `bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMycarts(data);
      });
  }, [url, token]);

  return mycarts;
};

export default useCart;
