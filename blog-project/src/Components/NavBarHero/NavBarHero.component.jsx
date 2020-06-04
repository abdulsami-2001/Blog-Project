import React, {useState} from 'react'
import './NavBarHero.css';
import SearchIcon from '../../Assets/SearchIcon.png';
import {Link} from 'react-router-dom';

export default function NavBarHero() {

    const [displayInput, setDisplayInput] = useState(false)
    const [inputValue, setInputalue] = useState("")
    
    const showInput = displayInput ? 'searchInput active' : 'searchInput';

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputalue("")
        alert('Ok')
    }

    return (
        <div className="navbar" >
            <nav className="menuNavbar">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="posts">Posts</Link>
            </nav>
            <div className="searchContainer" >
                <form onSubmit={handleSubmit}>
                    <input type="text" className={showInput} onChange={(e)=>setInputalue(e.target.value)} value={inputValue} placeholder="Search..."/>
                    <img className="searchIcon" onClick={()=>{setDisplayInput(true)}} src={SearchIcon} alt="Search Icon"/> 
                </form>
            </div>
        </div>
    )
}
