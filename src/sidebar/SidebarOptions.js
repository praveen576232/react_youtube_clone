import './SidebarOptions.css';
import React from 'react'

function SidebarOptions({Icon,text}) {
    return (
        <div className="sidebarOPtions">
            <Icon/>
    <p>{text}</p>
        </div>
    )
}

export default SidebarOptions
