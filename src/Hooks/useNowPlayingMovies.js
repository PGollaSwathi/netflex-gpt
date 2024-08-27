import { TTMB_API } from '../Utilities/constants'
import { useDispatch } from 'react-redux'
import nowPLayingMovies, { addNowPlayingMovies } from '../Utilities/nowPLayingMovies'
import React, { useEffect } from 'react'

const useNowPlayingMovies = ()=>{
const dispatch = useDispatch()
  useEffect(()=>{
    nowPLayingMovies()
  },[])

  const nowPLayingMovies = async () => {
    try{
    const data = await fetch('https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1' , TTMB_API)
    const json = await data.json()
    // console.log(json.results ,"json data")
    dispatch(addNowPlayingMovies(json.results))
    }catch(e){
      console.log(e)
    }
  }
}


export default useNowPlayingMovies