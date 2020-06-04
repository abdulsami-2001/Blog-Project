import React from 'react'
import Styles from './Logo.module.css';
import {Link} from 'react-router-dom';

export default function Logo() {
    return (
        <div className={Styles.logo} >
            <Link to="#">Abdul Sami</Link>
        </div>
    )
}
