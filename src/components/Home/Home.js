import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
            <div>
                <div>
                    <p>Welcome! Start by searching for a subject to learn.</p>
                    <input />
                    <div>
                        <button>Search</button>
                    </div>
                </div>
                <div>
                    <p>Popular Subjects</p>
                    {/* first three subjects go here */}
                </div>
            </div>
        )
    }
}

export default Home;