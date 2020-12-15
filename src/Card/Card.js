import React from 'react';
import './Card.css';

function Card({children, onClick, ...other}) {
    return (
        <li {...other} className={'Card'} onClick={onClick}>
            {children}
        </li>
    );
}

function Cards({children, ...other}) {
    return (
        <ul {...other} className={'Cards'}>
            {children}
        </ul>
    );
}

export {Card, Cards};
export default Card;
