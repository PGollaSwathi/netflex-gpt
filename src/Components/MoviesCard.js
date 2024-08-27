import React from 'react'
import { CDN_IMG } from '../Utilities/constants'


const MoviesCard = ({photo}) => {

    console.log(photo, "photo")
  return (
    <div className='playing_images'>
     <img  className='w-44 h-44' alt='logo' src={CDN_IMG + photo}/>
    </div>
  )
}

export default MoviesCard