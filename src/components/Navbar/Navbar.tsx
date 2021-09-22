import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import discord from "../../assets/icons/Discord.png";
import twitter from "../../assets/icons/Twitter.png";
const Navbar: React.FC = () => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [navbar, setNavbar] = useState(false);
  const changeHeight = (): void => {
    if (window.scrollY > 103) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeight);

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={navbar ? "navbar height" : "navbar"}>
      <div className="web-nav">
        <div className="external-social">
          <a href="https://discord.com/invite/U8rwDBHH8r">
            <img src={discord} alt="" />
          </a>
          <a href="https://twitter.com/SolDoggos">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="nav-links">
          <Link activeClass="active" smooth={true} duration={800} to="RoadMap">
            Roadmap
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            Team
          </Link>
          <a href="/how-to-buy">How to Buy?</a>
        </div>
      </div>
      <div className="slide-menu">
        <div className="external-social">
          <a href="https://discord.com/invite/U8rwDBHH8r">
            <img src={discord} alt="" />
          </a>
          <a href="https://twitter.com/SolDoggos">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="slide-outter">
          <div className="logo mobile-logo"></div>

          <Menu
            onClick={toggleAccordion}
            className={setActive ? "slide-menu-icon active" : "slide-menu-icon"}
          />
        </div>

        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion__content"
        >
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            Roadmap
          </Link>
          <Link
            activeClass="active"
            onClick={toggleAccordion}
            smooth={true}
            duration={800}
            to="Team"
          >
            Team
          </Link>
          <a onClick={toggleAccordion} href="/how-to-buy">
            How to Buy?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
