import React from "react";

import { useDispatch } from "react-redux";
import { serch } from "../Redux/actions";
import Ordenamiento from "./Filtros_Ord/Ord";
import Filtrado from "./Filtros_Ord/Filtros";

const Nav = () => {


  const dispatch = useDispatch()
  
  const info = (e) => {
     dispatch(serch(e.target.value))
  }

 return(
    <>
     <Filtrado/>
     <Ordenamiento/>
     <div>
    <input type="text" onChange={info}/>
    </div>
    </>
 )
}

export default Nav