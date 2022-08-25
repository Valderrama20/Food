import React, { useEffect } from "react";
import Card from "./Card";
import { recipesAll } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import{ Paginado }from "./Paginado";
import sty from "./General_Css/Home.module.css"


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(recipesAll)}, [dispatch])
    
     const Cars = useSelector(state => state.Paginado)
 console.log(Cars);
    if(Cars.length)
    return(
       <div className={sty.container}>
        <nav className={sty.nav}> 
        <Nav/> 
        </nav>
      
        <ol>
            {Cars.map(e => {
                 var dietas = e.diets?e.diets.map(e => {return e.name? `${e.name}, `: `${e}, `}):(
                  e.Dieta && e.Dieta.length? e.Dieta.map(e => `${e.name}, `):false
                 )
                return <Card key={e.id}
                              id={e.id}
                              img={e.image}
                               name={e.title}
                                diets={dietas}/>
            })}
        </ol>
        <Paginado/>
        </div>
    )
    else return "Cargando"
}

export default Home;