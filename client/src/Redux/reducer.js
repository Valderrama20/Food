const initialState = {
    Paginado:[],
    Cars:[],
    Diets:[],
    Detalle:{}

}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "Todas":
            return {
                ...state,
                Cars: action.payload.recipes,
                Paginado: action.payload.recipes.slice(0,9),
                Diets: action.payload.diets,
                Detalle: {}
            }
        case "Busqueda":
        return {
          ...state,
          Cars: action.payload
        }
        case "Orden": 
        return {
            ...state,
            Cars: action.payload
        }
        case "Filtro":
            return {
                ...state,
                Cars: action.payload
            }
        case "Detalle":
            console.log("estoy en detalles")
            return {
                ...state,
                Detalle: action.payload
            }
        case "siguienteP":
            return{
                ...state,
                Paginado: action.payload
            }
        case "limpiar":
            return{
                ...state,
                Detalle:{}
            }
        default:{
            return state
        }
            
    }
}