import React from 'react'
import Movie from '../Movie/Movie'
import StyledMovieList from './MovieList.style'

const MovieList = (props) => {
  return (
    <StyledMovieList>
        {props.movie.map((movie) => (
            <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            />
        ))}
    </StyledMovieList>
  )
}

export default MovieList