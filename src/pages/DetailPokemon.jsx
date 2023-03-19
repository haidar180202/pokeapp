import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

function DetailPokemon() {
  // get data redux
  const { id } = useParams();
  const allpokemonn = useSelector((state) => state);

  // get api data request if data not exist

  return (
    <>
      {/* {allpokemonn.pokemon[]} */}
      {allpokemonn.pokemon !== undefined || allpokemonn.pokemon == ""
        ? allpokemonn.pokemon[id - 1] !== undefined
          ? allpokemonn.pokemon[id - 1].id == id
            ? allpokemonn.pokemon[id - 1].name
            : "Id Pokemon Is Not Found"
          : "Proses get data api"
        : "Loading..."}
    </>
  );
}

export default DetailPokemon;
