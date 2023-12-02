import React, { useRef, useState } from 'react'
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from "react-icons/md";


const About = () => {
  return (
    <div className='About mb-0' id='gallery'>
      <div className="row">
        <div className="col-6 col-up">
        <h2 className='FM1 mb-5 '>About AOT</h2>
       <h4 className='FM4'> Academy of Technology was established in 2003 by an alumnus of IIT Kharagpur and IIM Calcutta with the objective of instituting academic excellence and a spirit of enquiry among young minds. Several renowned educationists, prominent alumni from IITs & IIMs and experts from the industry have been at the helm of the college from its very inception. During its early years, Prof. G S Sanyal – distinguished academician, outstanding teacher and ex-Director of IIT Kharagpur – was the Chairman of the Advisory Committee of the college. AOT’s very first Principal was none other than Prof P B Dutta Gupta, a revered teacher of IIT Kharagpur, who continued to enrich AOT with valuable suggestions as BOG member till the last day of his life. Prof D Bhattacharya, retired Professor & HOD, E & EC Engg., IIT Kharagpur, is currently the Chairman of the Board of Governors and Director of the college. The advice and blessings of these stalwart figures have enabled AOT to achieve a foremost position among its peers in engineering education. AOT also has an impressive faculty profile. Senior professors with excellent track records at universities, IITs and other premium institutions and highly motivated and talented young faculty members with Masters and Doctoral degrees are the major strength of this institution.
       </h4>
        </div>
        <div className="col-6 col-down">
        <h2 className='FM1 mb-5'>Gallery</h2>
        <Gallery/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 FM4" >

        Our campus is situated in the lush green & tranquil environs of Adisaptagram and boasts of an atmosphere that is conducive to comprehensive development of young talents. We have around 2600 undergraduate engineering students of Mechanical Engineering, Computer Science & Engineering, Computer Science & Business System (in association with TCS), Electronics & Communication Engineering, Electrical Engineering, and Electrical & Electronics Engineering. Our vision is to become an institute of national standing in education and innovation and hence over the years we have taken several initiatives to enrich our teaching-learning and research works. Our students and faculty have submitted original project proposals to DST, MSME, etc. and recently our project for Amrit Sarovar under the Ministry of Home and Urban Affairs was approved. A number of projects have been submitted to DST, DSIR, ISRO and SERB-FIRE from our college. Some of the important projects which are under active consideration are: • Development of cost-effective technology/ instrumentation in waste management systems such as Sensor based bins, Sensor based automatic waste collection system through garbage chutes in residential buildings under the A2K+ STUDIES PROGRAMME of DSIR • Experimental and Numerical investigation of Delamination of Laminated Composites, Funded by ISRO. We have a fully functional AICTE Institute Innovation Cell at our college and currently several start-ups are being seeded under it. We aim at widening the scope of our activities and intend to submit projects in other areas as well as work further on our Entrepreneurship Cell.
        </div>
      </div>
    </div>
  )
}

const Gallery=()=>{
    
    const imgArray=["img/gallery-img-1.jpeg","img/gallery-img-2.jpeg","img/gallery-img-3.jpeg","img/gallery-img-4.jpeg","img/gallery-img-5.jpg","img/gallery-img-6.jpg","img/gallery-img-7.jpg"];
    const[img, setImg]=useState(0);
   
    const prev=()=>{
        
        setImg(((img-1)+7)%7);
    }
    const next=()=>{
        
        setImg((img+1)%7);
    }
    return(
        <div className="Gallery" >
            <div className="prev g-button" onClick={prev}><MdKeyboardArrowLeft/></div>
            <div className="content">
                <img src={imgArray[img]} alt="not-found" />
            </div>
            <div className="next g-button"  onClick={next}><MdKeyboardArrowRight/></div>
        </div>
    )
}

export default About
