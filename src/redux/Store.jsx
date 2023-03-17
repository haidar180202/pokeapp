import { createStore } from "redux";
import { pokemonReducer } from "./Reducers/PokemonReducer";

export const Store = createStore(pokemonReducer) ;