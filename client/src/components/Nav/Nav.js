import React from "react";
const pStyle = {
  position: "absolute",
  right: 0,
  padding: "20px",
  color: "black"
};

const brandStyle = {
  position: "relative"
};

const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand" style={brandStyle}>
          New York Times Article Scrubber
        </a>
        <p style={pStyle}>Search for and annote articles of interest</p>
      </div>
    </div>
  </nav>;

export default Nav;
