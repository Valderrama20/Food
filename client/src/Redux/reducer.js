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
                Paginado: action.payload.recipes.splice(0,8),
                Diets: action.payload.diets
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
            return {
                ...state,
                Detalle: action.payload
            }
        case "siguienteP":
            return{
                ...state,
                Paginado: action.payload
            }
        default:{
            return state
        }
            
    }
}