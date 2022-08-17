import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serch } from "../Redux/actions";
import Ordenamiento from "./Filtros_Ord/Ord";
import Filtrado from "./Filtros_Ord/Filtros";

const Nav = () => {
   const [food, setFood] = useState("")

  const dispatch = useDispatch()
  
  const info = (e) => {
     setFood(e.target.value)
     buscar()
  }
  const buscar = () => {

   dispatch(serch(food))
  
  
  }


 return(
    <>
     <Filtrado/>
     <Ordenamiento/>
     <div>
    <input type="text" value={food} onChange={info}/>
    </div>
    
    
    
    </>
 )
}

export default Nav