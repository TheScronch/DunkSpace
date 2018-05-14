import React from 'react';
import './Header.css';

const header = (props) => {
    return(
        <h1 className="header">{props.title}</h1>
    )
}

export default header;