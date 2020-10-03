import  './Logo.css'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {  IconButton } from "@material-ui/core";
function Logo({setOpenSideBar}) {
    return (
        <div className="logo">
            <IconButton onClick={()=>setOpenSideBar(open => !open)}>

<MenuIcon/>
        </IconButton>
<img alt="" src= "https://www.vippng.com/png/detail/85-853653_patreon-logo-png-transparent-background-youtube-logo.png" /> 
        </div>
    )
}

export default Logo
