import React from 'react'
import Link from 'react-router-dom'

const Link = (props) => {
    return (
        <>
            <li class="nav-item">
                <Link class="nav-link" to={props.link}>{props.title}</Link>
            </li>
        </>
    )
}

export default Link
