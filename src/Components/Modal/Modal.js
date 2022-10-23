import React from 'react'
import { ModalDiv, Container, Content } from './ModalStyled'
import BG from '../../../src/Assets/bg.jpg'

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {
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
            <h3>Vingadores: Ultimato</h3>
            <p className="sinopse">
              Após Thanos eliminar metade das criaturas vivas, os Vingadores têm
              de lidar com a perda de amigos e entes queridos.
            </p>
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

export default Modal
