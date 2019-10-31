import React from "react";

const footer = {
  position: "relative",
  left: "0",
  bottom: "0",
  width: "100%",
  color: "white",
  textAlign: "left",
  height: "10%",
  padding: "10px"
}

function Footer() {
  return (
    <div className="footer bg-dark" style={footer}>
      <h5>M:TG Clicker Game</h5>
    </div>
  )
}

export default Footer;