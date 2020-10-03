import "./Poasts.css";
import React from "react";
import { Avatar } from "@material-ui/core";

function Poasts({
  tumbnail,

  channelLogo,
  videoDesc,
  channelName,
  videoViews,
  timeAgo,
  onClick,
}) {
  return (
    <div onClick={onClick} className="poasts">
      <div
        className="poast_tumbnail"
        style={{ backgroundImage: `url(${tumbnail})` }}
      ></div>
      <div className="poast_info">
        <div className="poast_info_top">
          <Avatar src={channelLogo} />
          <h5>{videoDesc}</h5>
        </div>
        <div className="poast_info_bottom">
          <p>{channelName}</p>
          <div className="poast_info_time">
            <p>{videoViews} views</p>
            <p>{timeAgo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poasts;
