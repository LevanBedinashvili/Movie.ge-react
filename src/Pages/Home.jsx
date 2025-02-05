import React, { useEffect, useState } from 'react'
import MainBanner from '../Components/MainBanner';
import TopMovies from '../Components/TopMovies';

const Home = ({setWatchList, watchList}) => {
  const [filterCtg, setFilterCtg] = useState('Action');
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://omdbapi.com/?apikey=65b7cfed&s=${filterCtg}`, {
      signal: signal
    })
    .then(res => res.json())
    .then(data => {
      setTopMovies(data.Search.slice(0, 8));
    })

    return () => {
      controller.abort();
    }
  }, [filterCtg])

  return (
    <>
      <MainBanner />
      <TopMovies filterCtg={filterCtg} setFilterCtg={setFilterCtg} topMovies={topMovies} setWatchList={setWatchList} watchList={watchList} />
    </>
  )
}

export default Home;