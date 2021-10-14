import React from 'react'
import video from '../data/video';
import ThumbButtons from './ThumbButtons';


function Header(props) {
    return (
        <>
            <h2>  {props.title} </h2>
            <p> {props.views} Views | Uploaded {props.create} </p>
            <ThumbButtons 
            upvotes = {video.upvotes}
            downvotes={video.downvotes}/>
            
        </>
    )
}
export default Header;