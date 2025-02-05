import React from 'react'
import empty from './empty.svg'
import './style.css'

const NoData = () => {
    return (
        <div className="empty-movie">
        <img src={empty} alt="Empty movie" />
        <h3 className="title">ფილმები არ მოიძებნა!</h3>
      </div>
      )
}

export default NoData