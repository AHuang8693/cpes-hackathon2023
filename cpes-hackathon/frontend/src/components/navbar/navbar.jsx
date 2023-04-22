import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div className='topNav'>
            <div className='topLeft'>
                <img src='/images/tree.png' alt='logo' className='toplogo'/>
            </div>
            <div className='topCenter'>
                <ul className='topNavList'>
                    <li className='navListItem'>
                        Home
                    </li>
                    <li className='navListItem'>
                        Info
                    </li>
                    <li className='navListItem'>
                        Carpool
                    </li>
                    <li className='navListItem'>
                        Contact
                    </li>
                    <li className='navListItem'>
                        Logout
                    </li>
                    
                </ul>
            </div>
            <div className='topRight'>

                <img className = "topPfpImg" src='pfp'alt='pfp' />

                <ul className='topList'>
                <li className='navListItemSide Create'>
                            Create Account
                    </li>
                    <li className='navListItemSide Login'>
                        Login
                    </li>

                </ul>

            </div>
        </div>



    )
}