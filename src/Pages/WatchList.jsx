import React from 'react'
import Movies from '../Components/Movies';
import SubBanner from '../Components/SubBanner';
import NoData from '../Components/Search/noData';

const WatchList = ({watchList, setWatchList}) => {
  return (
    <>
      <SubBanner title={'My Watch List'} pathName={'WatchList'} />
      <section className='results-sec'>
        <div className='container'>
          <div className='section-title'>
            <h5 className='sub-title'>ჩემი შენახული ფილმები</h5>
          </div>
          <div className='row movies-grid'>
          {
          watchList.length
          ?
          watchList.map(movie => (
            <Movies movie={movie} key={movie.imdbID} setWatchList={setWatchList} watchList={watchList} />
          ))
          :
          <NoData />
          }
          </div>
        </div>
      </section>
    </>
  )
}

export default WatchList;