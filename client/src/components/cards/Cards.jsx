import React from 'react'

import Card from '../card/Card'

import './cards.css'
 
const Cards = ({ allDogs }) => {
  const dogList = allDogs

  return (
    <div className='cards-container'>
      {dogList?.map(dog => {
        return <Card key={dog.id} dog={dog}/>
      })}
    </div>
  )
}

export default Cards