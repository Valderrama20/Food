import React from "react";
import { useDispatch } from "react-redux";
import { serch } from "../Redux/actions";
import Ordenamiento from "./Filtros_Ord/Ord";
import Filtrado from "./Filtros_Ord/Filtros";
import { Link } from "react-router-dom";
import sty from "./General_Css/Nav.module.css"


const Nav = () => {


  const dispatch = useDispatch()
  
  const info = (e) => {
     dispatch(serch(e.target.value))
  }

 return(
    <div className={sty.container}>
      <div className={sty.fi}>
           <Filtrado/>
      </div>
      <div className={sty.or}>
          <Ordenamiento/>  
      </div>
      
      <input type="text" onChange={info} placeholder="Search..." className={sty.nav}/> 
      
     
       <Link to="/Formulario">
      <button className={sty.fo} >Create Recipe 🡲</button>
    </Link>
     
    </div>
 )
}

export default Nav