import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/component.css";
import Images from "./Images";

const PokemonCard = ({ x }) => {
  console.log(x.data.types[0].type.name);
  return (
    <div className="PokemonCard col-lg-3">
      <div className=" card my-3 bayangan" key={x.id}>
        <Link
          to={`/allpokemon/${x.id}`}
          className={`text-decoration-none pokemon-card ${x.data.types[0].type.name}`}
        >
          <div className="m-3 d-flex text-center justify-content-center">
            <div>
              <Images srcimage={x.data.sprites.other.home.front_default} altImages={x.name} styling={{height:140}}/>
              <p className="text-white" style={{fontSize:"18px"}}>{x.name}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
