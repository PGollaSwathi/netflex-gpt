import { TTMB_API } from '../Utilities/constants'
import { useDispatch } from 'react-redux'
import  { addNowPopularMovies } from '../Utilities/nowPLayingMovies'
import { useEffect } from 'react'

const usePopularMovies = ()=>{
const dispatch = useDispatch()
  useEffect(()=>{
    getPopularMovies()
  },[])

  const getPopularMovies = async () => {
    try{
    const data = await fetch('https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' , TTMB_API)
    const json = await data.json()
    
    dispatch(addNowPopularMovies(json.results))
    }catch(e){
      console.log(e)
    }
  }
}


export default usePopularMovies