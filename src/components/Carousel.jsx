import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgr from "./assets/gambar/backgroundlatar.jpg";
import pokemonhover from "./assets/gambar/pokemonhover.png";
import poke1 from "./assets/gambar/pokemon1.png";
import "./assets/css/component.css";
import pokeaudio from './assets/audio/pikachuaudio.mp3'
import { Button, Col, Container, Row } from "react-bootstrap";
function Carousel() {
  const [isHovered, setIsHovered] = useState(false);
  const [audio] = useState(new Audio(pokeaudio));


  const hoverpoke = () =>{
    setIsHovered(true);
    audio.play();
  }

  return (
    <div className="Carousel row m-0">
      <div className=" min-vh-100 py-5">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-12  ">

            <Link to="/" className=" d-flex justify-content-center">
            <img
                src={isHovered ? pokemonhover :  poke1 }
                alt="gambar"
                height={'auto'}
                className="row"
                onMouseEnter={hoverpoke}
                onMouseLeave={() => setIsHovered(false)}
              />
              
            </Link>
          </div>

          <div className="col-lg-5 text-center col-md-12 mt-3 ">
            <h5 className="card-title mt-5 text-white my-2">
              <b>W E L C O M E</b>
              <b className="mx-3 my-2">T O</b>
              <b>P O K E M O N</b>
              <b className="mx-3 my-2">A P P</b>
            </h5>
            <p class="card-text text-warning my-4">
              <b className=" text-center">
                All Of The Simulation Get The Pokemon
              </b>{" "}
            </p>

            <h5 className="card-text text-white fw-bold my-4">
              The Developer Has Be Created
            </h5>

            <h5 className="card-text text-warning fw-bold my-4">
              Muhammad Haidar Shahab
            </h5>

            <div className="row mt-4">
              <div className="col-lg-6 ">
                <Link to="/allpokemon" className="btn btn-danger mb-2">
                  All Pokemon
                </Link>
              </div>

              <div className="col-lg-6">
                <Link to="/mypokemon" className="btn btn-success">
                  My Pokemon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
