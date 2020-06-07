import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/services'>
                    <li>Services</li>
                </Link>
                <Link to='/prices'>
                    <li>Prices</li>
                </Link>
                <Link to='/hours'>
                    <li>Opening hours</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>          
            </ul>
        </nav>
    )
}
