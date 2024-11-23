import React from "react";
import "./InfoBar.css";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online" />
        <h3>{room}</h3>
      </div>

      <div className="rightInnercontainer">
        <a href="/">
          <img src={closeIcon} alt="Room Closen" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
