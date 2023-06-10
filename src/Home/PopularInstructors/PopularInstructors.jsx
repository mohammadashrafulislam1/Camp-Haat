import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./PopularInstructors.css";

import Aos from 'aos';
import 'aos/dist/aos.css';
// import required modules
import { EffectCards } from "swiper";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
const PopularInstructors = () => {
    const [instructors, setInstructors] =useState()
    useEffect(() => {
        Aos.init();
        fetch('http://localhost:5000/users')
          .then(res => res.json())
          .then(data => {
            const instructorData = data.filter(item => item.role === "Instructor");
            setInstructors(instructorData);
          });
      }, []);
  return (
    <div>
        <SectionTitle heading="Top Instructors" subHeading="Meet our best teachers" moto="BEST TEACHERS"></SectionTitle>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mb-20" data-aos="flip-down" data-aos-offset="200"
      >
        {instructors?.map(instructor =><SwiperSlide key={instructor._id} className="relative"><img className="h-full" src={instructor.photo} alt="" /><p className="absolute bottom-6 bg-black rounded-lg px-5">{instructor.name}</p></SwiperSlide>)}
      </Swiper>
    </div>
  );
};

export default PopularInstructors;
