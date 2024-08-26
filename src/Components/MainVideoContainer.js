import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainVideoContainer = () => {

    const oneMovie = useSelector(store => store.movies?.nowPlayingadd)

     if (oneMovie == null) return

     const nowMovie = oneMovie[0]

    // console.log(nowMovie , "one")

    const {original_title , overview ,id } = nowMovie;

  return (
    <div>
        <VideoTitle title = {original_title} overview={overview}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainVideoContainer