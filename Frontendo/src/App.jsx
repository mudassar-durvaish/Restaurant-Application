/* eslint-disable no-unused-vars */
import "./index.css" 
import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, data } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './Pages/Home'
import Success from './Pages/Success'
import NotFound from './Pages/NotFound'
import DishView from "./Pages/DishView"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import ShowReservations from "./Pages/ShowReservations"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home  />} / >
        <Route path='/success' element={<Success />} / >
        <Route path='/dish/:id' element={<DishView />} / >
        <Route path='/login' element={<Login />} / >
        <Route path='/signup' element={<SignUp />} / >
        <Route path='/reservations' element={<ShowReservations />} / >
        <Route path='*' element={<NotFound />} / >
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App