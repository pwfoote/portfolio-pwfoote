import React, { useEffect } from 'react';

function Nav () {

    return (
        <nav>
            <ul>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#project"> Projects </a>
                </li>
                <li>
                    <a href="#resume"> Resume </a>
                </li>
                <li>
                    <a href="#contact"> Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;