import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <span onClick={() => props.clickCard(props.clicked)}>
       <img src={props.image} className="img-fluid" alt="Responsive" style={{width: "300px", height: "200px"}}/>
      </span>
    </div>
  )
}

export default Card;