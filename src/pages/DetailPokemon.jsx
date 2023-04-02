import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CardDetail from "../components/CardDetail";

function DetailPokemon() {
  const [pokeId, setPokeId] = useState([]);

  // get data redux
  const { id } = useParams();
  const allpokemonn = useSelector((state) => state);

  // get api data request if data redux is not exist
  const pokemonId = async () => {
    try {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokeId(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (id > 20) {
      pokemonId();
    }
  }, []);

  // console.log(pokeId.name);

  return (
    <div style={{minHeight:"595px"}}>
      {/* {allpokemonn.pokemon[]} */}
      {allpokemonn.pokemon !== undefined || allpokemonn.pokemon == "" ? (
        allpokemonn.pokemon[id - 1] !== undefined ? (
          allpokemonn.pokemon[id - 1].id == id  ? (
            <div className="container ">
                <CardDetail datapokemon={allpokemonn.pokemon[id - 1]} />
            </div>
          ) : (
            "Id Pokemon Is Not Found"
          )
        ) : pokeId === "" || pokeId === undefined ? (
          "Loading"
        ) : (
          <div className="container ">
            <CardDetail datapokemon={pokeId} />
          </div>
        )
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default DetailPokemon;
