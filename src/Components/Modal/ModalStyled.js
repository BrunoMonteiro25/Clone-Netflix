import styled from 'styled-components'

export const ModalDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #111;
  color: #eee;
  width: 600px;
  height: max-content;
  border-radius: 8px;
  position: relative;
  padding-bottom: 15px;

  @media (max-width: 615px) {
  }

  button {
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    right: calc(-100% + 45px);
    border-radius: 50%;
    background-color: #111;
    border: none;
    outline: none;
    color: #eee;
    font-size: 1.5rem;
    position: relative;
    margin-top: 20px;
    cursor: pointer;
    z-index: 100;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: #eee;
      top: 3px;
      left: 14px;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`

export const Content = styled.div`
  display: flex;
  gap: 30px;

  iframe {
    min-width: 600px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .info {
    margin: 300px 0 10px 0;
  }

  .details {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }

  .details p {
    width: max-content;
  }

  .age {
    font-size: 1.1rem;
    letter-spacing: 2px;
    padding: 5px;
    background-color: #f7c727;
    color: #fff;
    font-weight: bold;
  }

  .hd {
    text-transform: uppercase;
    padding: 0px 6px;
    border: 2px solid #9f9b9b;
    color: #ddd;
    border-radius: 4px;
  }

  h3 {
    margin: 10px 0 10px 10px;
  }

  p {
    width: 290px;
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0 0 10px 10px;
  }

  .info-gen {
    width: max-content;
    margin-top: 300px;
  }

  h4 {
    display: inline;
    font-size: 1rem;
    color: #bbb;
    font-weight: 400;
  }

  .info-gen p {
    display: inline;
    width: 200px;
    letter-spacing: normal;
    font-size: 0.8rem;
    margin: 0px;
  }

  .genero {
    margin: 15px 0;
  }
`
