import React from 'react'
import { useRef, useContext } from 'react'
import { AppContext } from './useContext'

function Movieform({handler}) {
  const { addMovie } = useContext(AppContext)

  const movieName = useRef(null)
  const movieDuration = useRef(null)
  const movieRating = useRef(null)


function handleAddMovie(e) {
  e.preventDefault()

   const name = movieName.current.value
   const rating =  movieRating.current.value
   const duration = movieDuration.current.value
   const newMovie = {name, rating, duration}
   addMovie(newMovie)
}

 
  return (
    <section>
      <div className='card pa-30'>
        <form>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              ref={movieName}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              ref={movieRating}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              ref={movieDuration}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick={handleAddMovie}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
