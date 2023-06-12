
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCourses from "../../../hock/useCourses";

const AllCourses = () => {
  const classes = useCourses();

  
   const handleEditStatus = item =>{
        fetch(`http://localhost:5000/courses/${item._id}`,
        {
          method:'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
          if(data.modifiedCount){
            Swal.fire(
              'Good job!',
              `${item.name} is 'Approved'`,
              'success'
            )
          }
        })
   }
  return (
    <div className="flex flex-wrap justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Course Name</th>
            <th className="px-4 py-2">Instructor</th>
            <th className="px-4 py-2">Details</th>
            <th className="w-[150px]">Actions</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem._id}>
              <td className="border px-4 py-2">{classItem.name}</td>
              <td className="border px-4 py-2">{classItem.instructor}</td>
              <td className="border px-4 py-2">{classItem.details}</td>
              <td className="border px-4 py-2">
               {classItem.status === 'pending'? <button className="btn btn-primary btn-sm" onClick={() => handleEditStatus(classItem)}>
                  Edit Status
                </button> : <button>Approved</button>} 
              </td>
              <td className="border px-4 py-2">
              <Link to={`/courses/${classItem._id}`}>
                  <button className="btn btn-primary btn-sm ml-2">
                    Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCourses;
