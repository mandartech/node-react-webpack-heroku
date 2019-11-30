import React from 'react';
import "../styles/ReactApp.css";
import react_img from "../assets/react_2.png";

export default class ReactApp extends React.Component {
  render() {
    return (
      <div className="topLevelDiv">
        <img className="reactImg" src={react_img} />
        Welcome to a fully functional, minimal node.js server serving React UI!
      </div>
    );
  }
}
