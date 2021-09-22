import React, { useEffect } from "react";
import "./gang.css";
import Londogg from "../../assets/images/Londogg.png";
import NewDogg from "../../assets/images/NewDogg.png";
import Doggyo from "../../assets/images/Doggyo.png";
import ImageText from "../ImageText/ImageText";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "aos/dist/aos.css";
import AOS from "aos";
const Gang: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="gang">
      <Header className="gang-header" header="Find your gang:" />
      <ImageText
        dataAos="slide-right"
        dataAosDuration="1000"
        className="member"
        h5="Londogg"
        img={Londogg}
        span="This Gang has the most members. They value staying true to their
        doggish nature and oppose using Energy Crystals and Cybernetic
        Expansions."
      />
      <ImageText
        dataAos="slide-left"
        dataAosDuration="1000"
        data-aos-easing="linear"
        className="member"
        h5="New Dogg"
        img={NewDogg}
        span="The higher class of the Sol Doggo society. They expanded their
        lifespans and enhanced their dog-senses with mutations that cause
        Energy Crystals to grow out of their bodies."
      />
      <ImageText
        dataAos="slide-right"
        dataAosDuration="1000"
        data-aos-easing="linear"
        className="member"
        h5="Doggyo"
        img={Doggyo}
        span=" This elite Gang only recruits members among Doggos who underwent
            Cybernetic Expansions. They believe that the bright future of the
            Doggo race can only be achieved through Technological Singularity."
      />
      <Button
        url="https://discord.com/invite/U8rwDBHH8r"
        text="Join Our Discord"
        className="join-discord"
      />
    </div>
  );
};

export default Gang;
