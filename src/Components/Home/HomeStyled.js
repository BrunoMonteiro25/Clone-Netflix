import styled from 'styled-components'

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 4rem 0;
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

export const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
