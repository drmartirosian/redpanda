import React from 'react';
// import { Route, Switch, Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../App/App.css';


const HomePage = (props) => {
    return (
        <div>
            <Header />
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <Footer />
        </div>
    );
};


export default HomePage;