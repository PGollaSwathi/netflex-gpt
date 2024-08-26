import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryvideoContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingadd)
  return (
  movies &&  <div>
      <MoviesList title={"Now Playing"} movies={movies}/>
      <MoviesList title={"Romantic"} movies={movies}/>
      <MoviesList title={"Now Playing"} movies={movies}/>
      <MoviesList title={"Now Playing"} movies={movies}/>
      <MoviesList title={"Now Playing"} movies={movies}/>
    </div>
  )
}

export default SecondaryvideoContainer