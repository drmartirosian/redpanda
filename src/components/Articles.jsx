import React from 'react';

const Articles = ({ posts }) => {
    return (
        <div>
            {posts.map( (article, key) => (
            <h1 style={{fontSize:"50px", marginTop:"400px"}} >{article.title}</h1>
            ))}
        </div>
    )
};

export default Articles;