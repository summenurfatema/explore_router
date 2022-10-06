import React from 'react';

const Friend = ({ friend }) => {
    const { name, email } = friend
    return (
        <div>

            <h3>Name : {name}</h3>
            <p>Email : {email}</p>


        </div>
    );
};

export default Friend;