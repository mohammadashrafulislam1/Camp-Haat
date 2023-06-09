import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hock/useAuth";

 const imgHostingToken =import.meta.env.VITE_Img_Upload_Token;
const AddCourse = () => {
    const imgHostingUrl =`https://api.imgbb.com/1/upload?key=${imgHostingToken}`;
    const {user} = useAuth();
    const {
        getValues,
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(imgHostingUrl, {
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
        if(imgResponse.success){
            const imgUrl = imgResponse.data.display_url;
            const {name, price, details, seats} = data;
            const courseItem ={name, price: parseFloat(price), details, seats, image: imgUrl}
            console.log(courseItem)
        }
        })
       console.log(data)
      }
    return (
        <div className="w-full border p-10 my-10 rounded-lg text-center">
        <Helmet>
            <title>Dashboard - Add Course</title>
        </Helmet>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-bold">Add A Course</h1>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Course Name <span className="text-red-600">*</span></span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered w-full" {...register("name", {required:{ value: true, message: "This field is required" }})}/>
              {errors.name && <span className="text-red-600 mt-2">{errors.name.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Name<span className="text-red-600">*</span></span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered w-full" readOnly defaultValue={user?.displayName}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email<span className="text-red-600">*</span></span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered w-full" readOnly defaultValue={user?.email}/>
            </div>
        <div className="flex gap-10">
        <div className="form-control">
              <label className="label">
                <span className="label-text">Available seats<span className="text-red-600">*</span></span>
              </label>
              <input type="number" placeholder="Available seats" className="input input-bordered w-full" {...register("seats", {required:{ value: true, message: "This field is required" }})} />
              {errors.seats && <span className="text-red-600 mt-2">{errors.seats.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price<span className="text-red-600">*</span></span>
              </label>
              <input type="number" placeholder="Price" className="input input-bordered w-full" {...register("price", {required:{ value: true, message: "This field is required" }})}/>
              {errors.price && <span className="text-red-600 mt-2">{errors.price.message}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Add a Photo<span className="text-red-600">*</span></span>
              </label>
              <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" {...register("image", {required:{ value: true, message: "This field is required" }})}/>
              {errors.image && <span className="text-red-600 mt-2">{errors.image.message}</span>}
            </div>
        </div>
        <div className="form-control">
              <label className="label">
                <span className="label-text">Details<span className="text-red-600">*</span></span>
              </label>
              <textarea className="textarea textarea-bordered h-[200px]" placeholder="Details" {...register("details", {required:{ value: true, message: "This field is required" }})}></textarea>
              {errors.details && <span className="text-red-600 mt-2">{errors.details.message}</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Add a course</button>
            </div>
          </form>
        </div>
    );
};

export default AddCourse;