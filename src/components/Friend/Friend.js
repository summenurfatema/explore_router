import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend
    return (
        <div>

            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <small>username :<Link to={`/friend/${id}`}>{username}</Link></small>


        </div>
    );
};

export default Friend;