'use client'
import React, { useState } from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";


const TestimonialCarousel = () => {
  const testimonials = [
    { id: 1, name: 'Full Name', comments: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”", imageSrc: '/testPlaceholder.png' },
    { id: 2, name: 'half Name', comments: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”", imageSrc: '/testPlaceholder.png' },
    { id: 3, name: 'lorem Name', comments: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”", imageSrc: '/testPlaceholder.png' },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return ( 
    <div id="controls-carousel" className="relative w-full h-full  p-8 rounded shadow-lg" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${index === currentTestimonial ? 'block' : 'hidden'
              } duration-700 ease-in-out`}
            data-carousel-item=""
          >
            <div className="md:flex mx-auto items-center">
              <img
                src={testimonial.imageSrc}
                className="rounded-full mx-auto md:mr-2"
                alt={`Testimonial ${testimonial.id}`}
              />
              <p className="font-bold mx-auto text-center md:ml-4">{testimonial.name}</p>
            </div>

            <div className="mx-auto text-center">
              <p>{testimonial.comments}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={prevTestimonial}
      >
        <IoIosArrowRoundBack className='w-[35px] h-[35px] left-0 top-0 bg-customOrange rounded-full shadow text-white' />
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
        onClick={nextTestimonial}
      >
        <IoIosArrowRoundForward className='w-[35px] h-[35px] left-0 top-0 bg-customOrange rounded-full shadow text-white' />
      </button>
    </div>
  );
};

export default TestimonialCarousel;


