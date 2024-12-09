/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { data } from "../restApi.json";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae
            fugiat consequuntur nisi accusamus incidunt, obcaecati nemo fugit
            dolorum eligendi!
          </p>
        </div>

        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3 className="mb-3">{element.title}</h3>
                <button>{element.category}</button>
                <Link
                  key={element.id}
                  to={`/dish/${element.id}`}
                  state={{ element }}
                  className="px-4 py-2 mt-3 text-white bg-blue-500 rounded-md"
                >
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
