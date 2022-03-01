import React from 'react'
import './Recommend.css'
import {Link} from 'react-router-dom'
import {selectRecommend} from '../../../features/movie/movieSlicer'
import { useSelector } from 'react-redux'

function Recommend() {
    const recommends = useSelector(selectRecommend)
  return (
    <div className='recommend__container'>
        <div className='recommend__name'>
            <h1>Recommend for you</h1>
        </div>
        <div className='recommend__content'>
        {recommends &&
          recommends.map((movie, key) => (
            <div className='recommend__wrap' key={key}>
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

export default Recommend