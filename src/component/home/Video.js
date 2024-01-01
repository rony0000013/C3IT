import React from 'react'
import "./Home.css"
import $ from "jquery"
import {ImPlay2} from "react-icons/im"
const Video = () => {
    const play=()=>{
        $(".VD span").css("display","none");
        // $(".video").css("display","block")
        $(".video").css("height","550px")
        // $(".video").css("visibility","visible");
        $("#AOTVideo").trigger('play');
        $(".VD").css("background","rgba(0, 0, 0,0.7)");

       
    }
   const pause=()=>{
        // $(e.target).css("visibility","hidden");
        $(".video").css("height","0px")
        // $(e.target).css("display","none");
        $(".VD span").css("display","block");
        $(".VD").css("background","rgba(0, 0, 0,0.5)");
        console.log("ok");
        
    }
  return (
    <div className="VD">
    <img src="img/about-video-bg.jpg" alt="not" />
    <span onClick={play}><ImPlay2/></span>
    <video id="AOTVideo"class="video" controls onPause={pause} >
        <source src="video/AOT.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default Video
