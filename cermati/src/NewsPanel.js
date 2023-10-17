import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
  } from "@fortawesome/free-solid-svg-icons";

function NewsPanel({ setDisplayNews }) {
  const handleDisplay = () => {
    setDisplayNews(false);
  };
  return (
    <div className="news-panel">
      <div className="news-content">
      <button className="btn-x"onClick={handleDisplay}><FontAwesomeIcon icon={faXmark} /></button>
        <h2>Get latest updates in web technologies.</h2>
        <p>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </p>
        <div className="input-panel">
            <input></input>
            <button placeholder="Email address">Count Me In!</button>
        </div>
      </div>
    </div>
  );
}

export default NewsPanel;
