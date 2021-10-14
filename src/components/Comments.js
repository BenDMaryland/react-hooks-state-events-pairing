import React, {useState} from 'react'
import CommentCard from './CommentCard';
import video from '../data/video';

 function Comments() {
 const [seeComments, setSeeComments] = useState(true)

 function handleViewComments() {
     setSeeComments(seeComments => !seeComments)
 }
    //  console.log(video.comments.length)
 const displayComments = video.comments.map( comment => {
     return (
         <CommentCard 
         key={comment.id}
         user={comment.user} 
         comment={comment.comment}
         />
     )
 })

    return (
        <div>
            <button onClick={handleViewComments}>
                {seeComments? "Hide Comments" : "Show Comments"}
            </button>
            <h3>{video.comments.length} Comments</h3>
            <div>
                {seeComments? displayComments : ""}
            </div>
            
        </div>
    )
}

export default Comments;