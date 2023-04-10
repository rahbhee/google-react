import React from 'react';
import google from './images/google.png'

const Logo = () => {
    return(
        <div>
            <img className="googlelogo" style={{width: 270}} src={google}></img>
        </div>
    )
}

export default Logo;