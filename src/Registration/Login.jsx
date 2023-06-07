import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../hock/useAuth";
import { Link } from "react-router-dom";
import SocialLogin from "../shared/SocialLogin/SocialLogin";


const Login = () => {
    const { getValues, register, handleSubmit, watch, formState: { errors } } = useForm();
    const {signIn, user} = useAuth();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
    };
    console.log(user)
    return (
        <div>
    <Helmet>
        <title>Camp Haat - Registration</title>
    </Helmet>
    <div className="hero min-h-screen">
  <div className="flex md:flex-row my-10 w-3/4 gap-10 items-center">
  <div className="text-center lg:text-left">
  <img src="../../assest/42618-welcome.gif" alt="" />
    </div>
    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100 ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email <span className="text-red-600">*</span></span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", {required:{ value: true, message: "This field is required" }})} />
          {errors.email && <span className="text-red-600 mt-2">{errors.email.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password <span className="text-red-600">*</span></span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", {required:{ value: true, message: "This field is required" },
          })} />
          {errors.password && <span className="text-red-600 mt-2">{errors.password.message}</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
       <p>Not a member? <Link to='/register'>Register</Link></p>

       <div className="divider"></div>
       <SocialLogin></SocialLogin>
      </form>
    </div>
  </div>
</div>        
        </div>
    );
};

export default Login;