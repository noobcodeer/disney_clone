import React,{useEffect, useState} from 'react'
import './Details.css'
import {useParams} from 'react-router-dom'
import db from '../../firebase'


function Details() {
    const  {id} = useParams();
    const [detail,setDetail]= useState({})

    useEffect(()=>{
        db.collection('movies')
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setDetail(doc.data());
            }else{
                console.log('no such document in firebase')
            }
        })
        .catch((error)=>{
            console.log(error.message)
        })
    },[id])
  return (
    <div className='detail__container'>
        <div className='detail__background'>
            <img src={detail.backgroundImg} alt='images'/>
        </div>
        <div className='detail__ImageTitle'>
            <img src={detail.titleImg} alt=''/>
        </div>
        <div className='detail__ContentMeta'>
            <div className='detail__control'>
               <button className='detail__player'>
                   <img src='/images/play-icon-black.png' alt='images'/>
                   <span>Play</span>
               </button>
               <button className='detail__trailer'>
               <img src='/images/play-icon-white.png' alt='images'/>
                   <span>Trailer</span>
               </button>
               <div className='detail__addlist'>
                   <span></span>
                   <span></span>
               </div>
               <div className='detail__group'>
                <div>
                    <img src="/images/group-icon.png" alt="" />
                </div>
               </div>
            </div>
            <div className='detail__subtitle'>
            {detail.subTitle}
            </div>
            <div className='detail__desc'>
            {detail.description}
            </div>
        </div>
    </div>
  )
}

export default Details