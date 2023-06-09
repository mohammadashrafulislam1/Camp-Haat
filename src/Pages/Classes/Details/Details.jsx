import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:5000/courses/${id}`)
        .then((res) => res.json())
        .then((data) => setCourse(data))
        .catch((error) => console.log(error));
    }, [id]);
   console.log(course)
    return (
      <>
        <div className="bg-white rounded-lg shadow-lg p-6  mb-20">
  <div
    className="rounded-lg inset-0 bg-cover bg-center h-[400px]"
    style={{ backgroundImage: `url(${course?.image})` }}
  ></div>
  <div className="mt-10 z-10 bg-gray-100 rounded-lg p-4 ">
    <h2 className="text-2xl font-bold mb-4">{course?.name}</h2>
    <p className="text-gray-700 text-lg mb-4">{course?.details}</p>
    <div className="flex items-center">
      <p className="text-gray-600 text-sm mr-4">Instructor: {course?.instructor}</p>
    </div>
  </div>
    </div>
    <div className="bg-gray-100 mb-10 rounded-lg p-4 text-center">
    <p className="text-gray-600 text-xl mb-2">Available Seats: {course?.seats}</p>
    <p className="text-gray-600 text-xl mb-2">Enrollment: {course?.enrollment}</p>
    <p className="text-gray-600 text-xl">Price: ${course?.price}</p>
    <button className="btn btn-primary w-full mt-10">Enroll</button>
  </div>

</>
    );
};

export default Details;