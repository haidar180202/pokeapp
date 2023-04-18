import React from 'react'

function Images({styling , srcimage,altImages, stylingclassname}) {
  return (
    <img src={srcimage} alt={altImages} style={styling} className={stylingclassname}/>
  )
}

export default Images