import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import Box from '@mui/material/Box';


export default function NavBar(){
    return(
        <div className='topNav'>
            <div className='topLeft'>
            <Link className='link' to='/'>
            <Box
                component="img"
                sx={{
                height: 90,
                width: 100,
                maxHeight: { xs: 90, md: 90 },
                maxWidth: { xs: 100, md: 100 },
                }}
                alt="logo"
                src='/images/tree.png'
            />
            </Link>
            </div>
            <div className='topCenter'>
                <ul className='topNavList'>
                    <li className='navListItem'>
                        <Link className='link' to='/'>
                        HOME
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/Info'>
                            ABOUT US
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/PostForm'>
                            CARPOOL
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/Contacts'>
                            CONTACTS
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className='topRight'>

                <Link className='link' to='/settings'><img className = "topPfpImg" src='/images/tree.png'alt='pfp' /></Link>

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