import React, { useEffect } from "react";
import Card from "./Card";
import { recipesAll } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(recipesAll)}, [dispatch])
    const Cars = useSelector(state => state.Cars)

    if(Cars.length)
    return(
        <>
        <Link to="/Formulario">Formulario</Link>
        <Nav/>
        <ol>
            {Cars.map(e => {
                 var dietas = e.diets? e.diets: null
                return <Card key={e.id}
                              id={e.id}
                              img={e.image}
                               name={e.title}
                                diets={dietas}/>
            })}
        </ol>
        </>
    )
    else return "Cargando"
}

export default Home;