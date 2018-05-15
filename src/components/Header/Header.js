import React from 'react';
import './Header.css';

const header = (props) => {
    return(
        <div className="header">
            <span className="wrapper">{props.title}</span>
        </div>
    )
}

export default header;