import axios from "axios";
import { init } from "../HomeCp/Paginado";



let recipes
let diets

export const recipesAll = async (dispatch) => {
  
  if(!recipes || !diets){
    recipes = await axios.get("http://localhost:3001/recipes/all")
   diets = await axios.get("http://localhost:3001/diets")
   dispatch({type:"Todas", payload: {recipes: recipes.data, diets: diets.data}})
  }
   
 
}

export const serch = (name) => async dispatch => {
 const busqueda = await axios.get(`http://localhost:3001/recipes?name=${name}`)

 if(!busqueda.data.length){ 
  alert(`Not recipes found whit the name:"${name}"`)
}
 else dispatch({type:"Busqueda", payload: busqueda.data}); 
 init()
}

//////////// me ordena por orden alfabetico de la "A" a la "Z" y viceversa\\\\\\\\\\\\

export const porNombre = (data) => (dispatch) => {
    function ordenA_Z(a, z) {
        
      var name1 = a.title.toLowerCase()
      var name2 = z.title.toLowerCase()
      if (name1 > name2) {
        return data === "A_Z" ? 1 : -1
      }
      if (name1 < name2) {
        return data === "A_Z" ? -1 : 1
      }
      return 0
    }
    console.log(recipes)
   var recipes2 = [...recipes.data.sort(ordenA_Z)]
    dispatch({type: "Orden", payload: recipes2})
    init()
  }

  ///////me ordena por peso de menor a mayor y viceversa\\\\\\\\\\\\\\

export const porScore = (data) => (dispatch) => {
  
    var ordenScore = (a, z) => {
      var peso1 = a.healthScore
      var peso2 = z.healthScore
      if (peso1 > peso2) {
        return data === "D1_100" ? 1 : -1
      }
      if (peso1 < peso2) {
        return data === "D1_100" ? -1 : 1
      }
      return 0
    }
    var score = [...recipes.data.sort(ordenScore)]
     dispatch({ type: "Orden", payload: score })
     init()

  }
    ////// me filtra por dietas \\\\\

export const filtrar = (data) => dispatch => {
   
 const filtrado = recipes.data.filter(e => e.diets.includes(data))
 

 if(filtrado.length) dispatch({type: "Filtro" , payload: filtrado})
 else alert(`Not recipes found "${data}"`)
 init()


}
      //// me trae el detalle\\\\\\

export const detalleA = (data) => async dispatch =>{
const detalle = await axios.get(`http://localhost:3001/recipes/detalle/${data}`)

dispatch({type: "Detalle", payload: detalle.data})

}

export const paginado9 = (data) => dispatch => {

  dispatch({type:"siguienteP", payload: data})

}