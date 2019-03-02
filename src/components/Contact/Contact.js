import React from 'react';
import Nav from './../Nav/Nav';

const Contact = props => {
    return(
        <div>
            <Nav />
            <h1>Contact Us</h1>
            <div className = 'Aboutdiv'>
                <p className = 'Contactprompt'>Phone Number: </p>
                <p>000-0000</p>
                <p className = 'Contactprompt'>Email: </p>
                <p>teachio@teachio.co</p>
            </div>
        </div>
    )
}

export default Contact;