import React, { useEffect } from 'react'
import { TTMB_API } from '../Utilities/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addVideoTrainer } from '../Utilities/nowPLayingMovies'
const VideoBackground = ({id}) => {
    const trailerKey = useSelector(store => store.movies?.videoTrailer)

    // if (trailerKey == null) return
    // console.log(trailerKey, "trailerKey")
    const dispatch = useDispatch()
const getOneVideo = async () => {
    try{
          const data = await fetch('https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US',TTMB_API)
          const json = await data.json()
        //   console.log(json)

          const trailers = json.results.filter(video => video.type == "Trailer")

        //   console.log(trailers)


          const nowTrailer = trailers.length  ? trailers[1] : json.results[0]

          dispatch(addVideoTrainer(nowTrailer))

        //   console.log(nowTrailer,"noe")
    }
    catch(e){
        console.log(e,"error")
    }
}

useEffect(()=>{
    getOneVideo()
  }, [])
 


  return (
    <div className='w-screen'>
    <div>
        <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/" + trailerKey?.key +"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
    </div>
  )
}

export default VideoBackground