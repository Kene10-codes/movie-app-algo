import React from 'react'
import { useState } from 'react'

function Movieform({allMovies}) {
  const [movieData, setMovieData] = useState([{
    name: "",
    rating: "",
    duration: ""
  }])

  const [error, setError] = useState("")
  

  function handleMovie(e){
    const { name, value } = e.target
    setMovieData(prev => {
         return {
           ...prev,
           [name]: value
         }

    })
  }

function handleSubmit(e) {
  e.preventDefault()
  let NewMovies = []
  NewMovies.push(movieData)
  allMovies.concat(NewMovies)


}

 
  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              name="name"
              value={movieData.name}
              onChange={handleMovie}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              name="rating"
              value={movieData.rating}
              onChange={handleMovie}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              name="duration"
              value={movieData.duration}
              onChange={handleMovie}
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
