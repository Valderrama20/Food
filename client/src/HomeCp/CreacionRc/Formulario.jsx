import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./formulario.css"

const RE = {LN:/^[a-zA-Z\s]{4,200}$/,
            L2:/^[a-zA-Z\s]{20,500}$/,
            A0:/^(0|[1-9][0-9]?|100)$/}

const Form = () => {
    const diets = useSelector(state => state.Diets) 
   const[data, setData] = useState({title: "", summary:"", healthScore:0, steps: "", })
     
   const set = (e) => {
        setData({...data, [e.target.name]: e.target.value })

        switch (e.target.name) {
            case "title":
            var title = document.getElementById("title")
            if(RE.LN.test(e.target.value)) title.classList.remove("Error")
            else  title.classList.add("Error") 
                break;

           case "summary":
            var summary = document.getElementById("summary")
            if(RE.L2.test(e.target.value)) summary.classList.remove("Error")
            else  summary.classList.add("Error")

                break;
            case "healthScore":
            var healthScore = document.getElementById("healthScore")
            if(RE.A0.test(e.target.value)) healthScore.classList.remove("Error")
            else  healthScore.classList.add("Error")
              break;

            case "steps":
              var steps = document.getElementById("steps")
            if(RE.L2.test(e.target.value)) steps.classList.remove("Error")
            else  steps.classList.add("Error")

            default:
                break;
        }     
        
        
            
    }
    const diets2 = []


    const crear = async (e) => {
        e.preventDefault()
       const creado = await axios.post("http://localhost:3001/recipes", {...data, diets:diets2})
       console.log({...data, diets:diets2})
    }
    
    return <>
    <form onSubmit={crear} >
        <label >Name</label>
        <input type="text" name="title" onChange={set} id="title"/>
        <p id="Error_Title">tiene que tener mas de 4 caracteres y menos de 200 sin numeros ni signos especiales</p>
        <label htmlFor="" >Summary</label>
        <input type="text" name="summary" onChange={set} id="summary"/>
        <label htmlFor="" >Score</label>
        <input type="number" name="healthScore" onChange={set} id="healthScore"/>
        <label htmlFor="">Steps</label>
        <input type="text" name="steps" onChange={set} id="steps"/>
         <input type="submit" id="btn" disabled/>
    </form>
    <button onClick={() => console.log(diets2)}></button>
    <div>
            {diets.map(e => {
                return <button onClick={() => diets2.push(e.id)} key={e.id}>{e.name}</button>
            })}
        </div>
    </>
}

export default Form

// Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta