import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css'
import useAuth from "../../../hock/useAuth";
import Swal from "sweetalert2";
const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [allusers, setAllUsers] = useState();
    const {user} = useAuth();
    useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setAllUsers(data))
    },[])
    useEffect(() => {
      Aos.init();
      fetch(`http://localhost:5000/courses/${id}`)
        .then((res) => res.json())
        .then((data) => setCourse(data))
        .catch((error) => console.log(error));
    }, [id]);
   const handleEnroll = (course) => {
    {allusers?.map(oneuser =>{
     if (oneuser.role === 'Student') {
      if (course?.seats > 0) {
        const updatedCourse = {
          ...course,
          seats: course.seats - 1,
          enroll: course.enroll + 1
        };
  
        // Update the course
        fetch(`http://localhost:5000/courses/${course._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedCourse),
        })
          .then((res) => res.json())
          .then((data) => {
            // Check if the course was successfully updated
            if (data.modifiedCount > 0) {
              // Create a new cart entry
        fetch(`http://localhost:5000/carts`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...updatedCourse, _id: undefined, enrollEmail: user?.email }),
    })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    setCourse(updatedCourse);
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Your course has been added to cart.',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => console.log(error));
            } else {
              console.log('Failed to update the course.');
            }
          })
          .catch((error) => console.log(error));
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No available seats left.',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: 'Please Login First. Or login as a Student',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Login Now',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
    })}
  };
  
  
    return (
      <>
        <div className="bg-white rounded-lg shadow-lg p-6  mb-20">
  <div
    className="rounded-lg inset-0 bg-cover bg-center h-[400px]" data-aos="fade-up" data-aos-offset="200"
    style={{ backgroundImage: `url(${course?.image})` }}
  ></div>
  <div className="mt-10 z-10 bg-gray-100 rounded-lg p-4 " data-aos="fade-up" data-aos-offset="200">
    <h2 className="text-2xl font-bold mb-4">{course?.name}</h2>
    <p className="text-gray-700 text-lg mb-4">{course?.details}</p>
    <div className="flex items-center">
      <p className="text-gray-600 text-sm mr-4">Instructor: {course?.instructor}</p>
    </div>
  </div>
    </div>
    <div className="bg-gray-100 mb-10 rounded-lg p-4 text-center" data-aos="fade" data-aos-offset="200">
    <p className="text-gray-600 text-xl mb-2">Available Seats: {course?.seats}</p>
    <p className="text-gray-600 text-xl mb-2">Enrollment: {course?.enroll}</p>
    <p className="text-gray-600 text-xl">Price: ${course?.price}</p>
    <button disabled={course?.seats === 0} className="btn btn-primary w-full mt-10" onClick={()=>handleEnroll(course)}>Enroll</button>
  </div>

</>
    );
};

export default Details;