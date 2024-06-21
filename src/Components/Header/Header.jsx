import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const getMenuStyle = (menuOpen) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpen && "-100%" };
  }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <motion.img
          src="./logo1.png"
          alt="logo"
          width={127}
          initial={{ x: "-7rem", y: "-2rem", opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2.5, type: "spring" }}
        />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className=" flexCenter h-menu" style={getMenuStyle(menuOpen)}>
            <a href="">
              <Link to="residencies" span={true} smooth={true}>
                Residencies
              </Link>
            </a>

            <a href="">
              <Link to="value" span={true} smooth={true}>
                Our Value
              </Link>
            </a>

            <a href="">
              <Link to="contacts" span={true} smooth={true}>
                Contact Us
              </Link>
            </a>

            <a href="">
              <Link to="getStarted" span={true} smooth={true}>
                Get Started
              </Link>
            </a>

            <button className="button">
              <a href="">
                <Link to="contacts" span={true} smooth={true}>
                  Contact
                </Link>
              </a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
