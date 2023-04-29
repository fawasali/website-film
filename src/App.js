

import './App.css';
import { getMovieList, getSearch } from './api';
import { useEffect, useState } from 'react';

const App = () => {
  const [populermovies, setpopulermovies] = useState ([])

  useEffect(() => {
    getMovieList().then((result) => {
      setpopulermovies(result)
    })
  }, [])

  console.log({populermovies: populermovies})

  const PopulerMovieList = () => {
    return populermovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" className="Movie-image" />
          <div className="Movie-date">Release Date : {movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    // console.log({ q })
    const query = await getSearch(q)
    setpopulermovies(query.results)
    console.log({query: query})
  }
  console.log(populermovies)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Li</h1>
        <input className="Movie-search" 
          placeholder='Cari Film Kesayangan' 
          onChange={({target}) => search(target.value)}
          />
        <div className="Movie-container">
          <PopulerMovieList />
        </div>
      </header>
    </div>
  );
  }

export default App;
