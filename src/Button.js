import React from 'react';

const Button = ({title}) =>  {
    return(
        <div className="button">
<button>{title}</button>
<button>I'm feeling lucky</button>
        </div>
    )
}
export default Button;