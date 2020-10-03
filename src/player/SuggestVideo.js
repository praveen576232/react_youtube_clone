import 'SuggestedVideo.css';
import React from 'react'

function suggestVideo({src,videodes,channelName,views,time}) {
    return (
        <div className="suggestVideo">
            <img alt="" src={src}></img>
            <div className="videoInfo">
    <h3>{videodes}</h3>
    <p>{ channelName }</p>
    <div className="videoInfo_views">
    <p>{ views } views</p>
    <p>{time}</p>
    </div>
            </div>
        </div>
    )
}

export default suggestVideo
