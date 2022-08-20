import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginado9 } from "../Redux/actions";

const Paginado = () => {

    const dispatch = useDispatch()
   const D8 = useSelector((state) => state.Cars)
   const [recipes, setRecipes] = useState([...D8].splice(0,8))
   const [pagina, setPagina] = useState(1)

   const  Siguiente = () => {
    var nexPagina = pagina+1
    var index = nexPagina * 8
    setRecipes([...D8].splice(index, 8))
    if(recipes.length === 0) return
    setPagina(nexPagina)
    dispatch(paginado9(recipes))
    console.log(recipes)
   }

   const Anterior = () => {

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