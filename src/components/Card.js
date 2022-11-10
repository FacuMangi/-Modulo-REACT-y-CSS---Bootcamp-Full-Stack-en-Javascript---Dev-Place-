import React from 'react'

function Card({ nombre, precio, descripcion, imagen }) {

  return (
    <>
      <div class="card">
        <img src={imagen} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{nombre}</h5>
            <p class="card-text">{descripcion}</p>
            <a href="#" class="btn btn-primary">{precio}</a>
          </div>
      </div>
    </>
  )
}

export default Card