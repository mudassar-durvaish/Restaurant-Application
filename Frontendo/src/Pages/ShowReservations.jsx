/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; 
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const ShowReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login"); 
      return;
    }

    const user = JSON.parse(storedUser);
    const userEmail = user.email;

    if (!userEmail) {
      navigate("/login");
      return;
    }

    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/reservation`
        );

        const userReservations = response.data.reservations.filter(
          (reservation) => reservation.email === userEmail
        );
        
        setReservations(userReservations);
        console.log(userReservations) 
      } catch (error) {
        console.error("Error fetching reservations:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="min-h-[200px] p-4">
      <div className="mb-2">
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
        <h1 className="text-xl font-bold mb-4">Reservations</h1>
        {loading ? (
          <p>Loading...</p> 
        ) : reservations.length > 0 ? (
          <ul>
            {/* Mapping over the filtered userReservations */}
            {reservations.map((reservation) => (
              <li
                key={reservation._id}
                className="border-b p-4 flex justify-between"
              >
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {reservation.firstName} {reservation.lastName}
                  </span>
                  <span>{reservation.email}</span>
                  <span>{reservation.phone}</span>
                  <span>{reservation.time}</span>
                  <span>{new Date(reservation.date).toLocaleDateString()}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations found.</p> // Message when there are no reservations for the logged-in user
        )}
      </div>
      <Footer />
    </>
  );
};

export default ShowReservations;
