import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post
    return (
        <div>
            <h4>{title}</h4>

            <Link to={`/post/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Post;