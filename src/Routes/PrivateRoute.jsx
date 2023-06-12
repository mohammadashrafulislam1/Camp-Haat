import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hock/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loader} = useAuth;
    const location = useLocation();
    console.log(location)
    
    if(loader){
        return <div>Loading..</div>
    }
    if(user){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace>{children}</Navigate>
    );
};

export default PrivateRoute;