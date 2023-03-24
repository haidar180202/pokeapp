import React from 'react'
import "./assets/css/component.css";

const CardDetail = (props) => {
  return (
    <div className=" row ">
      <div className="col-lg-12 bayangan my-4">
        <div className={`card m-3 text-decoration-none pokemon-card ${props.datapokemon.data.types[0].type.name}`} >
          <div className={`row`}>
            <div className="col-lg-6">
              gambarr
            </div>
            <div className="col-lg-6">tulisan</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetail