import React from 'react';
import './Viewer.css'

const Viewer=()=> {
    return (
        <div className='viewer__container'>
            <div className='viewer__wrap'>
                <img src='/images/viewers-disney.png' alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src='/videos/disney.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='viewer__wrap'>
                <img src='/images/viewers-marvel.png' alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src='/videos/marvel.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='viewer__wrap'>
                <img src='/images/viewers-national.png' alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src='/videos/national.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='viewer__wrap'>
                <img src='/images/viewers-pixar.png' alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src='/videos/pixar.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='viewer__wrap'>
                <img src='/images/viewers-starwars.png' alt='disney' />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="/videos/starwars.mp4" type="video/mp4" />
        </video>
            </div>
        </div>
    );
}

export default Viewer;