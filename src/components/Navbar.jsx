import React from "react";
import { Link } from "react-router-dom";
import logoutama from "./assets/gambar/logoutama.png";
import "./assets/css/component.css";
const Navbar = () => {
  return (
    <div className="Navbar ">
      <nav class="navbar navbar-expand-lg bg-warning navbar-dark ">
        <div class="container">
          <Link to="/" class="navbar-brand" href="#">
            <img src={logoutama} height={35} className="mx-2" />
            Pokemon App
          </Link>
          <button
            class="navbar-toggler ouline-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mx-5" id="navbarNavAltMarkup">
            <div class="navbar-nav justify-content-center  ">
              <Link
                to="/"
                class="nav-link active mx-4"
                aria-current="page"
                style={{ fontSize: 14 }}
              >
                HOME
              </Link>
              <Link
                to="/allpokemon"
                class="nav-link mx-4"
                style={{ fontSize: 14 }}
              >
                ALL POKEMON
              </Link>
              <Link
                to="/mypokemon"
                class="nav-link mx-4"
                
                style={{ fontSize: 14 }}
              >
                MY POKEMON
              </Link>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
