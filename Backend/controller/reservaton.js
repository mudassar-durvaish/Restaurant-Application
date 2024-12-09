import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill full reservation form!", 400));
  }

  try {
    await Reservation.create({firstName, lastName, email, phone, date, time});
    res.status(200).json({
        success: true,
        message: "Reservation is created successfully!",
      });
  } catch (error) {
    if(error.name === "ValidationError"){
        const validationErrors = Object.values(error.errors).map(
            (err) => err.message
        );
        return next(new ErrorHandler(validationErrors.join(","),400))
    }
    return next(error);
  }
};


// Controller to fetch all reservations
export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find(); 
    res.status(200).json({
      success: true,
      reservations, 
    });
  } catch (error) {
    return next(new ErrorHandler("Failed to fetch reservations", 500));
  }
}