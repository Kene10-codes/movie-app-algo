import React from 'react'
import { useState, useContext } from 'react'
import Movieslist from './Movieslist'
import { AppContext } from './useContext'


function Search() {
  // const [searchTerm, setSearchTerm ] = useState("")
const { setSearchTerm } = useContext(AppContext)

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange={e => setSearchTerm(e.target.value)}
      />

     
    </section>
  )
}

export default Search
