import React from "react";
const pStyle = {
  padding: "10px 10px",
  color: "black",
  textAlign: "center",
  backgroundColor: "gray",
  marginTop: "10px"
};

const Footer = () =>
   <footer className="footer">
      <div className="container-fluid">
        <p className="text-muted" style={pStyle}>©Copyright 2017 Nagarani Chandika</p>
      </div>
    </footer>;

export default Footer;
