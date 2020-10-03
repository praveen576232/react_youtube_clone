import "./Sidebar.css";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOptions from "./SidebarOptions";
import Logo from "../logo/Logo";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import SmsFailedIcon from '@material-ui/icons/SmsFailed';

function Sidebar({ openSidebar, setOpenSideBar }) {
  return (
    <div className={`sidebar ${openSidebar ? "openSidebar" : "closeSidebar"} `}>
      <div className="sidebar_logo">
      <Logo setOpenSideBar={setOpenSideBar} />
      </div>
      <hr className="breakLine"/>
      <SidebarOptions Icon={HomeIcon} text="Home" />
      <SidebarOptions Icon={WhatshotIcon} text="Trending" />
      <SidebarOptions Icon={SubscriptionsIcon} text="Subscriptions" />
      
      <hr className="breakLine"/>

      <SidebarOptions Icon={VideoLibraryIcon} text="Library" />
      <SidebarOptions Icon={HistoryIcon} text="History" />
      <SidebarOptions Icon={QueuePlayNextIcon} text="Your videos" />
      <SidebarOptions Icon={QueryBuilderIcon} text="Watch later" />
      <SidebarOptions Icon={ThumbUpIcon} text="Liked videos" />

      <hr className="breakLine"/>
      <h4>MORE FROM YOUTUBE</h4>

      <SidebarOptions Icon={YouTubeIcon} text="YouTube Premium" />
      <SidebarOptions Icon={TheatersIcon} text="movies" />
      <SidebarOptions Icon={SportsEsportsIcon} text="Gaming" />
      <SidebarOptions Icon={SettingsInputAntennaIcon} text="Live" />
      <SidebarOptions Icon={TheatersIcon} text="Fashion & Beauty" />
      <SidebarOptions Icon={EmojiObjectsIcon} text="Learning" />
   
      
      <hr className="breakLine"/>
      <SidebarOptions Icon={SettingsIcon} text="Settings" />
      <SidebarOptions Icon={FlagIcon} text="Report history" />
      <SidebarOptions Icon={HelpIcon} text="Help" />
      <SidebarOptions Icon={SmsFailedIcon} text="Send feedback" />
   
   
   </div>
  );
}

export default Sidebar;
