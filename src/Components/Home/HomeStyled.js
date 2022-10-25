import styled from 'styled-components'

export const Banner = styled.div`
  position: relative;
  width: 100%;
  min-height: 93vh;

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
  top: 17rem;
  width: 100%;
  z-index: 1;
  padding: 2rem 0;

  div {
    max-width: 100rem;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    /* border: 1px solid white; */
  }

  .filme {
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .filme img {
    max-width: 50px;
    max-height: 50px;
  }

  .filme p {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 1.3rem;
    font-weight: 600;
  }

  h3 {
    font-size: 2rem;
    color: #eee;
  }

  p {
    max-width: 500px;
    margin: 0.7rem 0;
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
    font-weight: 600;
    font-size: 1.3rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .icone {
    font-size: 2.8rem;
  }
`

export const Footer = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  font-size: 0.9rem;
  color: #eee;
`
