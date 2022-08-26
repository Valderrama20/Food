import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrar } from "../../Redux/actions";
import sty from "./filtros_Ord.module.css"

const Filtrado = () => {
const diets = useSelector(state => state.Diets)
const dispatch = useDispatch()

const filtro = (e) => {

    dispatch(filtrar(e.target.value))
 
}
    return(
        <>
         <select onChange={filtro} className={sty.diets}>
            <option key="filtros">Score and Name</option>
          {diets.map(d => {return <option key={d.id}>{d.name}</option>})}
          </select>
        </>
    )
}

export default Filtrado
