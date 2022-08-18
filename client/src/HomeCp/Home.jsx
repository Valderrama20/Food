import React, { useEffect } from "react";
import Card from "./Card";
import { recipesAll } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(recipesAll)}, [dispatch])
    const Cars = useSelector(state => state.Cars)

    if(Cars.length)
    return(
        <>
        <button onClick={() => console.log(Cars)}>Cars</button>
        <Nav/>
        <ol>
            {Cars.map(e => {
                return <Card key={e.id}
                              id={e.id}
                              img={e.image}
                               name={e.title}
                                diets={e.diets.map(e => `${e}, `)}/>
            })}
        </ol>
        </>
    )
    else return "Cargando"
}

export default Home;