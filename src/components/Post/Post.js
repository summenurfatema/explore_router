import React from 'react';

const Post = ({ post }) => {
    const { title, body } = post
    return (
        <div>
            <h4>{title}</h4>
            <small>{body}</small>
        </div>
    );
};

export default Post;