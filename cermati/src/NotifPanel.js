import React, {useState} from "react";
import "./App.css";

function NotifPanel() {
  const [displayNotif, setDisplayNotif] = useState(true)
  const handleDisplay = () => {
    setDisplayNotif(false)
  };
  return (
    <div className={`notif-panel ${displayNotif ? "" : "hide"}`}>
      <div className="notif-content">
        <p>
          By accessing and using this website, you acknowledge that you have
          read and understand our <span>Cookie Policy</span>,{" "}
          <span>Privacy Policy</span>, and our <span>Terms of Service</span>.
        </p>
        <button onClick={handleDisplay}>Got it</button>
      </div>
    </div>
  );
}

export default NotifPanel;
