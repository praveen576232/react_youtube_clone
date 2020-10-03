import "./Player.css";
import React from "react";
import YouTube from "react-youtube";
import { ThumbUp } from "@material-ui/icons";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ShareIcon from "@material-ui/icons/Share";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Player({ id }) {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };


  const suggestVideo =[
    {
      "tumbnail":"https://i.ytimg.com/vi/HARdHQb1Li4/default.jpg",
      
    }
  ]

  return (
    <div className="player">
      <div className="player_left">
        {/* <div className="player_left_top"> */}
          <div className="player_left_top_player">

          {/* <YouTube videoId={id} opts={opts}></YouTube> */}
          </div>
          <p>video description about video</p>
          <div className="videoInfo-row">
            <p>4,301 views jun 2,2020</p>
            <div className="videoInfo-row_left">
              <div className="videoInfo-row_left_icon">
                <ThumbUpAltIcon></ThumbUpAltIcon>
                <p>250</p>
              </div>
              <div className="videoInfo-row_left_icon">
                <ThumbDownIcon />
                <p>30</p>
              </div>
              <div className="videoInfo-row_left_icon"></div>
              <ShareIcon />
              <p>share</p>
           
            <div className="videoInfo-row_left_icon">
              <SaveAltIcon />
              <p>download</p>
            <MoreHorizIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="player_left_bottom"></div>
      <div className="player_right"></div>

    </div>
  );
}

export default Player;
