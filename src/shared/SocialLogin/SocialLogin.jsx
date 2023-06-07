import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hock/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const {googleSignIn} = useAuth();
    const handelGoogleLogin = () =>{
        googleSignIn()
        .then((result)=>{
            const loggedUser = result.user;
            const saveUser = {
                name: loggedUser.displayName,
                email: loggedUser.email,
                role:"Student",
              };
            fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
        })
            .then((res) => res.json())
            .then((res) => {
              console.log(res)
              if (res.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `Successfully created: ${loggedUser.displayName}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate('/')
              }
            });
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