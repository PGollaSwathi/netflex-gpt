import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({title , movies}) => {
    console.log(movies,"mo")
    if (!movies) return null
  return (
    <div >
        <div className='flex'> 
        <h1 className=''>{title}</h1>
       
        <div className='flex' >
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