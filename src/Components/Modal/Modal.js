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
          <img src={BG} alt="" />
          <div className="details">
            <p>2019</p>
            <p className="age">12</p>
            <p>3h 2m</p>
            <p className="hd">hd</p>
          </div>
          <h3>Vingadores: Ultimato</h3>
          <p>
            Após Thanos eliminar metade das criaturas vivas, os Vingadores têm
            de lidar com a perda de amigos e entes queridos. Com Tony Stark
            vagando perdido no espaço sem água e comida, Steve Rogers e Natasha
            Romanov lideram a resistência contra o titã louco.
          </p>
        </Content>
      </Container>
    </ModalDiv>
  )
}

export default Modal
