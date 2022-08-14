import React from 'react'
import StyledMovie from './Movie.style'

const Movie = (props) => {
  return (
    <StyledMovie as='li'>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
    </StyledMovie>
  )
}

export default Movie