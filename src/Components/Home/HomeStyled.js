import styled from 'styled-components'

export const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Details = styled.div`
  position: absolute;
  top: 21rem;
  width: 100%;
  z-index: 1;
  padding: 2rem 0;

  div {
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    /* border: 1px solid white; */
  }

  h3 {
    font-size: 2rem;
    color: #eee;
  }

  p {
    max-width: 500px;
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #eee;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    padding: 0.2rem 1.5rem 0.2rem 0.8rem;
    margin-top: 20px;
    border: none;
    font-weight: bold;
    font-size: 1.3rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .icone {
    font-size: 2.8rem;
  }
`

export const Container = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0.5rem;
  color: #eee;

  h1 {
    margin: 4rem 2rem;
  }
`

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
    line-height: 1.2;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`

export const Footer = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  font-size: 0.9rem;
`
