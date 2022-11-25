import React from 'react'
import { useState } from 'react'
import { getMovies } from '../../Config/api'
import ModalMovie from '../Modal/ModalMovie'
import { SlideContainer, Image } from './SlideStyled'

export const image_path = 'https://image.tmdb.org/t/p/w500'

const Slide = ({ title, path }) => {
  const [movies, setMovies] = React.useState([])

  const [movieSelected, setMovieSelected] = useState([])

  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path)
      setMovies(data?.results)
    } catch (error) {
      console.log('fetchMovies error: ', error)
    }
  }

  React.useEffect(() => {
    fetchMovies(path)
  }, [path])

  function handleDetails(movie) {
    setIsModalVisible(true)
    setMovieSelected(movie)
    console.log(movie)
  }

  return (
    <>
      <SlideContainer>
        <h2>{title}</h2>
        <div className="movies">
          {movies?.map((movie) => {
            return (
              <>
                <Image
                  key={movie.id}
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.name}
                  onClick={() => handleDetails(movie)}
                />
              </>
            )
          })}
        </div>
        {isModalVisible ? (
          <ModalMovie
            onClose={() => setIsModalVisible(false)}
            movieSelected={movieSelected}
          />
        ) : null}
      </SlideContainer>
    </>
  )
}

export default Slide
