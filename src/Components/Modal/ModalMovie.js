import React from 'react'
import { ModalDiv, Container, Content } from './ModalMovieStyled'

const ModalMovie = ({ id = 'modalmovie', onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose()
  }

  return (
    <ModalDiv id={id} onClick={handleOutsideClick}>
      <Container>
        <button onClick={onClose} />
        <Content>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/spJoZReeIeQ?start=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="info">
            <div className="details">
              <p>2019</p>
              <p className="age">12</p>
              <p>3h 2m</p>
              <p className="hd">hd</p>
            </div>
            <h3>nome</h3>
            <p className="sinopse">sinopse</p>
          </div>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default ModalMovie
