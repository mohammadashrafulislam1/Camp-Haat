import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    Aos.init();
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const sortedClasses = classes.sort((a, b) => b.enroll - a.enroll);
  const topSixClasses = sortedClasses.slice(0, 6);

  return (
  <div className="flex flex-col justify-center items-center">
    <SectionTitle heading="Popular Classes" subHeading="Explore best sold classes" moto="CLASSES"></SectionTitle>
   <div className="flex flex-wrap justify-center">
      {topSixClasses.map((classItem) => (
        <div
        data-aos="fade-in"
          key={classItem.id}
          className="max-w-xs m-4 p-4 bg-white rounded shadow-md"
        >
          <img
            src={classItem.image}
            alt={classItem.name}
            className="w-[400px] h-40 object-cover rounded"
          />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{classItem.name}</h3>
            <p className="text-gray-600">Enroll: {classItem.enroll}</p>
          </div>
          <Link to={`/courses/${classItem._id}`}><button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded-full">
            Details
          </button></Link>
        </div>
      ))}
    </div>
    <Link to="/classes">
    <button data-aos="slide-up" className="btn btn-primary text-white my-5">MORE COURSES</button></Link>
    </div>
  );
};

export default PopularClasses;
