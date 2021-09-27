import React, { useEffect } from "react";
import "./roadmap.css";
import ten from "../../assets/images/10.png";
import twenty from "../../assets/images/20.png";
import fifty from "../../assets/images/50.png";
import seventy from "../../assets/images/75.png";
import hundred from "../../assets/images/100.png";
import ImageText from "../ImageText/ImageText";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "aos/dist/aos.css";
import AOS from "aos";
const Roadmap: React.FC = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      id="RoadMap"
      data-aos="fade-in"
      data-aos-duration="1500"
      className="roadmap"
    >
      <Header className="team-header" header="Sol Doggo Roadmap" />
      <div className="maps-container">
        <ImageText
          className="each-plan"
          h5="MASS MARKETING"
          img={ten}
          span="Hire bsc-consultants.com for a full scale marketing campaign including Times Square Billboard.  Implement Rarity Sniper so that everyone can check their rarities."
        />
        <ImageText
          className="each-plan"
          h5="Sol Doggo Holders Mystery"
          img={twenty}
          span="10 Mysterious Sol Doggos known as the Holders will be airdropped
          to lucky owners who keep their original Sol Doggos. These 10
          characters will hold scrolls with hidden clues to a great Mystery
          - the first person to solve it will claim the Ultimate Prize."
        />
        <ImageText
          className="each-plan"
          h5="BAD ASS DOGGOS: THE GAME"
          img={fifty}
          span="Begun work on a gang style video game incorporating the doggos and their stories.  This game will give randomized bonuses to holders potentially making common doggos more valuable.  It will also only be available to holders of doggos creating an exclusive club!"
        />
        <ImageText
          className="each-plan"
          h5="Sol Doggos Party!"
          img={seventy}
          span="We will hold 3 exclusive events for Sol Doggos holders only! You
          are invited to London, New York, and Tokyo. Drinks are on us!"
        />
        <ImageText
          className="each-plan"
          h5="Sol Doggos in Times Square!"
          img={hundred}
          span="The world will see the greatness of Sol Doggos! Sol Doggos will be
          displayed in Times Square (New York City), Piccadilly Circus
          (London), and Shibuya (Tokyo) - this will drive attention from
          legacy media and the word will spread about Sol Doggos in the
          entire world. Get ready for a ride to the Moon!"
        />
      </div>
      <Button
        className="join-twitter"
        url="https://twitter.com/BadAssDoggos?s=09"
        text="Follow Our Twitter"
      />
    </div>
  );
};

export default Roadmap;
