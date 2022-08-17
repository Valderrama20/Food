import React from "react";

const Card = ({img, name ,diets}) => {
    return(
      <div>
      <h3>{name}</h3>
      <img src={img} alt="food" />
      <p>{diets}</p>
      </div>
    )
}

export default Card