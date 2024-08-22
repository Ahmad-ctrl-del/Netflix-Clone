import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"} `}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXeMySNjwvvK61yM2AvfboJC6nZPSYebVjyw&s"
        alt="Logo"
        className="netflix_log"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRWsUV2-8W5E0tSmHMxiulei8obW1ilGB_A&s"
        alt="User"
        className="netflix_user"
      />
    </div>
  );
}

export default Nav;
