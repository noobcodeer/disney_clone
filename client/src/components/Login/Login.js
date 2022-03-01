import React from 'react'
import styled from 'styled-components'
import './Login.css'

function Login() {
  return (
    <div className='login__container'>
      <div className='login__content'>
        <div className='login__center'>
          <img className='login__center__one' src='/images/cta-logo-one.svg' alt='image' /> 
          <SignUp>GET ALL THERE</SignUp>
          <div className='login__description'>
            <p>Get Premier Access to Raya and the Last Dragon for an additional fee with Disney+ subscriptions.As of 03/26/22,the price of Disney Bundle will increase by $1.</p> 
          </div>
          <img className='login__center__two' src='/images/cta-logo-two.png' alt='image' /> 
        </div>
        <div className='login__background'>
          
        </div>
      </div>
    </div>
  )
}

const SignUp=styled.a`
  font-weight:bold;
  color:#f9f9f9;
  background-color:#0063e5;
  margin-bottom:12px;
  width:100%;
  letter-spacing:1.5px;
  font-size:18px;
  padding:16.5px 0;
  border:1px solid transparent;
  border-radius: 4px;

  &:hover{
    background-color:#0483ee;
    cursor:pointer;
  }

`;

export default Login