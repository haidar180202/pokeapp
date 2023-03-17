import { ActionTypes } from "../Types/ActionTypes"

export const Allpokemons = (pokemon) => {
    // console.log(pokemon)
    return{
        type : ActionTypes.ALL_POKEMON,
        payload : pokemon,
        
    }
}