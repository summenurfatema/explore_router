import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post
    return (
        <div>
            <h4>{title}</h4>
            <small>{body}</small>
            <Link to={`/post/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Post;