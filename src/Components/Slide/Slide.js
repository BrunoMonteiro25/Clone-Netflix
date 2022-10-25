import React from 'react'
import { getMovies } from '../../Config/api'
import { SlideContainer } from './SlideStyled'

const Slide = ({ title, path }) => {
  const [movies, setMovies] = React.useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path)
      console.log('data ', data)
      setMovies(data?.results)
    } catch (error) {
      console.log('fetchMovies error: ', error)
    }
  }

  React.useEffect(() => {
    fetchMovies(path)
  }, [path])

  return (
    <SlideContainer>
      <h2>{title}</h2>
      <div className="movies">
        {movies?.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${image_path}${movie.poster_path}`}
              alt={movie.name}
            />
          )
        })}
      </div>
    </SlideContainer>
  )
}

export default Slide
