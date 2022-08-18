import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detalleA } from "../../Redux/actions";


const Detalle_Rc = () => { 
var url = window.location.href.split("/")
const dispatch = useDispatch()
 

   const detalle = useSelector(state => state.Detalle)
    return (
        <>
        <button onClick={() => dispatch(detalleA(url[url.length-1]*1)) }>datos</button>
        <button onClick={() => console.log(detalle)}>console</button>
       <h3>{detalle.name}</h3>
       <img src={detalle.img} alt="Food" />
       <p>{detalle.diets}</p>
        <p>{detalle.score}</p>
        <p>{detalle.summary}</p>
         {detalle.steps}
        </>
    )
}

export default Detalle_Rc
