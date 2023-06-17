import React from "react";
// type pokemon logo
import bug from "./assets/gambar/logoutama.png";
import dark from "./assets/gambar/fireType.png";
import fire from "./assets/gambar/fireType.png";
import fly from "./assets/gambar/logoutama.png";
import ghost from "./assets/gambar/logoutama.png";
import grass from "./assets/gambar/logoutama.png";
import dragon from "./assets/gambar/logoutama.png";
import electric from "./assets/gambar/logoutama.png";
import fight from "./assets/gambar/logoutama.png";
import ground from "./assets/gambar/logoutama.png";
import ice from "./assets/gambar/logoutama.png";
import normal from "./assets/gambar/logoutama.png";
import poison from "./assets/gambar/logoutama.png";
import psychic from "./assets/gambar/logoutama.png";
import rock from "./assets/gambar/logoutama.png";
import steel from "./assets/gambar/logoutama.png";
import water from "./assets/gambar/logoutama.png";
import fairy from "./assets/gambar/logoutama.png";

function TypesPoke({ name }) {
  return (
    <>
      {name == "bug" ? ( // check bug type 1
        <img src={bug} height="40" alt="logo" className="mx-1" />
      ) : name == "dark" ? ( // check dark type 2
        <img src={dark} height="40" alt="logo" className="mx-1" />
      ) : name == "fire" ? ( // check fire type 3
        <img src={fire} height="40" alt="logo" className="mx-1" />
      ) : name == "fly" ? ( // check fly type 4
        <img src={fly} height="40" alt="logo" className="mx-1" />
      ) : name == "ghost" ? ( // check ghost type 5
        <img src={ghost} height="40" alt="logo" className="mx-1" />
      ) : name == "grass" ? ( // check grass type 6
        <img src={grass} height="40" alt="logo" className="mx-1" />
      ) : name == "dragon" ? ( // check dragon type 7
        <img src={dragon} height="40" alt="logo" className="mx-1" />
      ) : name == "electric" ? ( // check electric type 8
        <img src={electric} height="40" alt="logo" className="mx-1" />
      ) : name == "fight" ? ( // check fight type 9
        <img src={fight} height="40" alt="logo" className="mx-1" />
      ) : name == "ground" ? ( // check ground type 10
        <img src={ground} height="40" alt="logo" className="mx-1" />
      ) : name == "ice" ? ( // check ice type 11
        <img src={ice} height="40" alt="logo" className="mx-1" />
      ) : name == "normal" ? ( // check normal type 12
        <img src={normal} height="40" alt="logo" className="mx-1" />
      ) : name == "poison" ? ( // check poison type 13
        <img src={poison} height="40" alt="logo" className="mx-1" />
      ) : name == "psychic" ? ( // check psychic type 14
        <img src={psychic} height="40" alt="logo" className="mx-1" />
      ) : name == "rock" ? ( // check rock type 15
        <img src={rock} height="40" alt="logo" className="mx-1" />
      ) : name == "steel" ? ( // check steel type 16
        <img src={steel} height="40" alt="logo" className="mx-1" />
      ) : name == "water" ? ( // check water type
        <img src={water} height="40" alt="logo" className="mx-1" />
      ) : name == "fairy" ? ( // check fairy type
        <img src={fairy} height="40" alt="logo" className="mx-1" />
      ) : (
        ""
      )}
    </>
  );
}

export default TypesPoke;
