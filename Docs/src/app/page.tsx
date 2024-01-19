// Landing Page
"use client";
import React from 'react';
import LoginRegisterForm from './components/LoginRegisterForm';

const Landing  = () => {

  return (
  <div style={{
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center'
  }}>

    <h1 style={{fontSize : '70px'}}>Welcome To Mimi Docs</h1>
    <br />

    <div style={{
      width : '100%',
      height : '50%'
    }}>
      <LoginRegisterForm/>
    </div> 

  </div>)
}

export default Landing;