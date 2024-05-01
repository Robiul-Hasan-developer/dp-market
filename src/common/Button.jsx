import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={`${props.btnLink}`} className={`btn ${props.btnClass}`}>
            {props.btnText}
        </Link>
    );
};

export default Button;