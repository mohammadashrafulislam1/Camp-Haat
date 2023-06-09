import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddCourse = () => {
    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {

      }
    return (
        <div className="w-full">
        <Helmet>
            <title>Dashboard - Add Course</title>
        </Helmet>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name <span className="text-red-600">*</span></span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered w-full" {...register("name", {required:{ value: true, message: "This field is required" }})}/>
              {errors.name && <span className="text-red-600 mt-2">{errors.name.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email <span className="text-red-600">*</span></span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered w-full" {...register("email", {required:{ value: true, message: "This field is required" }})} />
              {errors.email && <span className="text-red-600 mt-2">{errors.email.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password <span className="text-red-600">*</span></span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered w-full" {...register("password", {required:{ value: true, message: "This field is required" }, minLength: {
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
              <input type="password" placeholder="Confirm Password" className="input input-bordered w-full" {...register("confirm", {required:{ value: true, message: "This field is required" },
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
              <input type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("url", {required:{ value: true, message: "This field is required" }})}/>
              {errors.url && <span className="text-red-600 mt-2">{errors.url.message}</span>}
            </div>
    
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
           <p>Already a member? <Link to='/login'>Login</Link></p>
          </form>
        </div>
    );
};

export default AddCourse;