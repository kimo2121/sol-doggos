import React, { useEffect } from "react";
import Gang from "../../components/Gang/Gang";
import Roadmap from "../../components/Roadmap/Roadmap";
import Timer from "../../components/Timer/Timer";
import "./home.css";
import SolDoggosComic from "../../assets/images/SolDoggosComic.png";
import Team from "../../components/Team/Team";
import "aos/dist/aos.css";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div className="home">
      <div className="banner"></div>
      <Timer
        data-aos="fade-in"
        data-aos-duration="1000"
        mintStartAt={1633011600}
      />
      <Gang />
      <Roadmap />
      <div className="origin-container">
        <div data-aos="fade-down" data-aos-duration="1500" className="origins">
          <img src={SolDoggosComic} alt="" />
          <div>
            <h3>SOL DOGGOS: ORIGINS</h3>
            <p>
              Once we hit 50% milestone we will start working on publishing the
              official Sol Doggos comic book!
            </p>
          </div>
        </div>
      </div>
      <Team />
    </div>
  );
};

export default Home;
