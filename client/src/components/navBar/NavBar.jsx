import React from 'react'

import './navBar.css'

const NavBar = ({ handleChange, handleFind }) => {
  return (
    <div className='search-container'>
      <form action="" onChange={handleChange}>
        <input type="search" placeholder='Search' />
        <button type='submit' onClick={ handleFind }>Find</button>
      </form>
    </div>
  )
}

export default NavBar