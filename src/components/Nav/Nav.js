import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
        return (
            <div>
                <Link to = '/home'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contact'>Contact</Link>
            </div>
        )
}

export default Nav;