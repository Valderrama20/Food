import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import sty from "./formulario.module.css"
import { recipesAll } from "../../Redux/actions";
import {Link} from "react-router-dom"
const RE = {LN:/^[a-zA-Z\s]{4,200}$/,
            L2:/^[0-9a-zA-Z\S|\s]{50,1000}$/,
            A0:/^(0|[1-9][0-9]?|100)$/}
            


         let t; 
         let s ;
         let n;
         let st

const Form = () => {
    var dispatch = useDispatch()
    useEffect(() => {dispatch(recipesAll)},[dispatch])
    const diets = useSelector(state => state.Diets) 
   const[data, setData] = useState({title: "", summary:"", healthScore:"", steps: ""})
     
   const set = (e) => {

    var name = e.target.name === "healthScore" && e.target.value === ""? 0: e.target.name

        setData({...data, [name]: e.target.value })
        

        switch (e.target.name) {
            case "title":
            var title = document.getElementById("title")
            var error = document.getElementById("errorT")

            if(RE.LN.test(e.target.value) || e.target.value === "") {
                title.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
               t = true
            }
               
             else{
                title.classList.add(sty.Error) 
                error.classList.add(sty.Error_TitleA)
                t = false
            }
                break;

           case "summary":
            var summary = document.getElementById("summary")
            var error = document.getElementById("errorS")
            if(RE.L2.test(e.target.value)){
                summary.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
                s = true
            }
            else{  
                summary.classList.add(sty.Error)
                error.classList.add(sty.Error_TitleA)
                s = false
            }


                break;
            case "healthScore":
            var healthScore = document.getElementById("healthScore")
            var error = document.getElementById("errorH")
            if(RE.A0.test(e.target.value)) {
                healthScore.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
                n = true
            }
            else {
                healthScore.classList.add(sty.Error)
                error.classList.add(sty.Error_TitleA)
                n = false
            }
              break;

            case "steps":
              var steps = document.getElementById("steps")
              var error = document.getElementById("errorSt")
            if(RE.L2.test(e.target.value)) {
                steps.classList.remove(sty.Error)
                error.classList.remove(sty.Error_TitleA)
                st = true
            }
            else {
                 steps.classList.add(sty.Error)
                 error.classList.add(sty.Error_TitleA)
                 st = false
                }

            default:
                break;

        }     
        /// me deshabilita o activa el boton para crear  
        var si = document.getElementById("btn")
        if(t && s && n && st) si.disabled = false
         else si.disabled = true 
         console.log(t,s,n,st)
            
             
    }
    var diets2 = []


    var checkBox = document.querySelectorAll(".CheckBox")
   const Checked = () => {
     diets2 = []
     for(const si of checkBox){
     if(si.checked === true) diets2.push(si.defaultValue*1)
         }
    }
    
    const crear = async (e) => {
        Checked()
        e.preventDefault()
       const creado = await axios.post("http://localhost:3001/recipes", {...data, diets:diets2})
       
       setData({title: "", summary:"", healthScore:"", steps: ""})

       checkBox.forEach(e => e.checked = false)

       t = false; s = false; n = false; st = false

       alert(creado.data)
    }

    
    return <div className={sty.container}>
       
    <div className={sty.form} id={sty.form}>
    
    <form onSubmit={crear} >
        <div className={sty.name}>
        <label >Name: </label>
        <input type="text" name="title" onChange={set} id="title" value={data.title}/>
        <p className={sty.Error_Title} id="errorT">Debe tener minimo 4 caracteres y maximo 200 sin numeros ni signos especiales</p>
        </div>

        <div className={sty.name}>
        <label htmlFor="" >Summary: </label>
        <input type="text" name="summary" onChange={set} id="summary" value={data.summary}/>
        <p className={sty.Error_Title} id={"errorS"}>Debe tener minimo 50 caracteres y maximo 1000</p>
        </div>

         <div className={sty.name}>
        <label htmlFor="" >Score: </label>
        <input type="number" name="healthScore" onChange={set} id="healthScore" value={data.healthScore}/>
          <p className={sty.Error_Title} id="errorH"> Solo se aceptan numereros del 0 al 100</p>
        </div>

        <div >
        <label className={sty.name}>Steps</label>
        <input type="text" name="steps" onChange={set} id="steps" value={data.steps}/>
        <p className={sty.Error_Title} id="errorSt">Debe tener minimo 50 caracteres y maximo 1000 sin numeros ni signos especiales</p>
        </div>

        <label htmlFor=""> Diets: </label>
        <div >
            {diets.map(e => {
                
                return <><input type="checkBox" defaultValue={e.id} key={e.id} className="CheckBox" /> {e.name}</>
            })
              }
        </div>
        
         <input type="submit" id="btn" className={sty.btn} disabled/>
         
    </form>
         </div>
         <Link to="/home">
        <button className={sty.btn}>Volver</button>
        </Link>
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