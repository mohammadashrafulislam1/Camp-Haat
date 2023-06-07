import useAuth from "../../hock/useAuth";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const handelGoogleLogin = () =>{
        googleSignIn()
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