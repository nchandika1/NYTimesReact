import React from "react";
import "./Header.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Header = props => (
  <div className="jumbotron header" {...props}>
    <h1>New York Times Article Scrubber</h1>
    <h5>Search for and annotate articles of interest</h5>
  </div>
);

export default Header;
