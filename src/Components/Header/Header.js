import React from 'react'
import { HeaderMenu, Menu, NavContainer, Search } from './HeaderStyled'
import LogoImg from '../../../src/Assets/logo.png'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  function activeScroll() {
    const menu = document.querySelector('#ativo')
    menu.classList.toggle('ativo', window.scrollY > 10)
  }

  window.addEventListener('scroll', activeScroll)

  return (
    <HeaderMenu id="ativo">
      <NavContainer>
        <Menu>
          <a href="/">
            <img src={LogoImg} alt="Netflix" />
          </a>
          {/* <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Filmes</a>
            </li>
            <li>
              <a href="#">Séries</a>
            </li>
            <li>
              <a href="#">Programas de TV</a>
            </li>
          </ul> */}
        </Menu>
        {/* <Search>
          <input type="text" placeholder="Títulos, gente e gêneros" />
          <FaSearch className="icone" />
        </Search> */}
      </NavContainer>
    </HeaderMenu>
  )
}

export default Header
