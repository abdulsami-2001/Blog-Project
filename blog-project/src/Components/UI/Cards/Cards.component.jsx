import React from 'react'
import Styles from './Card.module.css';

function Cards(props) {
    return (
        <div className={Styles.card} {...props}>
            {props.children}
        </div>
    )
}

export default Cards
