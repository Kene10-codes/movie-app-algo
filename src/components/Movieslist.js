import React from 'react'
import { useState } from 'react'
import MovieForm from './Movieform'


function Movieslist() {

 const [allMovies, setAllMovies] =  useState([
    {
      name: "John Cage",
      rating: 50,
      duration: 5
    },
     {
      name: "Spartacus",
      rating: 70,
      duration: 12
    },
     {
      name: "Rambo II",
      rating: 99,
      duration: 3
    }
  ])
  
 
  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
    {allMovies.map(movie => (
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

      <MovieForm allMovies={allMovies} />
    </section>
  )
}

export default Movieslist;
