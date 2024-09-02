import React from 'react';
import "./Buta.css"

function But({children, className} ) {
  return (
    <>
      <button className={className} >
        {children}
      </button>
    </>
  )
}

export default But
