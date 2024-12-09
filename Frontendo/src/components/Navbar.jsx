/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); 
  };


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-[#F1F4E3] my-3 hover:bg-[#d1dba3] mx-5 rounded-lg shadow-lg shadow-[#F1F4E3] ">
    <nav>
        <div className="logo">RESTAURANT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>

          {user ? (
            <div>
              <div className="flex justify-center gap-2">
                <button
                  onClick={handleLogout}
                  className="text-white rounded-md py-2 px-2 cursor-pointer bg-yellow-800"
                >
                  LogOUT
                </button>
                <button onClick={() => setShow(!show)}>
                  <p className="text-white rounded-md py-2 px-2 cursor-pointer bg-yellow-800">
                    {user.name.slice(0, 7)}
                  </p>
                </button>
              </div>

              <div
                onClick={() => setShow(false)}
                className={`${
                  show ? "block" : "hidden"
                } absolute right-5 w-35 z-50 mt-1 px-4 py-1 bg-gray-900 text-white rounded-md shadow-lg`}
              >
                <p>{user.email}</p>
              </div>
            </div>
          ) : (
            <RouterLink to={`/login`}>
              <button className="menuBtn">Login</button>
            </RouterLink>
          )}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
