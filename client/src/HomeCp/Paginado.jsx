import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginado9 } from "../Redux/actions";




const Paginado = () => {

   const dispatch = useDispatch()
   const D8 = useSelector((state) => state.Cars)
   const [recipes, setRecipes] = useState([...D8].splice(0,8))
   const [pagina, setPagina] = useState(0)


   const  Siguiente = () => {
   const largo = D8.length
   const siguiente = pagina+1
   const index = siguiente * 8
   if(largo === index) return 
   setRecipes([...D8].splice(index, 8))
   setPagina(siguiente)
   console.log(recipes)
   dispatch(paginado9(recipes))
   }

   const Anterior = () => {
   var anterior = pagina-1

   if(anterior < 0) return 

    var index = anterior * 8

    setRecipes([...D8].splice(index,8))
    dispatch(paginado9(recipes))
    setPagina(anterior)

   

   }


    return (
        <>
     <button onClick={Anterior}>Anterior</button>
     <label >Pagina: {pagina}</label>
     <button onClick={Siguiente}>Siguiente</button>
     </>
    )
}

export default Paginado