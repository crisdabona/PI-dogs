import React from 'react'
import {Link} from 'react-router-dom'

import './card.css'

const Card = ({ dog }) => {
  return (
    <div className='card-container'>
      <div>
        <Link to={`/home/${dog.id}`}>
          <h2>{dog.name}</h2>
          <img src={dog.image}></img>
        </Link>
      </div>
    </div>
  )
}

export default Card