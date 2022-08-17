import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { serch } from "../Redux/actions";
import Ordenamiento from "./Filtros_Ord/Ord";

const Nav = () => {
   const [food, setFood] = useState("")
  const diets = useSelector(state => state.Diets)
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
    <select name="Filtros">
      {diets.map(d => {return <option key={d.id}>{d.name}</option>})}
    </select>
    
     
     <Ordenamiento/>
     <div>
    <input type="text" value={food} onChange={info}/>
    </div>
    
    
    
    </>
 )
}

export default Nav