import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <MainContainer>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/' className='NavBar-link' >HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/articles' className='NavBar-link' >BLOG</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

      <br></br>
      <span className='NavBar-welcome'>Welcome back, {props.user.name}!</span>
    </MainContainer>
    :
    <MainContainer>
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
  .NavBar-link{
    text-decoration: none;
    color: white !important;
    &:hover{
      background: var(--lightGreen);
      text-decoration: none;
    }
  }
`;