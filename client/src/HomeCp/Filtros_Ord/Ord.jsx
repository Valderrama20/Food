import React from "react";
import { useDispatch } from "react-redux";
import { porNombre } from "../../Redux/actions";



const Ordenamiento = () => {
  var dispatch = useDispatch()


  const cambios = (e) => { 
        switch (e.target.value) {
            case "A_Z": dispatch(porNombre("A_Z")); return
             case "Z_A": dispatch(porNombre("Z_A")) ; return
            //   case "D100_1": dispatch(porScore(D100_1)); return
            //    case "D1_100": dispatch(porScore(D1_100)); return
            default: console.log(null)
                
        }
      }
  return (
    <>
    <select name="Orden" onChange={cambios}>
      <option value="A_Z">De A-Z</option>
      <option value="Z_A">De Z-A</option>
      <option value="D100_1">De 100-0</option>
      <option value="D1_100">De 0-100</option>
     </select>
    </>
  )
}

export default Ordenamiento