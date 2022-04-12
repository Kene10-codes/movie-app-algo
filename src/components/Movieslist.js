import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from './useContext'




function Movieslist() {

  const {filterMovies, searchTerm } = useContext(AppContext)

  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
    {filterMovies.filter(val => {
      if(searchTerm == ""){
        return val
      } else if(val.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
        return val
       }
      }).map(movie => (
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
          <div className='layout-column w-40'>    
             <h3 className='my-3'>{`${movie.name}`}</h3>
             <p className='my-0'>{`Rating: ${movie.rating} / 100`}</p>
          </div>
          <div className='layout-row my-auto mr-20'>
            <p className='justify-content-end'>{`${movie.duration} Hrs`}</p>
          </div>
       </li>
     ))}
      </ul>
    </section>
  )
}

export default Movieslist;
