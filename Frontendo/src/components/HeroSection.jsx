/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Tasty</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.jpg" alt="hero" style={{borderRadius: "15px"}} />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="rounded-full size-80 object-center">
            <img src="hero2.jpg" alt="hero" style={{borderRadius: "15px"}} />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
