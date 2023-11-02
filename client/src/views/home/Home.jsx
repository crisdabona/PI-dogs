import React from 'react'

import NavBar from '../../components/navBar/NavBar'
import Cards from '../../components/cards/Cards'

import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <Cards />
    </div>
  )
}

export default Home