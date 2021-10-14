import React, {useState} from 'react'




 function ThumbButtons(props) {

const [likeCount,setLikeCount]= useState(props.upvotes)
const [disLikeCount,setdisLikeCount]= useState(props.downvotes)

function likeHandler(){
    setLikeCount((likeCount)=> likeCount +1)
}

function dislikeHandler(){
    setdisLikeCount((disLikeCount)=> disLikeCount +1)
}


    return (
        <>
          <button onClick= {likeHandler}> {likeCount} 👍 </button>  
          <button onClick={dislikeHandler}> {disLikeCount} 👎</button>  
        </>
    )
}
export default ThumbButtons;