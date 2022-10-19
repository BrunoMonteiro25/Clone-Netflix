import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { APIKey } from '../../Config/api'
import {
  Container,
  Movie,
  MovieList,
  Banner,
  Footer,
  Details,
} from './HomeStyled'
// import { Link } from 'react-router-dom'
import BG from '../../../src/Assets/bg.jpg'

import { BsFillPlayFill } from 'react-icons/bs'

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
      <Details>
        <div>
          <h3>Mulan</h3>
          <p>
            Para salvar seu pai doente de servir no Exército Imperial, uma jovem
            destemida se disfarça de homem para lutar contra os invasores do
            norte da China.
          </p>
          <button className="button">
            <BsFillPlayFill className="icone" />
            Assistir
          </button>
        </div>
      </Details>

      <Container>
        <h1>Populares na Netflix</h1>
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

      <Footer>
        <p>
          Direitos de imagem para Netflix
          <br></br>
          API do site themoviedb.org
        </p>
      </Footer>
    </>
  )
}

export default Home
