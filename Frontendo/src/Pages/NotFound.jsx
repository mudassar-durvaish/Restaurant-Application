/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container flex items-center justify-center flex-col gap-0">
          <img src="/notFound.svg" alt="Not Found"/>
          <h1>Looks Like You Were Lost</h1>
          <p>We can not see page you are looking for!</p>
          <Link to={"/"}>
            Back to Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
