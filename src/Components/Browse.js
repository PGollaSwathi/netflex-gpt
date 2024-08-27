
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainVideoContainer from './MainVideoContainer'
import SecondaryvideoContainer from './SecondaryvideoContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
const Browse = () => {
useNowPlayingMovies()
usePopularMovies()
useTopRated()

  return (
    <div>
      <Header/>
      <MainVideoContainer/>
      <SecondaryvideoContainer/>
    </div>
  )
}

export default Browse