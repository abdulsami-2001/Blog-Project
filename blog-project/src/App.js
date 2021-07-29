import React, { Component } from 'react'
import './app.css'
import Header from './Components/Header/Header.component'
import HeroArea from './Components/Hero Area/HeroArea.component'
import Home from './Containers/Home/Home.component'
import ContactUs from './Containers/Contact Us/ContactUs.component'
import AboutUs from './Containers/About Us/AboutUs.component'
import Post from './Containers/Posts/Posts.component'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Its Returning Time!
export default class App extends Component {
    render() {
        return (
                <Router>
                    <div className="app">
                        <Header/>
                        <HeroArea/>
                        <Route path="/" exact  component={Home} />
                        <Route path="/contact-us" exact component={ContactUs}/>
                        <Route path="/about-us" exact component={AboutUs}/>
                        <Route path="/posts" exact component={Post}/>

                    </div>
                </Router>
        )
    }
}
