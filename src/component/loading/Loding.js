import React, { useRef } from 'react'
import Style from "./Loading.module.css" 
import $ from 'jquery'
const Loding = () => {
   const containerRef= useRef(null)
   const ARef= useRef(null)
   const TRef= useRef(null)
   const ORef= useRef(null)
    setTimeout(() => {
        // animate loading screen
        $(ARef.current).slideUp();
        $(TRef.current).slideUp();
        $(ORef.current).fadeOut();
      
        $(containerRef.current).fadeOut();
      
      }, 2000);
     

  return (
   
  <div className={`${Style.loadingContainer} ${Style.loader}`} ref={containerRef}>
    <div className={`${Style.a} ${Style.ll}`} ref={ARef}>
      <img className={Style.llImg}src="https://raw.githubusercontent.com/bimanTheCoderBoy/college-conference-demo/master/img/T.png" alt=""/>
    </div>
    <div className={`${Style.o} ${Style.ll}`} ref={ORef}>
      <img className={Style.llImg} src="https://raw.githubusercontent.com/bimanTheCoderBoy/college-conference-demo/master/img/gear.png" alt=""/>
    </div>
    <div className={`${Style.t} ${Style.ll}`} ref={TRef}>
      <img className={Style.llImg} src="https://raw.githubusercontent.com/bimanTheCoderBoy/college-conference-demo/master/img/A.png" alt=""/>
    </div>
  </div>
  
  )
}

export default Loding
