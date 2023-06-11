import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCart = ()=>{
    const { user } = useAuth();
    const [mycarts, setMycarts] = useState();
    const url = `http://localhost:5000/mycarts?enrollEmail=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setMycarts(data)
        })
    })
    return [mycarts]
}
export default useCart;