import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            <h5>{post.body}</h5>
        </div>
    );
};

export default PostDetails;