import React from "react";

const style = {
  width: "300px",
  height: "300px"
}

function Card(props) {
  return (
    <div className="card" style={style}>
      <img src="../images/bolas.jpg" className="img-fluid" alt="Responsive"/>
    </div>
  )
}

export default Card;