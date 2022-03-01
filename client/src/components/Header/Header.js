import React from 'react'
import { auth, provider } from '../../firebase';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"
import {selectUserName,selectUserPhoto,setUserLoginDetails,setSignOutState} from '../../features/user/userSlice'
import './Header.css';
import { useEffect } from 'react';


const Header=()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    //xac thuc tai khoan dang nhap
    const handleAuth =()=>{
        if(!userName){
                auth
            .signInWithPopup(provider)
            .then((result)=>{
                setUser(result.user)
                // console.log(result.user)
                // console.log(result.user.photoURl)
            })
            .catch((error)=>{
                alert(error.message)
            })
        }else if(userName){
            auth
            .signOut()
            .then(()=>{
                dispatch(setSignOutState());
                navigate("/");
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    }
    //khi dang nhap vao moi co the den path 'home'
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user);
                // history.push("/home")
                navigate("/home");
            }
        })
    },[userName])

    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };

  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <img src='/images/logo.svg' alt='Disney'/>
        </div>
        {
            !userName 
            ?
            <div className='navbar__login'>
                <div className='navbar__login__button'>
                    <a onClick={handleAuth}>Login</a>
                </div>
            </div>
            :
            <>
                <div className='navbar__menu'>
                <a className='navbar__a' href='/home'>
                    <img src='/images/home-icon.svg' alt='home'/>
                    <span>HOME</span>
                </a>
                <a href='/search'>
                    <img src='/images/search-icon.svg' alt='home'/>
                    <span>SEARCH</span>
                </a>
                <a href='/watch-list'>
                    <img src='/images/watchlist-icon.svg' alt='home'/>
                    <span>WATCHLIST</span>
                </a>
                <a href='/originals'>
                    <img src='/images/original-icon.svg' alt='home'/>
                    <span>ORIGINALS</span>
                </a>
                <a href='/movies'>
                    <img src='/images/movie-icon.svg' alt='home'/>
                    <span>MOVIES</span>
                </a>
                <a href='/series'>
                    <img src='/images/series-icon.svg' alt='home'/>
                    <span>SERIES</span>
                </a>
                </div>
                <div className='navbar__signout'>
                    <div className='user-img'>
                        <img className='user-avatar' src={userPhoto} alt={userName} />        
                    </div>
                    <div className='user-dropdown'>
                        <p onClick={handleAuth}>Sign out</p>
                    </div>
                </div>
            </>
        }
        
        {/* <div className='navbar__login'>
            <div className='navbar__login__button'>
                <a onClick={handleAuth}>Login</a>
            </div>
        </div> */}
    </div>
  )
}

export default Header