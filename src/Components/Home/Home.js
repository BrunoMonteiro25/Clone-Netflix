import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { APIKey } from '../../Config/api'
import { Container, Movie, MovieList, Banner } from './HomeStyled'
// import { Link } from 'react-router-dom'
import BG from '../../../src/Assets/bg.jpg'

function Home() {
  const [movies, setMovies] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR&page=1`,
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])

  return (
    <>
      <Banner>
        <img src={BG} alt="" />
      </Banner>
      <Header />

      <Container>
        <h1>Populares Netflix</h1>
        <MovieList>
          {movies.map((movie) => {
            return (
              <Movie key={movie.id}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
                <span>{movie.title}</span>
              </Movie>
            )
          })}
        </MovieList>
      </Container>
      <footer>
        Direitos de imagem para Netflix<br></br>
        API do site themoviedb.org
      </footer>
    </>
  )
}

export default Home
