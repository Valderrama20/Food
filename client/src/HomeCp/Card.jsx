import React from "react";
import { Link } from "react-router-dom";
import sty from "./General_Css/Card.module.css"


const Card = ({id, img, name ,diets}) => {
    return(
      <Link id="Link" to={`/Detalles/${id}`}>
      <div className={sty.Card} id={sty.Card}>
      <h4>{name}</h4>
      <img src={img} alt="food" />
      <p>{diets}</p>
      </div>
      </Link>
    )
}

export default Card