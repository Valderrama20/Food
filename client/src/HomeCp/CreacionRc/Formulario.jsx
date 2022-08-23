import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import sty from "./formulario.module.css"

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
            var error = document.getElementById("errorT")

            if(RE.LN.test(e.target.value) || e.target.value === "") {
                title.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)}
             else{
                title.classList.add(sty.Error) 
                error.classList.add(sty.Error_TitleA)
            }
                break;

           case "summary":
            var summary = document.getElementById("summary")
            var error = document.getElementById("errorS")
            if(RE.L2.test(e.target.value)){
                summary.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
            }
            else{  
                summary.classList.add(sty.Error)
                error.classList.add(sty.Error_TitleA)
            }

                break;
            case "healthScore":
            var healthScore = document.getElementById("healthScore")
            var error = document.getElementById("errorH")
            if(RE.A0.test(e.target.value)) {
                healthScore.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
            }
            else {
                healthScore.classList.add(sty.Error)
                error.classList.add(sty.Error_TitleA)
            }
              break;

            case "steps":
              var steps = document.getElementById("steps")
              var error = document.getElementById("errorSt")
            if(RE.L2.test(e.target.value)) {
                steps.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
            }
            else {
                 steps.classList.add(sty.Error)
                 error.classList.add(sty.Error_TitleA)
                }

            default:
                break;

        }     
        /// me deshabilita o activa el boton para crear  
        var si = document.getElementById("btn")
        if(RE.LN.test(data.title) && RE.L2.test(data.summary)) si.disabled = false
        else si.disabled = true
        
            
    }
    const diets2 = []


    const crear = async (e) => {
        e.preventDefault()
       const creado = await axios.post("http://localhost:3001/recipes", {...data, diets:diets2})
       console.log({...data, diets:diets2})
    }
    
    return <div className={sty.form}>

    <form onSubmit={crear} >
        <div className={sty.name}>
        <label >Name: </label>
        <input type="text" name="title" onChange={set} id="title"/>
        <p className={sty.Error_Title} id="errorT">Debe tener minimo 4 caracteres y maximo 200 sin numeros ni signos especiales</p>
        </div>

        <div className={sty.name}>
        <label htmlFor="" >Summary: </label>
        <input type="text" name="summary" onChange={set} id="summary"/>
        <p className={sty.Error_Title} id={"errorS"}>Debe tener minimo 20 caracteres y maximo 500 sin numeros ni signos especiales</p>
        </div>

         <div className={sty.name}>
        <label htmlFor="" >Score: </label>
        <input type="number" name="healthScore" onChange={set} id="healthScore"/>
          <p className={sty.Error_Title} id="errorH"> Solo se aceptan numereros del 0 al 100</p>
        </div>

        <div className={sty.name}>
        <label htmlFor="">Steps</label>
        <input type="text" name="steps" onChange={set} id="steps"/>
        <p className={sty.Error_Title} id="errorSt">Debe tener minimo 20 caracteres y maximo 500 sin numeros ni signos especiales</p>
        </div>
        <label htmlFor=""> Diets: </label>
        <div className={sty.steps}>
            {diets.map(e => {
                return <button onClick={() => diets2.push(e.id)} key={e.id} className={sty.step}>{e.name}</button>
            })}
        </div>
        
         <input type="submit" id="btn" disabled/>
         
    </form>
       
          
    </div>
}

export default Form

// Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Resumen del plato
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
// [ ] Botón/Opción para crear una nueva receta