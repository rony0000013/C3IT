import React,{useEffect,useState} from 'react'
import "./Home.css"
import $ from "jquery"
import {TbArrowBigUpLines} from "react-icons/tb"
const GoToTop = () => {
    $(window).on("scroll",()=>{
        if(window.scrollY>130)
        {
            $(".GoToTop").css("visibility","visible");
        }else{
            $(".GoToTop").css("visibility","hidden");
        }
    })
    const Top=()=>{
        window.scroll(0, 0);
    }

    const [width,setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    })
  return (
    <div className='GoToTop' onClick={Top}>
      <TbArrowBigUpLines/>
    </div>
  )
}

export default GoToTop
