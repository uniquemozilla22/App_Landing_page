import React from 'react'

import {Link} from 'react-router-dom'
const Navlinks = (props) => {
    return (
        <>
            <li class="nav-item">                
                <Link className = "nav-link" to={props.link}>{props.title}</Link>
            </li>
        </>
    )
}

export default Navlinks
