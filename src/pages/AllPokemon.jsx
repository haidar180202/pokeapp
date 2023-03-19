import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard ";
import { Allpokemons } from "../redux/actions/PokemonAction";


const AllPokemon = (props) => {
  // const [allPokemon, setAllPokemon] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [count, setCount] = useState(20);
  // const [jumlah, setJumlah] = useState(0);
  
  // const dispatch = useDispatch();

  
  
  // // dispatch(AllPokemon(allPokemon))
  // // const Loading = () => {
  // //   <>Loading...</>;
  // // };

  const Loadmore = async () => {
    props.setCount(props.count + 20);
    
  };

  // useEffect(() => {
  //   const fetchPokemon = async () => {
  //     try {
  //       const respon = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon?limit=${count}`
  //       );

  //       // const respon1 = await axios.get(
  //       //   `https://pokeapi.co/api/v2/pokemon?limit=${jumlah}`
  //       // );

  //       setJumlah(respon.data.count);

  //       const pokemonData = await Promise.all(
  //         respon.data.results.map(async (pokemon) => {
  //           const pokemonResponse = await axios.get(pokemon.url);
            
  //           return {
  //             id: pokemonResponse.data.id,
  //             name: pokemonResponse.data.name,
  //             data: pokemonResponse.data,
  //           };
            
  //         })
  //       );

        
  //       // let nilai = []

  //       setAllPokemon([...pokemonData], [...allPokemon, allPokemon]);
        
  //     } catch (error) {
  //       setLoading(true);
  //       console.log(error.message);
  //     }
  //   };
  //   fetchPokemon();
    
  // }, [count]);
  // console.log(props.allPokemon);
  return (
    <div className="Allpokemon">
      <div className="container">
        <div className="row">
          {props.allPokemon.map((x, index) => {
            if (x.name !== undefined) {
              // dispatch(Allpokemons(x));
              // console.log(x)
              return (
                <PokemonCard x={x} />
              );

              
            }
          })}
          

          <button onClick={Loadmore}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default AllPokemon;
