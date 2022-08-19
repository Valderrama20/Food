import React from "react";
import { Link } from "react-router-dom";
import "./General_Css/Card.css"

const Card = ({id, img, name ,diets}) => {
    return(
      <Link id="Link" to={`/Detalles/${id}`}>
      <div id="Card">
      <h4>{name}</h4>
      <img src={img} alt="food" />
      <p>{diets}</p>
      </div>
      </Link>
    )
}

export default Card