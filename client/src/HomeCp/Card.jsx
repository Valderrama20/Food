import React from "react";
import { Link } from "react-router-dom";
import sty from "./General_Css/Card.module.css"


const Card = ({id, img, name ,diets}) => {

    return(
      <Link id="Link" to={`/Detalles/${id}`}>
      <div className={sty.Card} id={sty.Card}>
        <div className={sty.name}>
        <h4>{name}</h4>
        </div>
      <img src={img} alt="food" />
      <div className={sty.diets}>
         <p>{diets}</p>
      </div>
     
      </div>
      </Link>
    )
}

export default Card