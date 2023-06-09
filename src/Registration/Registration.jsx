import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useAuth from "../hock/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Registration = () => {
  const navigate = useNavigate();
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, user, updateUserProfile, reset } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.url)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            role: data.role,
            photo: data.photoURL,
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
                navigate('/')
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `Successfully created your ${data.role} account`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        });
      });
  };

  console.log(user);

    return (
        <div>
    <Helmet>
        <title>Camp Haat - Registration</title>
    </Helmet>
    <div className="hero min-h-screen">
  <div className="flex md:flex-row my-10 w-3/4 gap-10">
  <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register!</h1>
      <img src="../../assest/81107-welcome.gif" alt="" />
    </div>
    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100 ">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name <span className="text-red-600">*</span></span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" {...register("name", {required:{ value: true, message: "This field is required" }})}/>
          {errors.name && <span className="text-red-600 mt-2">{errors.name.message}</span>}
        </div>
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
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", {required:{ value: true, message: "This field is required" }, minLength: {
            value: 6,
            message: "must be 6 chars"
          },
          validate: (value) => {
            return (
              [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                pattern.test(value)
              ) || "must include lower, upper, number, and special chars"
            );
          },
          })} />
          {errors.password && <span className="text-red-600 mt-2">{errors.password.message}</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password <span className="text-red-600">*</span></span>
          </label>
          <input type="password" placeholder="Confirm Password" className="input input-bordered" {...register("confirm", {required:{ value: true, message: "This field is required" },
        validate: (value) => {
            const { password } = getValues();
            return password === value || "Passwords should match!";
          },})}/>
          {errors.confirm && <span className="text-red-600 mt-2">{errors.confirm.message}</span>}
        </div>
        
        <div className="form-control">
        <label className="label">
            <span className="label-text">What is your role? <span className="text-red-600">*</span></span>
          </label>
        <select className="select select-bordered w-full max-w-xs" {...register("role", {required:{ value: true, message: "This field is required" }})} defaultValue='Your Role!'>
        {errors.role && <span className="text-red-600 mt-2">{errors.role.message}</span>}
        <option>Student</option>
        <option>Instructor</option>
         </select>
         </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL <span className="text-red-600">*</span></span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" {...register("url", {required:{ value: true, message: "This field is required" }})}/>
          {errors.url && <span className="text-red-600 mt-2">{errors.url.message}</span>}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
       <p>Already a member? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>        
        </div>
    );
};

export default Registration;