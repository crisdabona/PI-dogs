import React from 'react'
import { useState ,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDogs, getByName } from '../../redux/actions'

import NavBar from '../../components/navBar/NavBar'
import Cards from '../../components/cards/Cards'
import Pagination from '../../components/pagination/Pagination'

import './home.css'

const Home = () => {
  const dispatch = useDispatch()
  const allDogs = useSelector(state => state.allDogs)
  const [searchStr, setSearchStr] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const dogsPerPage = 8

  const handleChange = (event) => {
    event.preventDefault()
    setSearchStr(event.target.value.toLowerCase())
  }

  const handleFind = (event) => {
    event.preventDefault()
    dispatch(getByName(searchStr))
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIdx = (currentPage - 1) * dogsPerPage;
  const endIdx = startIdx + dogsPerPage;
  const filteredDogs = allDogs.filter(dog => dog.name.toLowerCase().includes(searchStr));
  const dogsToDisplay = filteredDogs.slice(startIdx, endIdx);

  const totalPages = Math.ceil(filteredDogs.length / dogsPerPage)
 
  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  return (
    <div className='home-container'>
      <NavBar handleChange={ handleChange } handleFind={ handleFind } />
      <Cards allDogs={dogsToDisplay}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default Home