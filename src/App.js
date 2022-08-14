
import React, { useState } from 'react'
import MovieList from './components/Movie/MovieList/MovieList';

const App = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovieHandler = async() => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://swapi.dev/api/films/')

      if (!response.ok) {
        throw new Error('Something went wrong here...')
      }

      const data = await response.json()



    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    })
    setMovies(transformedMovies)
    setIsLoading(false)
    }
    catch (error) {
      setError(error.message)

    }
    setIsLoading(false)
  }


  let differentRequestStates = <p>Found no movies</p>
  if(isLoading) {
    differentRequestStates = <p>Retrieving Data, please wait...</p>
  }
  if (!isLoading && movies.length > 0) {
    differentRequestStates = <MovieList movie={movies} />
  }
  if(!isLoading && movies.length === 0 && !error) {
    differentRequestStates = <p>Found no movies.</p>
  }
  if(!isLoading && error) {
    differentRequestStates = <p>{error}</p>
  }
  return (
    <React.Fragment>
    <section>
      <button onClick={fetchMovieHandler}>Fetch Movies</button>
    </section>
    <section>
      {differentRequestStates}
    </section>
  </React.Fragment>
  )
}

export default App
