import React from 'react'

import './navBar.css'

const NavBar = () => {
  return (
    <div className='search-container'>
      <form action="">
        <input type="text" placeholder='Search' />
        <button>Find</button>
      </form>
    </div>
  )
}

export default NavBar