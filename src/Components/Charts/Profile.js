import React, { Component } from 'react';

export class Profile extends Component {
    
    render() {
        return (
            <div className= 'ProfileCard'>
              <h1>Store Profile</h1>
              <input type="range" id="fname" name="fname"/>
            </div>
        )
    }
}

export default Profile
