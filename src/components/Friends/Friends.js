import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData()
    return (
        <div>

            <h2>My friends are : {friends.length}</h2>

        </div>
    );
};

export default Friends;