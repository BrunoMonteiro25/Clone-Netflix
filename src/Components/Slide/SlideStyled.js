import styled from 'styled-components'

export const SlideContainer = styled.section`
  /* border: 1px solid white; */
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: #eee;

  .movies {
    display: flex;
    gap: 30px;
    /* border: 1px solid white; */
    height: 200px;
    margin-top: 30px;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .movies::-webkit-scrollbar {
    width: 15px;
  }

  .movies::-webkit-scrollbar-track {
    background: #222;
  }

  .movies::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 20px;
  }
`

export const Image = styled.img`
  min-width: 300px !important;
  object-fit: cover;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
