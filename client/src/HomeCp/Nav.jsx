import React from "react";
import { useDispatch } from "react-redux";
import { serch } from "../Redux/actions";
import Ordenamiento from "./Filtros_Ord/Ord";
import Filtrado from "./Filtros_Ord/Filtros";
import { Link } from "react-router-dom";


const Nav = () => {


  const dispatch = useDispatch()
  
  const info = (e) => {
     dispatch(serch(e.target.value))
  }

 return(
    <div>
     <Filtrado/>
     <Ordenamiento/>
    <input type="text" onChange={info}/> 
    <Link to="/Formulario">
      <button>Create Recipe</button>
    </Link>
    </div>
 )
}

export default Nav