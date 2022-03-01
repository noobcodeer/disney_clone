import React from 'react'
import ImgSlider from '../ImageSlider/ImgSlider'
import Viewer from '../Viewer/Viewer'
import Recommend from '../Movie/Recommend/Recommend'
import './Home.css'
import NewMovie from '../Movie/NewMovie/NewMovie'
import Original from '../Movie/Original/Original'
import Trendings from '../Movie/Trendings/Trendings'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import db from '../../firebase';
import {setMovie} from '../../features/movie/movieSlicer';
import {selectUserName} from '../../features/user/userSlice'

function Home() {
  let trending = [];
  let newMovies =[];
  let originals =[];
  let recommends=[];

  const userName=useSelector(selectUserName)
  const dispatch= useDispatch()

  useEffect(()=>{
    console.log('hello')
    db.collection('movies').onSnapshot((snapshot)=>{
      snapshot.docs.map((doc)=>{
        //  console.log(newMovies)
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newMovies = [...newMovies, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      })
      dispatch(setMovie({
        recommend:recommends,
        newmovie:newMovies,
        original:originals,
        trending:trending,
  
      }))
    })
  },[userName])
  return (
    <main className='home__container'>
        <div className='home__background' alt=''/>
        <div className='home__content'>
            <ImgSlider/>
            <Viewer/>
            <Recommend/>
            <NewMovie/>
            <Original/>
            <Trendings/>
        </div>
    </main>
  )
}


export default Home