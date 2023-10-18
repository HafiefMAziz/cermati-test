import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPaintbrush,
  faBoxesStacked,
  faBullhorn,
  faBarsProgress,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import NotifPanel from "./NotifPanel";
import NewsPanel from "./NewsPanel";

function App() {
  const [name, setName] = useState("Hafief Maulana Aziz")

  return (
    <>
      <div className="App">
      <NotifPanel/>
        <div className="row-banner">
          <div className="img-banner">
            <img
              className="logo-banner"
              src={require("./assets/y-logo-white.png")}
              alt=""
            ></img>
            <div className="text-banner">
              <p className="text-banner-name">Hello! I'm {name}</p>
              <p className="text-banner-subtitle">
                Consult, Design, and Develop Websites
              </p>
              <p className="text-banner-subtitle-2">
                Have something great in mind? Feel free to contact me.
                <br />
                I'll help you to make it happen.
              </p>
              <button type="button" className="btn-contact">
                Let's Make Contact
              </button>
            </div>
          </div>
        </div>
        <div className="row-highlight">
          <div className="row-highlight-title">
            <p className="highlight-title">How Can I Help You?</p>
            <p className="highlight-subtitle">
              Our work then targeted, best practices outcomes social innovation
              synergy.
              <br />
              Venture philanthropy, revolutionary inclusive policymaker relief.
              User-centered program areas scale.
            </p>
          </div>
          <div className="row-highlight-card">
            <div className="card">
              <div className="card-title">
                <p>Consult</p>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faComments} />
                </div>
              </div>
              <div className="card-body">
                Co-create, design thinking; strengthen infrastructure resist
                granular. Revolution circular, movements or framework social
                impact low-hanging fruit. Save the world compelling
                revolutionary progress.
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <p>Design</p>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faPaintbrush} />
                </div>
              </div>
              <div className="card-body">
                Policymaker collaborates collective impact humanitarian shared
                value vocabulary inspire issue outcomes agile. Overcome
                injustice deep dive agile issue outcomes vibrant boots on the
                ground sustainable.
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <p>Develop</p>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faBoxesStacked} />
                </div>
              </div>
              <div className="card-body">
                Revolutionary circular, movements a or impact framework social
                impact low- hanging. Save the compelling revolutionary inspire
                progress. Collective impacts and challenges for opportunities of
                thought provoking.
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <p>Marketing</p>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faBullhorn} />
                </div>
              </div>
              <div className="card-body">
                Peaceful; vibrant paradigm, collaborative cities. Shared
                vocabulary agile, replicable, effective altruism youth. Mobilize
                commitment to overcome injustice resilient, uplift social
                transparent effective.
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <p>Manage</p>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faBarsProgress} />
                </div>
              </div>
              <div className="card-body">
                Change-makers innovation or shared unit of analysis. Overcome
                injustice outcomes strategize vibrant boots on the ground
                sustainable. Optimism, effective altruism invest optimism
                corporate social.
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <p>Evolve</p>
                <div className="card-icon">
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </div>
              </div>
              <div className="card-body">
                Activate catalyze and impact contextualize humanitarian. Unit of
                analysis overcome injustice storytelling altruism. Thought
                leadership mass incarceration. Outcomes big data, fairness,
                social game-changer.
              </div>
            </div>
          </div>
        </div>
        <div className="row-footer">
          <div className="footer-text">
            © 2023 {name}. All rights reserved.
          </div>
        </div>
        <NewsPanel/>
      </div>
    </>
  );
}

export default App;
