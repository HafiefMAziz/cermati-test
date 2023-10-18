import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function NewsPanel() {
  const [displayNews, setDisplayNews] = useState(false);
  const [close, setClose] = useState(false)
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setDisplayNews(true);
    }
  };
  const handleDisplay = () => {
    setClose(true);
  };
  return (
    <div className={`news-panel ${displayNews ? "show" : "hidden"} ${close ? "close" : " "}`}>
      <div className="news-content">
        <button className="btn-x" onClick={handleDisplay}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2>Get latest updates in web technologies.</h2>
        <p>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </p>
        <div className="input-panel">
          <input type="email" placeholder="Email address" />
          <button>Count Me In!</button>
        </div>
      </div>
    </div>
  );
}

export default NewsPanel;
