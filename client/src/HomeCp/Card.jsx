import React from "react";
import { Link } from "react-router-dom";
import sty from "./General_Css/Card.module.css"
import { ocultar } from "../Redux/actions";
import { useDispatch } from "react-redux";


const Card = ({id, img, name ,diets, score}) => {

  const dispatch = useDispatch()

    return(
     
        
      <div className={sty.Card} id={sty.Card}>
         <Link id={sty.Link} to={`/Detalles/${id}`} >
        <div className={sty.name}>
        <h4>{name}</h4>
        </div>
      <img src={img} alt="food" />
      <div className={sty.diets}>
         <p>{diets}</p>
      </div>
        </Link>
        <div className={sty.ultimo}>
      <h3 className= {sty.score}> Score: {score}</h3>
       <button onClick={() => dispatch(ocultar(id))}>Ocultar</button>
       </div>
      </div>
     
     
    )
}

export default Card