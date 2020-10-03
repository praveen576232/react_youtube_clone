import "./Topbar.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React, { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import Logo from "../logo/Logo";
  
  function Topbar({setOpenSideBar}) {
  return (
    <div className="app_bar">
      <div className="app_bar_right">
        <Logo setOpenSideBar={setOpenSideBar}/>
      </div>
      <div className="app_bar_center">


      
        <input placeholder="Search"></input>
       <SearchOutlined className="app_bar_center_button"/>

      </div>
      <div className="app_bar_left">
<VideoCallIcon />
<AppsIcon/>
<NotificationsIcon/>
<Avatar/>
      </div>
    </div>
  );
}

export default Topbar;
