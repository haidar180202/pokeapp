import React from 'react'
import "./assets/css/component.css";

const CardDetail = (props) => {
  console.log(props.datapokemon)
  return (
    <div className=" row p-3">
      <div className="col-lg-12 bayangan card  p-0 my-4">
        <div className={`text-decoration-none pokemon-card ${props.datapokemon.data.types[0].type.name}`} >
          <div className={`row`}>
            <div className="col-lg-5 mb-5" >
              <img src={props.datapokemon.data.sprites.other.home.front_default}  alt="Image" style={{ width: "auto", height: "380px", objectFit: "cover" }}/>
            </div>

            <div className="col-lg-7">
              tulisan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetail