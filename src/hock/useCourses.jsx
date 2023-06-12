import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, []);

  return courses;
};

export default useCourses;
