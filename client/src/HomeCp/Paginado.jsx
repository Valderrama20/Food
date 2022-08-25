import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { paginado9 } from "../Redux/actions";


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
   recipes = [...D8].splice(0,9)
  
  

   const  Siguiente = () => {
   const largo = D8.length
   const siguiente = pagina+1
   const index = siguiente * 9
   if(largo < index) return 
   recipes = [...D8].splice(index, 9)
   pagina = siguiente
   console.log(recipes)
   dispatch(paginado9(recipes))
   }

   const Anterior = () => {
   var anterior = pagina-1

   if(anterior < 0) return 

    var index = anterior * 9

    recipes = [...D8].splice(index,9)
    console.log(recipes)
    dispatch(paginado9(recipes))
    pagina = anterior
   }
    return (
        <>
     <button onClick={Anterior}>Anterior</button>
     <label >Pagina: {pagina}</label>
     <button onClick={Siguiente}>Siguiente</button>
     </>
    )
}

