import React, { useState } from "react";

import "./App.css";
import Poasts from "./poasts/Poasts";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import {BrowserRouter as Router,Switch,Route,Link, useHistory} from 'react-router-dom'
import Player from "./player/Player";
function App() {
  const history =  useHistory();
  const [openSidebar, setOpenSideBar] = useState(false);
 
  return (
    <Router>
      <Switch>
        <Route path="/watch/:id">
         
           <Player id ="HARdHQb1Li4"/>
         
        </Route>
        <Route path="/">
        <div className="app">
    <Topbar setOpenSideBar={setOpenSideBar}/>
    <Sidebar openSidebar={openSidebar} setOpenSideBar={setOpenSideBar}/>
     <Link className="poast_link" to="/watch/HARdHQb1Li4">

     <Poasts 
     channelLogo="https://i.ytimg.com/vi/x7kMNtyl2u0/default.jpg"
      channelName="praveend"
     
        timeAgo="2 hours ago"
         tumbnail="https://i.ytimg.com/vi/HARdHQb1Li4/hqdefault.jpg"
          videoDesc="this is video desc"
           videoViews="1520"/>
     </Link>
    </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
