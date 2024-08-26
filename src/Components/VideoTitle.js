import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-screen aspect-video absolute bg-gradient-to-r from-black text-white'>
        <h1 className='pt-[15%] px-24 text-6xl font-bold w-[600px]'>{title}</h1>
        <p className='px-24 pt-3 w-[600px] '>{overview}</p>
         <div className=' mt-5 px-24'>
            <button className='text-black bg-white rounded-lg p-3 w-40 hover:opacity-40'>Play</button>
            <button className='text-black bg-white rounded-lg p-3 w-40 ml-2 hover:opacity-45'>More Info</button>
         </div>
    </div>
  )
}

export default VideoTitle