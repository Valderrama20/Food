import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginado9 } from "../Redux/actions";
import sty from "./General_Css/Paginado.module.css"


 var pagina = 0
 var recipes = []
  
 let dispatch 

 export const init = () => {
    setTimeout(() => {
        pagina = 0
     dispatch(paginado9(recipes))}
    ,200)
  }

export const Paginado = () => {

    
    dispatch = useDispatch()
   const D8 = useSelector((state) => state.Cars)
   const D82 = D8.filter(e => e.ocultar === false)
   recipes = [...D82].splice(0,9)
  
  

   const  Siguiente = () => {
   const largo = D82.length
   const siguiente = pagina+1
   const index = siguiente * 9
   if(largo < index) return 
   recipes = [...D82].splice(index, 9)
   pagina = siguiente
   console.log(recipes)
   dispatch(paginado9(recipes))
   }

   const Anterior = () => {
   var anterior = pagina-1

   if(anterior < 0) return 

    var index = anterior * 9

    recipes = [...D82].splice(index,9)
    console.log(recipes)
    dispatch(paginado9(recipes))
    pagina = anterior
   }
    return (
        <div className={sty.container}>
        
     <button className={sty.btn} onClick={Anterior}>🡰</button>
     <label className={sty.pagina}>Pagina: {pagina}</label>
     <button className={sty.btn} onClick={Siguiente}>🡲</button>

     </div>
    )
}

