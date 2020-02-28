import React from 'react'
import styled from 'styled-components';
import '../pages/App/App.css';

const Footer = () => {
    return (
        <MainContainer>
            <span>&copy; {new Date().getFullYear()} All rights reserved. <span style={{fontStyle:" italic"}}>Redpanda, Inc.</span></span>
        </MainContainer>
    )
}

export default Footer

//MAIN CONTAINER
const MainContainer = styled.footer`
    background-color: #344;
    color: white;
    height: 4rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`;