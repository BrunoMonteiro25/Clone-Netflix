import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import categories from '../../Config/api'
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
import Logo from '../../../src/Assets/logo-n.png'

import { BsFillPlayFill } from 'react-icons/bs'

import Modal from '../Modal/Modal'
import Slide from '../Slide/Slide'

function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <Banner>
        <img src={BG} alt="" />
      </Banner>
      <Header />

      <Details>
        <div>
          <div className="filme">
            <img src={Logo} alt="Logo N" />
            <p>Filme</p>
          </div>
          <h3>Vingadores: Ultimato</h3>
          <p>
            Após Thanos eliminar metade das criaturas vivas, os Vingadores têm
            de lidar com a perda de amigos e entes queridos. Com Tony Stark
            vagando perdido no espaço sem água e comida, Steve Rogers e Natasha
            Romanov lideram a resistência contra o titã louco.
          </p>
          <button onClick={() => setIsModalVisible(true)} className="button">
            <BsFillPlayFill className="icone" />
            Assistir
          </button>
        </div>
      </Details>
      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)} />
      ) : null}

      {categories.map((category) => {
        return (
          <Slide
            key={category.name}
            title={category.title}
            path={category.path}
          />
        )
      })}

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
