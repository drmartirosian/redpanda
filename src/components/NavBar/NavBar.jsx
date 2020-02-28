import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css';
import logo from './logo.jpg'

const NavBar = (props) => {
  let nav = props.user ?
    <MainContainer>
      <Link to='/' className='NavBar-link' >
        <img style={{ width: "35px", borderRadius:"30px" }} src={logo} alt="logo" />
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/articles' className='NavBar-link' >BLOG</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/' className='NavBar-link' >NEW BLOG</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOGOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <br></br>
      <span className='NavBar-welcome'>Welcome back, {props.user.name}!</span>
    </MainContainer>
    :
    <MainContainer>
      <Link to='/' className='NavBar-link' >
        <img style={{ width: "35px", borderRadius:"30px" }} src={logo} alt="logo" />
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </MainContainer>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;



//MAIN CONTAINER
const MainContainer = styled.div`
  background-color: var(--darkGreen);
  color: white;
  width: 100%;
  height: 10rem;
  font-size: 3rem;
  position: fixed;
  top: 200px;

  .NavBar-welcome{
    color: white !important;
  }

  .NavBar-link{
    text-decoration: none;
    color: white !important;
    &:hover{
      background: var(--lightGreen);
      text-decoration: none;
    }
  }

`;