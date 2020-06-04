import React from 'react'
import Cards from '../UI/Cards/Cards.component'
import Logo from '../Logo/Logo.component'
import NavBarHero from '../NavBarHero/NavBarHero.component'

function HeroArea() {
    return (
        <>
            <Cards>
                <div style={{padding: '50px 0px'}} >  
                    <Logo/>
                </div>
                <NavBarHero/>
            </Cards>
        </>
    )
}

export default HeroArea
