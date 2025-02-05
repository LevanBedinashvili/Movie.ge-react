import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movies from '../Components/Movies';
import SubBanner from '../Components/SubBanner';
import NoData from '../Components/Search/noData';
import Pagination from '../Components/Pagination';

const SearchPage = ({currentPage, setCurrentPage, setWatchList, watchList }) => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(
      `https://omdbapi.com/?apikey=65b7cfed&s=${query}&page=${currentPage}`,
      {
        signal: signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(Math.round(+data.totalResults / 10));
        setSearchResults(
          data.Search
            ? data.Search.filter((movie) => movie.Poster !== 'N/A').slice(0, 8)
            : []
        );
      });

    return () => {
      controller.abort();
    };
  }, [query, currentPage]);

  return (
    <>
      <SubBanner title={'Search Results'} pathName={'Search'} />
      <section className='results-sec'>
        <div className='container'>
          <div className='section-title'>
            <h5 className='sub-title'>WATCH LATER</h5>
            <h2 className='title'>{query}'s Related Results</h2>
          </div>
          <div className='row movies-grid'>
            {searchResults.length ? (
              searchResults.map((movie) => (
                <Movies movie={movie} key={movie.imdbID} setWatchList={setWatchList} watchList={watchList} />
              ))
            ) : (
              <NoData />
            )}
          </div>
          {
            totalPages > 1 &&
            (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )
          }
        </div>
      </section>
    </>
  );
};

export default SearchPage;