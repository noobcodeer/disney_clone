import React from 'react'
import './NewMovie.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {selectNewmovie} from '../../../features/movie/movieSlicer'

function NewMovie() {
    const movies = useSelector(selectNewmovie)
    // console.log('newmovie')
    console.log(movies)
  return (
    <div className='newmovie__container'>
        <div className='newmovie__name'>
            <h1>New Movies for you</h1>
        </div>
        <div className='newmovie__content'>
            
            {movies &&
          movies.map((movie, key) => (
            <div className='newmovie__wrap' key={key}>
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

export default NewMovie