import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Detail = () => {
  const { id } = useParams()
  const allDogs = useSelector(state => state.allDogs)
  const dogDetail = allDogs.find(dog => dog.id === parseInt(id))

  console.log(dogDetail.image)
  return (
    <div>
      {dogDetail ? (
        <div>
          <h1>{dogDetail?.name}</h1>
          <p>ID: {dogDetail?.id}</p>
          <img src={dogDetail?.image} alt={dogDetail.name} />
          <p>Height: {dogDetail?.height?.metric}</p>
          <p>Weight: {dogDetail?.weight?.metric}</p>
          <p>Temperaments: {dogDetail?.temperament}</p>
          <p>Life Span: {dogDetail?.life_span}</p>
        </div>
      ) : <p>Cargando...</p> }
    </div>
  )
}

export default Detail