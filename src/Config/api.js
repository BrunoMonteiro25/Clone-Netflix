export const API_KEY = '5b5c4bcb2cda8e6cc5c45d08e8f31ec1'

const categories = [
  {
    name: 'netflixOriginals',
    title: 'Originais Netflix',
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false,
  },
  {
    name: 'topRated',
    title: 'Populares',
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'comedy',
    title: 'Comédias',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    name: 'romances',
    title: 'Romances',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    name: 'documentaries',
    title: 'Documentários',
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
]

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log('error getMovies: ', error)
  }
}

export default categories
