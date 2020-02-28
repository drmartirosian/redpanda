import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Articles from '../../components/Articles'
import '../App/App.css';


function HomePage(props){

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios
            .get('http://localhost:3000/articles')
            .then(res=>setPosts(res.data))
            .catch(error => console.log(error))
    });

    return (
        <div>
            <Header />
            <NavBar user={props.user} handleLogout={props.handleLogout} />
            <Switch>
                <Route exact path='/' render={ () => <Articles posts={posts} /> }/>
            </Switch>
            <Footer />
        </div>
    );
};


export default HomePage;