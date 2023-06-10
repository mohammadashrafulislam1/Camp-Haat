import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    Aos.init();
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
   console.log(classes)
  return (
    <div className="flex flex-wrap justify-center">
      {classes.map((classItem) => (
        <div data-aos="flip-right" data-aos-offset="200"
          key={classItem?._id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4"
        >
          <img
            className="w-full h-48 object-cover"
            src={classItem?.image}
            alt={classItem?.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{classItem?.name}</div>
            <div className="flex items-center mb-4">
              <p className="text-gray-700 text-base">Author: <span className="font-bold">{classItem.instructor}</span></p>
            </div>
            <p className="text-gray-700 text-base">{classItem?.details}</p>
            <Link to={`/courses/${classItem._id}`}><button className="btn btn-primary btn-sm my-5">Details</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
