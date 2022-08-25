import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtrar } from "../../Redux/actions";
import { init } from "../Paginado";
const Filtrado = () => {
const diets = useSelector(state => state.Diets)
const dispatch = useDispatch()

const filtro = (e) => {

    dispatch(filtrar(e.target.value))
 
}
    return(
        <>
         <select onChange={filtro}>
          {diets.map(d => {return <option key={d.id}>{d.name}</option>})}
          </select>
        </>
    )
}

export default Filtrado
