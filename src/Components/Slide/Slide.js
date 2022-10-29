import React from 'react'
import { getMovies } from '../../Config/api'
import ModalMovie from '../Modal/ModalMovie'
import { SlideContainer } from './SlideStyled'

const Slide = ({ title, path }) => {
  const [movies, setMovies] = React.useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path)
      setMovies(data?.results)
    } catch (error) {
      console.log('fetchMovies error: ', error)
    }
  }
  console.log(movies)
  React.useEffect(() => {
    fetchMovies(path)
  }, [path])

  return (
    <>
      <SlideContainer>
        <h2>{title}</h2>
        <div className="movies">
          {movies?.map((movie) => {
            return (
              <img
                key={movie.id}
                src={`${image_path}${movie.poster_path}`}
                alt={movie.name}
                onClick={() => setIsModalVisible(true)}
              />
            )
          })}
        </div>
      </SlideContainer>
      {isModalVisible ? (
        <ModalMovie onClose={() => setIsModalVisible(false)} />
      ) : null}
    </>
  )
}

export default Slide
