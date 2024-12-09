/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import data from "../restApi.json";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = data.data[0].testimonials;
  const delay = 5000; 
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  return (
    <div
      id="testimonials"
      className="min-h-[400px] flex flex-col items-center justify-center  relative"
    >
      <h2 className="text-center text-4xl pb-5">Testimonials</h2>
      {/* Display the current testimonial */}
      <div className="description text-lg text-zinc-800 text-center w-[60%] transition-transform duration-700 ease-in-out mb-6">
        &quot;{testimonials[currentIndex].description}&quot;
      </div>

      <div className="relative">
        <img
          className="size-30 w-50 h-50 rounded-full size-30 border border-gray-200 border-[4px] transition-transform duration-700 ease-in-out"
          src={testimonials[currentIndex].image}
          alt=""
        />
        <span className="bottom-0 right-7 absolute  w-6 h-6 bg-green-400 border-2 border-gray-200 rounded-full"></span>
      </div>
      <h4 className="text-lg font-semibold transition-transform duration-700 ease-in-out">
        {testimonials[currentIndex].userName}
      </h4>
      <div>
        <span className="text-red-500">Rating:</span>{" "}
        {testimonials[currentIndex].rating}/5
      </div>

      {/* Slider Dots */}
      <div className="flex mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
