import React from "react";
import "./team.css";
import Londogg from "../../assets/images/Londogg.png";
import Artist_photo from "../../assets/images/Artist_photo.png";
import przyklad_2 from "../../assets/images/przyklad_2.png";
import { ReactComponent as Deviantart } from "../../assets/icons/deviantart.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import Header from "../Header/Header";

const Team: React.FC = () => {
  return (
    <div id="Team" className="team">
      <Header className="team-header" header="Our-Team" />
      <div className="team-container">
        <div className="team-member">
          <img src={Londogg} alt="" />
          <div>
            <h5>The Big Doggo</h5>
            <p>Project Manager</p>
          </div>
        </div>
        {/* <div className="team-member">
          <img src={Artist_photo} alt="" />
          <div>
            <h5>Kitka /kitucha66/</h5>
            <p>The Artist</p>
            <div className="nd-member">
              <a href="https://www.deviantart.com/kitka">
                <Deviantart className="deviantart" />
              </a>
              <a
                href="https://www.instagram.com/kitucha66/"
                className="instagram"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="team-member">
          <img src={przyklad_2} alt="" />
          <div>
            <h5>Mia Paw</h5>
            <p>
              Web designer,
              <br />
              Marketing
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Team;
