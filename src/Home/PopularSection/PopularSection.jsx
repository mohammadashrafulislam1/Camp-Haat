import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

const PopularSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const categories = [
    { title: 'Category 1', image: 'https://example.com/category1.jpg' },
    { title: 'Category 2', image: 'https://example.com/category2.jpg' },
    { title: 'Category 3', image: 'https://example.com/category3.jpg' },
    { title: 'Category 4', image: 'https://example.com/category4.jpg' },
    { title: 'Category 5', image: 'https://example.com/category5.jpg' },
    { title: 'Category 6', image: 'https://example.com/category6.jpg' },
  ];

  return (
   <>
   <SectionTitle heading="Popular Classes" subHeading="See top six classes" moto="BEST CLASSES"></SectionTitle>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">    
      {categories.map((category, index) => (
        <div
          className="max-w-sm rounded-ss-full rounded-ee-full overflow-hidden relative bg-gray-800 text-white"
          key={index}
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div
            className="h-56 bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                {category.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PopularSection;
