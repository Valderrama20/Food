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
      
       <input type="text" onChange={info} className={sty.nav}/> 
      

      <div className={sty.or}>
          <Ordenamiento/>  
      </div>
      
     <div className={sty.fo}>
       <Link to="/Formulario">
      <button>Create Recipe</button>
    </Link>
     </div>
    </div>
 )
}

export default Nav