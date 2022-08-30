import React from "react";
import { useDispatch } from "react-redux";
import { porNombre, porScore } from "../../Redux/actions";
import sty from "./filtros_Ord.module.css"



const Ordenamiento = () => {
  var dispatch = useDispatch()


  const cambios = (e) => { 
        switch (e.target.value) {
            case "A_Z": dispatch(porNombre("A_Z")); return
             case "Z_A": dispatch(porNombre("Z_A")) ; return
               case "D100_1": dispatch(porScore("D100_1")); return
               case "D1_100": dispatch(porScore("D1_100")); return
            default:return
                
        }
      }
  return (
    <>
    <select name="Orden" onChange={cambios} className={sty.diets}>
      <option value="">Ordenamientos</option>
      <option value="A_Z">Alfabeticamente de A-Z</option>
      <option value="Z_A">Alfabeticamente de Z-A</option>
      <option value="D100_1">Score de 100-0</option>
      <option value="D1_100">Score de 0-100</option>
     </select>
    </>
  )
}

export default Ordenamiento