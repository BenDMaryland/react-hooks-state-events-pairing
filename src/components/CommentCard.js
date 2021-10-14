import React from "react";

function CommentCard(props) {
    console.log(props)
// const displayComments = props.comments.map(comment => {return (
//     <div key={comment.id}>
//         <h4>{comment.user}</h4>
//         <p>{comment.comment}</p>
//     </div>
    // )
// })


    return (
        <div key={props.id}>
            <h4>{props.user}</h4>
            <p>{props.comment}</p>
        </div> 
        // <div>
        //     {displayComments}
        // </div>
    )
}

export default CommentCard