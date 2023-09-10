import React from "react";
import Tab from "./Tab/Tab";
import './style.css'

const Tabs = () => {

  return (
    <div className="tabs">
      <Tab text="All" />
      <Tab text="My favorites" />
      <Tab text="Popular" />
    </div>
  );
};

export default Tabs;
