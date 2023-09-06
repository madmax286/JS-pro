import React from "react";
import Tab from "./Tab/Tab";
import './style.css'

const Tabs = ({text}: {text: string}) => {

  return (
    <div className="tabs-container">
      {/* <h2>{text}</h2> */}
      <div className="tabs">
        <Tab text="All" path='allposts'/>
        <Tab text="My favorites" path='favorites'/>
        <Tab text="Popular" path='popular'/>
      </div>
    </div>
  );
};

export default Tabs;
