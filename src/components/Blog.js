import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h2>This is A Blog</h2>
            <p>Heading: {props.heading}</p>
            <address>Author: {props.author}</address>
        </div>
    );
};

export default Blog;