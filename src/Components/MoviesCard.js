import React from 'react'
import { CDN_IMG } from '../Utilities/constants'


const MoviesCard = ({photo}) => {

    // console.log(photo, "photo")
  return (
    <div>
     <img  className='max-w-none w-44 h-auto p-2' alt='logo' src={CDN_IMG + photo}/>
    </div>
  )
}

export default MoviesCard