import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className ='nav'>
            <Link to="/" className='link'>Home</Link>
            <Link to="/usercards" className='link'>User Card</Link>
            <Link to="/followers" className='link'>Followers</Link>
        </div>
    )
}

export default Navbar
