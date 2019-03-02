import React from 'react';
import Nav from './../Nav/Nav';
import './About.css'

const About = props => {
    return(
        <div>
            <Nav />
            <h1>About Teachio</h1>
            <div className = 'Aboutdiv'>
                <p>Teachio was designed with one thing in mind: making finding a tutor easier. Education shouldn't be something that you
                   should have to work hard to find, and Teachio makes it simple.  With just a few clicks you will be able to find a tutor 
                   in the subject that you are looking for. You can see exactly how much they charge, see where they teach online, and message 
                   them directly from our website.
                </p>
            </div>
        </div>
    )
}

export default About;