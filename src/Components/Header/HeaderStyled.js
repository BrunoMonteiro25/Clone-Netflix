import styled from 'styled-components'

export const NavContainer = styled.nav`
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 100;
`

export const Menu = styled.div`
  display: flex;
  gap: 3rem;

  a {
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.3s;
  }

  a:hover {
    color: #bbb;
  }

  img {
    width: 92.5px;
    height: 25px;
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

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px 0 45px;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    outline: none;
    border-radius: 4px;
  }

  input::placeholder {
    color: #eee;
  }

  .icone {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    margin-left: 5px;
    color: #eee;
  }
`
