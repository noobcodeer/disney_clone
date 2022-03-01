import React from 'react'
import './Trendings.css'
import {Link} from 'react-router-dom'
import {selectTrending} from '../../../features/movie/movieSlicer'
import { useSelector } from 'react-redux'

function Trendings() {
    const trendings= useSelector(selectTrending)
  return (
    <div className='trendings__container'>
        <div className='trendings__name'>
            <h1>Trending </h1>
        </div>
        <div className='trendings__content'>
        {trendings &&
          trendings.map((movie, key) => (
            <div className='trendings__wrap' key={key}>
                {movie.id}
                <Link to={`/detail/` + movie.id}>
                    <img src={movie.cardImg} alt={movie.title} />
                </Link>
             </div>
          ))}
            
            
        </div>
    </div>
  )
}

export default Trendings