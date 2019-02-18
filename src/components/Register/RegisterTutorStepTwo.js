import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterTutorStepTwo extends Component {
    render(){
        return(
            <div>
                <h1>Create Your Account</h1>
                <h1>Step Two</h1>
                <p>What do you teach?</p>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <button>I'm a drop down</button>
                </div>
                <div>
                    <Link to = 'registertutorlocation'><button>Submit</button></Link>
                </div>
            </div>
        )
    }
}

export default RegisterTutorStepTwo;