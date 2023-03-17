import { ActionTypes } from "../Types/ActionTypes";

const initialState = {
    //pokemon: allpokemon 
    
  };
    
  export function pokemonReducer(state = initialState, action) {
      switch (action.type) {
        case ActionTypes.ALL_POKEMON:
          const pokemon = action.payload
        
        return {
         ...state , pokemon
        }        
        
          
        default:
          return state;
        }
    }