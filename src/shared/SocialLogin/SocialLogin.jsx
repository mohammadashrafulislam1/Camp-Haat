import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hock/useAuth";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const {googleSignIn} = useAuth();
    const handelGoogleLogin = () =>{
        googleSignIn()
        .then(()=>{
            navigate(from)
        })
    }
    return (
        <div className="mx-auto">
            <button className="btn btn-circle btn-outline text-2xl" onClick={handelGoogleLogin}>
                G
            </button>
        </div>
    );
};

export default SocialLogin;