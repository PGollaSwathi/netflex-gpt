
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainVideoContainer from './MainVideoContainer'
import SecondaryvideoContainer from './SecondaryvideoContainer'
const Browse = () => {
useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainVideoContainer/>
      <SecondaryvideoContainer/>
    </div>
  )
}

export default Browse