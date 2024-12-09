/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[url('/reserve.svg')] bg-cover bg-no-repeat bg-center">
    <footer className="m-5 bg-[#F1F4E3] hover:bg-[#d1dba3] rounded-lg shadow-lg ">
      <div className="container">
        <div className="banner">
          <div className="left">RESTAURANT</div>
          <div className="right">
            <p>Gate No. 1, UET Taxila</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By: Mudassar</p>
          </div>
          <div className="right">
            <p>All Rights Reserved by Mudassar</p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
