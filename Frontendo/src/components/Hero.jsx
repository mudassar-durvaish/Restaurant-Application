/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-scroll";
import { Link as Linke } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-30">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Celebrate the flavors of the season!{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true"></span>
                Explore Menu <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center relative">
            <h1 className="relative text-5xl  font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Experience Culinary Bliss
            </h1>
            <p className="mt-8 text-lg text-gray-500 sm:text-xl">
              Savor the finest dishes crafted with love and fresh ingredients. Whether it&lsquo;s a family dinner or a romantic evening, we promise unforgettable moments.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="reservation"
                spy={true}
                smooth={true}
                duration={500}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 cursor-pointer"
              >
                Reserve a Table
              </Link>
              <Linke to="/reservations" className="text-sm font-semibold text-gray-900">
                See Your Reservations <span aria-hidden="true">→</span>
              </Linke>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;