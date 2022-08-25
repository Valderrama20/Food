const axios = require("axios")
const { Router } = require("express")
const {Dieta, Recipe} = require("../db.js")
const apiCompleta= require("../Api_food/variablesApi")

const recipes = Router()
// GET /recipes?name="...":
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado

recipes.get("", async (req, res) => {
    const {name} = req.query

   const datosApi = apiCompleta.results
   const datosBd = await Recipe.findAll()
   const filter = [...datosApi, ...datosBd].filter(e => e.title.toLowerCase().includes(name.toLowerCase()))
   
   if(filter) res.send(filter)
    else res.send("No se encontraron recetas")
  
})

//GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados

recipes.get("/detalle/:id", async (req, res) => { 
    const {id} = req.params
   console.log("estoy en api               ")
    const datosApi = apiCompleta.results
   const datosBd = await Recipe.findAll({include: Dieta})

   const e = [...datosApi, ...datosBd].find(e => e.id === id*1)
    
   if(!e) return res.send("no hay")
   var pasos
   if(e.steps) pasos = e.steps
   else if(e.analyzedInstructions.length) pasos = e.analyzedInstructions[0].steps.map(e => e.step)
   else pasos = null
                                            
    var arreglo ={id: e.id,
                img: e.image,
                name: e.title ,
                dishTypes: e.dishTypes,
                diets: e.diets || e.Dieta,
                summary: e.summary,
                score: e.healthScore,
                steps: pasos
    }
    res.send(arreglo)
 
})
//POST /recipes:
//Recibe los datos recolectados desde el formulario controlado
// de la ruta de creación de recetas por body
//Crea una receta en la base de datos relacionada con sus tipos
// de dietas.

recipes.post("", async (req, res) => { 
 const {title,summary,healthScore,steps,diets} = req.body
 if(!title || !summary) return res.send("faltan Datos")

 try {
  const creado = await Recipe.create({title,summary,healthScore,steps}) 

  if(diets.length){
   for(let i = 0 ; i < diets.length; i++){
     const dieta = await Dieta.findOne({where:{id: diets[i]}})
      creado.addDieta(dieta)
   }
 }                             
 } catch (e) {
console.log(e)
    
 }
    res.send("Creado con exito")
})
          //rutas adicionales
          
///////////todas las recetas \\\\\\
recipes.get("/all", async (req, res) => {
const Api = apiCompleta.results
const Bd = await Recipe.findAll({include: Dieta})
const datos = [...Api, ...Bd].map(e =>{
  return  {id: e.id, title: e.title, image: e.image, diets: e.diets, healthScore: e.healthScore}
})

res.send(datos)

})





module.exports = recipes