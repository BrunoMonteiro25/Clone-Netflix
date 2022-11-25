import React from 'react'
import { ModalDiv, Container, Content } from './ModalStyled'
import { image_path } from '../Slide/Slide'

const ModalMovie = ({
  id = 'modalmovie',
  onClose = () => {},
  children,
  movieSelected,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  const age = [10, 12, 14, 16, 18]
  const ageRandom = Math.floor(Math.random() * age.length)

  const time = ['3h2m', '2h00', '1h30', '1h20', '2h30', '1h06']
  const timeRandom = Math.floor(Math.random() * time.length)

  const quality = ['full hd', 'hd']
  const qualityRandom = Math.floor(Math.random() * quality.length)

  const dateRelease = movieSelected.release_date || movieSelected.first_air_date
  const newDate = dateRelease.substr(0, 4)

  const overviewFormat = movieSelected.overview
  const newOverview = overviewFormat.substr(0, 105)

  const movieName =
    movieSelected.name ||
    movieSelected.original_name ||
    movieSelected.original_title

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <button onClick={onClose} />
        <Content>
          <img
            src={`${image_path}${movieSelected.backdrop_path}`}
            alt={movieSelected.name}
          />
          <div className="info">
            <div className="details">
              <p>{newDate}</p>
              <p className="age">{age[ageRandom]}</p>
              <p>{time[timeRandom]}</p>
              <p className="hd">{quality[qualityRandom]}</p>
            </div>
            <h3>{movieName}</h3>
            <p className="sinopse">{newOverview}...</p>
          </div>
          <div className="info-gen">
            <h4>Elenco: </h4>
            <p>
              Robert Downey Jr, Chris Evans, Scarlett Johansson, Chris
              Hemsworth.
            </p>
            <div className="genero">
              <h4>Gêneros: </h4>
              <p>
                Ação, Aventura, Filme de super-héroi, Ficção cientifica,
                Fantasia.
              </p>
            </div>
            <div>
              <h4>Direção: </h4>
              <p>Anthony Russo, Joe Russo.</p>
            </div>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalMovie
