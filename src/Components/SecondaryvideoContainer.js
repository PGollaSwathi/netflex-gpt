import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryvideoContainer = () => {

    const movies = useSelector(store => store.movies)
    //  console.log(movies?.toprated ,"one")
    //  if (!movies?.nowPlayingadd || !movies?.nowPopularMovies) return null
  return (
  movies &&  <div className=' bg-black'>
    <div className='-mt-44 relative'>
    <MoviesList title={"Now Playing"} movies={movies?.nowPlayingadd}/>
      <MoviesList title={"Popular Movies"} movies={movies?.nowPopularMovies}/>
      <MoviesList title={"Top Rated"} movies={movies?.toprated}/>
      {/* <MoviesList title={"Now Playing"} movies={movies}/>
      <MoviesList title={"Now Playing"} movies={movies}/> */}
    </div>
      
    </div>
  )
}

export default SecondaryvideoContainer