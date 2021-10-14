import video from "../data/video.js";
import Video from "./Video.js";
import Header from "./Header.js";
import Comments from "./Comments.js";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video 
      src= {video.embedUrl}
      />

      <Header  
      title={video.title} 
      views ={video.views}
      create ={video.createdAt}
      />

      <Comments />

    </div>
  );
}

export default App;
