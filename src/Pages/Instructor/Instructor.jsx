import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Instructor = () => {
    const [instructors, setInstructors] =useState()
    useEffect(() => {
        fetch('http://localhost:5000/users')
          .then(res => res.json())
          .then(data => {
            const instructorData = data.filter(item => item.role === "Instructor");
            setInstructors(instructorData);
          });
      }, []);
    console.log(instructors)
    return (
        <div className="grid grid-cols-3 gap-10 my-20">
        {instructors?.map(instructor =><div key={instructor._id} className="card bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-full" src={instructor.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{instructor.name}</h2>
    <p>{instructor.email}</p>
  </div>
</div>)}
        </div>
    );
};

export default Instructor;