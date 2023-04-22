import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import Box from '@mui/material/Box';


export default function NavBar(){
    return(
        <div className='topNav'>
            <div className='topLeft'>
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