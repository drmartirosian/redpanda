import React from 'react'
import styled from 'styled-components';
import '../pages/App/App.css';


const Header = () => {
    return  <MainContainer><h1>Welcome to Redpanda!</h1></MainContainer>
}

export default Header

//MAIN CONTAINER
const MainContainer = styled.header`
    background: url(../../img/header.png) no-repeat center/cover;
    height: 25rem;
    width: 100%;

    h1{
        transform: translate(-50%, -50%);
        font-weight: 900;
        color: white;
        position: absolute;
        top: 10%;
        left: 50%;
    }

    position: fixed;
    left: 0;
    top: 0;

`;