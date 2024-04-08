import React,{useRef ,useEffect, useState} from 'react'
import "./Home.css"
import $ from "jquery"
import {ImPlay2} from "react-icons/im"
import { IoPauseCircle } from "react-icons/io5";
const Video = () => {

  const [width,setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    })

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current.paused) {
      videoRef.current.style.padding = '0px';
      videoRef.current.play();
    } else {
      videoRef.current.style.padding = '5px';
      videoRef.current.style.backgroundColor = 'yellow'; 
      videoRef.current.pause();
    }
  };
  //   const play=()=>{
  //       $(".VD span").css("display","none");
  //       // $(".video").css("display","block")
  //       $(".video").css("height","550px")
  //       // $(".video").css("visibility","visible");
  //       $("#AOTVideo").trigger('play');
  //       $(".VD").css("background","rgba(0, 0, 0,0.7)");

       
  //   }
  //  const pause=()=>{
  //       // $(e.target).css("visibility","hidden");
  //       $(".video").css("height","0px")
  //       // $(e.target).css("display","none");
  //       $(".VD span").css("display","block");
  //       $(".VD").css("background","rgba(0, 0, 0,0.5)");
  //       console.log("ok");
        
  //   }
  return (
    <>
      {(width)>768?
      <div className='videoContainer'>
      <video id="AOTVideo"  ref={videoRef} src="video/AOT.mp4" autoPlay muted loop onClick={togglePlay}>
        Your browser does not support HTML5 video.
      </video>
      </div>
      :<><video style={{padding: "10px", backgroundColor:'black'}} ref={videoRef} id="AOTVideo" autoPlay muted loop onClick={togglePlay}>
          <source src="video/AOT.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
      </video></>}
    </>
  )
}

export default Video
