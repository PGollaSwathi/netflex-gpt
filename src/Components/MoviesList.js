import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title , movies}) => {
    // console.log(movies,"mo")
    if (movies == null) return null ;
  return (
    <div >
        <div > 
        <h1 className='text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar' >
            {
                movies.map(movie =>  <MoviesCard key={movie.id} photo={movie.poster_path}/>)
            }
       </div>
    </div>
    {/* <MoviesCard  photo={movies[0].poster_path}/> */}
    </div>
  )
}

export default MoviesList