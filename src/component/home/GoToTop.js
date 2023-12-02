import React from 'react'
import "./Home.css"
import $ from "jquery"
import {TbArrowBigUpLines} from "react-icons/tb"
const GoToTop = () => {
    console.log(window.scrollX+"  "+window.scrollY)
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
  return (
    <div className='GoToTop' onClick={Top}>
      <TbArrowBigUpLines/>
    </div>
  )
}

export default GoToTop
