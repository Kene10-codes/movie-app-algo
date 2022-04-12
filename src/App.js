import React, {useState} from 'react'
import './App.css'
import 'h8k-components'
import { AppContext } from './components/useContext'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [movies, setMovies] =  useState([
    {
      name: "Nightwolf",
      rating: "90",
      duration: "19"
    },
    {
      name: "Sage",
      rating: "50",
      duration: ""
    }, {
      name: "Spartacus",
      rating: "90",
      duration: "19"
    }
  ])

  const [filterMovies, setFilterMovies] = useState(movies)
  
  function addMovie(film) {
    setFilterMovies(prev => [...prev, film])
  }
  const [searchTerm, setSearchTerm ] = useState("")

  return (
    <AppContext.Provider value={{ 
      searchTerm, 
      setSearchTerm, 
      addMovie, 
      filterMovies, 
      setFilterMovies, 
      setMovies 
      }}>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform />
        </div>
        <div className='layout-column w-30'>
          <Search />
          <Movieslist /> 
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </AppContext.Provider>
  )
}

export default App;
