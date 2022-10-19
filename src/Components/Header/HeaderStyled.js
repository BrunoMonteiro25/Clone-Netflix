import styled from 'styled-components'

export const HeaderMenu = styled.header`
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 1000;

  &.ativo {
    background-color: #111;
    transition: 0.2s;
  }
`

export const NavContainer = styled.nav`
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 20px 50px;
    flex-direction: column;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.3s;
    font-size: 1rem;
    color: #eee;
  }

  a:hover {
    color: #bbb;
  }

  img {
    width: 92.5px;
    height: 25px;
    margin-top: 10px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  position: relative;

  @media (max-width: 991px) {
    margin-top: 1.5rem;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 45px;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;
    border-radius: 4px;
    backdrop-filter: blur(10px);
  }

  input::placeholder {
    color: #eee;
  }

  .icone {
    font-size: 1rem;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    margin-left: 5px;
    color: #eee;
  }
`
