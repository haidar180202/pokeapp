import "./App.css";
import { Link, Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllPokemon from "./pages/AllPokemon";
import MyPokemon from "./pages/MyPokemon";
import DetailPokemon from "./pages/DetailPokemon";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Allpokemons } from "./redux/actions/PokemonAction";

function App() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(20);
  const [pre, setPre] = useState(0);
  const [next, setNext] = useState(0);
  // const [api, setApi] = useState("https://pokeapi.co/api/v2/pokemon?offset=0limit=8");

  const [jumlah, setJumlah] = useState(0);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchPokemon = async () => {

      try {
        const respon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${count}`
          
          // api
        );

        setJumlah(respon.data.count);

        const pokemonData = await Promise.all(
          respon.data.results.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            
            return {
              id: pokemonResponse.data.id,
              name: pokemonResponse.data.name,
              data: pokemonResponse.data,
            };
            
          })
        );

        
        // let nilai = []

        setAllPokemon([...pokemonData], [...allPokemon, allPokemon]);
        dispatch(Allpokemons([...pokemonData], [...allPokemon, allPokemon]))
      } catch (error) {
        setLoading(true);
        console.log(error.message);
      }
    };
    fetchPokemon();
    
  }, [count]);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App ">
      <Navbar/>
      <div className="lain">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allpokemon" element={<AllPokemon allPokemon={allPokemon} setCount={setCount} count={count}/>} />
        <Route path="/mypokemon" element={<MyPokemon/>}/>
        <Route path="/allpokemon/:id" element={<DetailPokemon/>}/>
      </Routes>
      
      </div>
      
      
    </div>
   
  );
}

export default App;
