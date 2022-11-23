import React from 'react'
import { ModalDiv, Container, Content } from './ModalMovieStyled'
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

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <button onClick={onClose} />
        <Content>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/spJoZReeIeQ?start=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <img src={`${image_path}${movieSelected.backdrop_path}`} alt="" />
          <div className="info">
            <div className="details">
              <p>{newDate}</p>
              <p className="age">{age[ageRandom]}</p>
              <p>{time[timeRandom]}</p>
              <p className="hd">{quality[qualityRandom]}</p>
            </div>
            <h3>
              {movieSelected.name ||
                movieSelected.original_name ||
                movieSelected.original_title}
            </h3>
            <p className="sinopse">{movieSelected.overview}</p>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalMovie
