
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainVideoContainer from './MainVideoContainer'
import SecondaryvideoContainer from './SecondaryvideoContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  const gptShow = useSelector(store => store.gpt.showGptSearch)
  console.log(gptShow ,"gptShow")
useNowPlayingMovies()
usePopularMovies()
useTopRated()

  return (
    <div>
      <Header/>
      { gptShow ?  <GptSearch/> :
       <>
         <MainVideoContainer/>
        <SecondaryvideoContainer/>
        </> }
     
    </div>
  )
}

export default Browse