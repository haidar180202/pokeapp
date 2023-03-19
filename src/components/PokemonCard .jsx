import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/component.css";

const PokemonCard = ({x}) => {
    console.log(x.data.types[0].type.name)
  return (
    <div className="col-lg-3">
        <div className=" card my-2" key={x.id}>
      <Link to={`/allpokemon/${x.id}`} className={`text-decoration-none pokemon-card ${x.data.types[0].type.name}`}>
        <div className="m-3 d-flex text-center justify-content-center">
          <div>
            <img src={x.data.sprites.front_default} alt={x.name} />
            <p className="text-white">{x.name}</p>
          </div>
        </div>
      </Link>
    </div>
    </div>
    
  );
};

export default PokemonCard;
