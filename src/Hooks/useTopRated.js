import { TTMB_API } from '../Utilities/constants'
import { useDispatch } from 'react-redux'
import  { addTopRated } from '../Utilities/nowPLayingMovies'
import { useEffect } from 'react'


const useTopRated = ()=>{
const dispatch = useDispatch()
  useEffect(()=>{
    getTopRated()
  },[])

  const getTopRated = async () => {
    try{
    const data = await fetch('https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' , TTMB_API)
    const json = await data.json()
     console.log(json.results ,"json data")
    dispatch(addTopRated(json.results))
    }catch(e){
      console.log(e)
    }
  }
}


export default useTopRated;