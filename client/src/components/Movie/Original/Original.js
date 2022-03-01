import React from 'react'
import './Original.css'
import {Link} from 'react-router-dom'
import {selectOriginal} from '../../../features/movie/movieSlicer'
import { useSelector } from 'react-redux'

function Original() {
    const originals= useSelector(selectOriginal);
  return (
    <div className='original__container'>
        <div className='original__name'>
            <h1>Originals Movie</h1>
        </div>
        <div className='original__content'>
        {originals &&
          originals.map((movie, key) => (
            <div className='original__wrap' key={key}>
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

export default Original