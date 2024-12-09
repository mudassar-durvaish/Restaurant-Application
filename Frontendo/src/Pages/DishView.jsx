/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const DishView = () => {
  const location = useLocation();
  const { element } = location.state || {};
  const baseUrl = "http://localhost:5173";
  const imageUrl = `${baseUrl}/${element.image.replace(/^\.\//, "")}`;

  useEffect(() => {
    if (element) {
      document.title = element.title;
  
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", element.description);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = "description";
        newMetaDescription.content = element.description;
        document.head.appendChild(newMetaDescription);
      }
    }
  }, [element]);

  if (!element) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center font-bold text-5xl min-h-[275px]">
          Data not found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="dishview">
        <div className="flex flex-col sm:flex-row sm:justify-between px-5 sm:px-20 gap-4 max-h-screen">
          <div className="content pt-5 flex flex-col justify-start w-full sm:w-[50%]">
            <h2 className="font-poppins text-4xl font-bold text-start">
              {element.title}
            </h2>
            <p>
              <span className="text-xl text-blue-500">Category:</span>{" "}
              {element.category}
            </p>
            <p className="font-sans-serif pt-5 text-justify">
              {element.description}
            </p>
            <div className="mt-5">
              <Link
                to="/"
                className="inline-flex justify-center items-center gap-2 text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition duration-300"
              >
                Back to Home
                <span className="text-xl">
                  <HiOutlineArrowNarrowRight />
                </span>
              </Link>
            </div>
          </div>

          <div className="pic flex justify-center sm:justify-end w-full sm:w-[50%]">
            <img
              src={imageUrl}
              alt={element.title}
              className="object-cover max-h-[450px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DishView;
