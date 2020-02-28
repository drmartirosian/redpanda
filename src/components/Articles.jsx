import React from 'react';

const Articles = ({ posts }) => {
    return (
        <div style={{marginTop:"400px"}} >
            {posts.map( (article, key) => (
            <p >{article.title}</p>
            ))}
        </div>
    )
};

export default Articles;