import React from 'react'
import { useState } from 'react'


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
  
 
  const movieInfo = allMovies.forEach(movie =>  <span key={movie.name}>{movie}</span> );
  console.log(movieInfo)
  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >
        <div className='layout-column w-40'>
          {/* use this header for movie name */}
          <h3 className='my-3'></h3>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
          <p className='my-0'></p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
          <p className='justify-content-end'></p>
        </div>
      </li>
      </ul>
    </section>
  )
}

export default Movieslist;
