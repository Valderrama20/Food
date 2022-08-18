import React from "react";
import { Link } from "react-router-dom";
const Card = ({id, img, name ,diets}) => {
    return(
      <Link to={`Detalles/${id}`}>
      <div>
      <h3>{name}</h3>
      <img src={img} alt="food" />
      <p>{diets}</p>
      </div>
      </Link>
    )
}

export default Card