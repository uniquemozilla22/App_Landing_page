import React from 'react'
import Link from './Links/Link'

const Navigation = () => {
    return (
       <>
            <nav class="navbar navbar-expand-lg navbar-light navbar-floating">
                <div class="container">
                     <a class="navbar-brand" href="#">
                        <img src="" alt="Logo" width="40"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
  
                    <div class="collapse navbar-collapse" id="navbarToggler">
                        <ul class="navbar-nav ml-lg-5 mt-3 mt-lg-0">
                            <Link link="/" title="Home"></Link>
                            <Link link="/" title="About"></Link>
                            <Link link="/" title="Download"></Link>
                            <Link link="/" title="Contact"></Link>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="updates.html"></a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link" href="contact.html">Contact</a>
                             </li>
                        </ul>
                        <div class="ml-auto my-2 my-lg-0">
                             <button class="btn btn-dark rounded-pill">Download Now</button>
                        </div>
                    </div>
                </div>
            </nav>
       </>
    )
}

export default Navigation
