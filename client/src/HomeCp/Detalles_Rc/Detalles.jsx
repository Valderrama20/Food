import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detalleA } from "../../Redux/actions";
import sty from "./Detalles.module.css"
import { Link } from "react-router-dom";


const Detalle_Rc = () =>  { 
    const detalle = useSelector(state => state.Detalle)
     const dispatch = useDispatch()
    useEffect(() => {
        if(!Object.entries(detalle).length) dispatch(detalleA(url[url.length-1]*1)) 
    },[dispatch])
     var url = window.location.href.split("/")
     
     
   var re =/(<([^>]+)>)/ig
    if(detalle.summary) var eliminaTags = (detalle.summary.replace(re,""))

    if(!Object.entries(detalle).length) return "cargando"
    else return (
       <>
        <div className={sty.detalle}>
        <div className={sty.left}>
       <h3>{detalle.name}</h3>
       <img className={sty.img} src={detalle.img} alt="Food" />
       <h4>Steps:</h4>

        <div className={sty.steps}>
       <ol>{detalle.steps?detalle.steps.map(e => {return <li key={e}>{e}</li>}): null}</ol>
       </div>
       
        </div>

        <div className={sty.right}>
        <h4>Health Score:</h4> 
        <p>{detalle.score}</p>
        <h4>Diets:</h4>
        <ol>{detalle.diets?detalle.diets.map(e => {return<li key={e}>{e}</li>}):null}</ol>
        <h4>Summary:</h4>
        <p>{eliminaTags}</p>
        </div>
         </div>
         <div className={sty.btn}>
         <Link to="/home">
         <button className={sty.btn2}>Volver</button>
         </Link>
         </div>
        </>
    )
}

export default Detalle_Rc
