import React from 'react'

 function Video(props) {
     console.log(props.src)
    return (
        <div className="App" >
          <iframe
        width="919"
        height="525"
        src={props.src}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />   
        </div>
    )
}
export default Video;

///"https://www.youtube.com/embed/dQw4w9WgXcQ