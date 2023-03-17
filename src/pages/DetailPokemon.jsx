import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

function DetailPokemon() {
  // get data redux
  const { id } = useParams();
  const allpokemonn = useSelector( state => state.pokemon[id-1])

  // console.log(allpokemonn);
  
  // get api data request if data not exist
  
  return (
    <>
    {allpokemonn.id}
    </>
  )
}

export default DetailPokemon