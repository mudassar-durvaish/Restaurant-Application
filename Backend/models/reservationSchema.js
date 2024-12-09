import mongoose from 'mongoose'
import validator from 'validator'

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contains at least 3 characters!"],
        maxLength: [30, "First name contains mx 30 characters!"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contains at least 3 characters!"],
        maxLength: [30, "Last name contains mx 30 characters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contains 11 numbers!"],
        maxLength: [11, "Phone number must contains 11 numbers!"]
    },
    time:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

export const Reservation = mongoose.model("Reservation",reservationSchema);