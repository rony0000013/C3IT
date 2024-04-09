import React, { useEffect, useState } from "react";
import "./Home.css";
import Venue from "./Venue";
import Faq from "./Faq";
import Contact from "./Contact";
import About from "./About";
import Brochure from "./Brochure";
import Timer from "./Timer";
import $ from "jquery";
import Video from "./Video";
import Dummy from "./Dummy";
import Speaker from "../Speaker/Speaker";
// var index = 0;
// setInterval(() => {
//   index = (index + 1) % 3;
//   $(".slides").css("display", "none");
//   console.log($(".slides")[index])
//   $($(".slides")[index]).css("display", "block");

// }, 3000);

const Slider = () => {

  const [width,setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    })
  //   const bgImg=["img/slider-img-1.jpg","img/slider-img-2.jpg","img/slider-img-3.jpeg"]
  //   const[index, setIndex]=useState(0);
  //   {

  // }
  return (
    <div className="slider">
      {/* <img src="img/slider-img-1.jpg" alt="" className="slides" />
      <img src="img/slider-img-2.jpg" alt="" className="slides" />
      <img src="img/slider-img-3.jpeg" alt="" className="slides" /> */}
      <div className="content">
        <span>
          <h2 style={{fontWeight: 'normal', fontSize: "2vmax", fontStyle: 'italic',margin: "10px", paddingTop: "30px",marginTop:(width>768)?"0vmax":"-10vmax"}}>4<sup>th</sup> International Conference on</h2>
          <h1 style={{fontWeight: 'bold', fontSize: "3vmax", margin: "10px"}}>
          Computer, Communication, Control and Information Technology <br/>( C3IT ), 2024
          </h1>

          {/* <h2 style={{fontWeight: 'normal',display:"inline"}}>based on Conference Theme </h2>
          <h1 style={{display:"inline"}}>
            INTELLIGENT INTERNET OF THINGS </h1><br/> */}

          <h2 style={{fontWeight: 'normal',display:"inline"}}></h2>
          {/* <h1 style={{display:"inline"}}><span style={{fontWeight: 'normal', fontSize: 30}}>Theme:</span> Data-driven IoT for Sustainable Development <br/>

          </h1> */}
          
          <h3 style={{fontSize: "2vmax"}} >
            ( 28<sup>th</sup> & 29<sup>th</sup> September, 2024 )
          </h3>
          <h3>
            ( H Y B R I D &nbsp; M O D E )
          </h3>
          <br />
          <img src="img/diya_logo.png" style={{height: 100, width: 100, padding: 10, backgroundColor: 'white', borderRadius: 50, opacity: 0.8}}></img>
          <br />
          <br />
          {/* <img src="img/conflogo1.png" style={{height: 120, width: 120, marginBottom: -10}}></img> */}
          <h3 style={{fontWeight: 'normal', fontSize: 18}}>Organised by:</h3>
          <h2 className="m-0" style={{fontWeight: 'normal', fontSize: 26}}>Academy of Technology</h2>
          {/* <h5>Aedconagar, Adisaptagram, Hooghly,</h5>
          <h5>West Bengal - 712121</h5> */}
          <br />

          <h3 style={{fontWeight: 'normal', fontSize: 18}}> Technically Co-sponsored by </h3>
          <h2 style={{fontWeight: 'normal', fontSize: "2.5vmax"}}>IEEE Kolkata Section</h2>
          {(width>768)?<img src="img/ieee-kolkata-section-logo.png" style={{height: "auto", width: "10vmax", borderRadius: 0, borderRadius: ".5vmax" }}/>:<img src="img/ieee-kolkata-section-logo.png" style={{height: "auto", width: "17vmax", borderRadius: 0, borderRadius: ".5vmax" }}/>}
         
        </span>
      </div>
    </div>
  );
};
const Home = () => {
  // const [width,setwidth]=useState(window.innerWidth);
  //   useEffect(()=>{
  //     window.addEventListener("resize",()=>{
  //       setwidth(window.innerWidth)
  //     })
  //   })
  return (
    <>
      <Slider />
      {/* <Timer /> */}
      <Brochure />
      <Video />
      {/* {(width>=768)?<Video />:<Video />} */}
      <Dummy height="5rem" />
      <About />
    
      <Speaker />
      
      <Contact />
      <Faq />
      <Venue />
    </>
  );
};

export default Home;
