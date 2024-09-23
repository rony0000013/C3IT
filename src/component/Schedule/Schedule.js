import React from 'react'
// import Heading from '../Heading'
import { IoMdDownload } from "react-icons/io";
import "./Schedule.css"

const Schedule = () => {
  return (
    <>
      <br/>
      <div className="container">
        {/* Program Schedule Heading */}
        <h2 className="heading">Program Schedule</h2>

        {/* Program Schedule iframe */}
        <div className="iframe-container">
          <iframe 
            title="brochure" 
            src="https://drive.google.com/file/d/1EhpEDwWfr0TFmiLBYnYj3tMLl7eWh2Wj/preview" 
            className="iframe" 
            allow="autoplay">
          </iframe>

          <a href='Program Schedule C3IT 2024.pdf' download="Program Schedule C3IT 2024" className="download-btn">
            <IoMdDownload className='download-icon'/>
            {/* <p className='download-icon'>Download PDF</p> */}
          </a>

        </div>
        <br/>
        <br/>
        <div className='saperator'></div>
        {/* Technical Schedule Heading */}
        <h2 className="heading">Technical Schedule</h2>

        {/* Technical Session Schedule iframe */}
      
        <div className="iframe-container">
          <iframe 
            title="brochure" 
            src="https://drive.google.com/file/d/1uZK2i7caAcius2KEMBQCN7_xH1fZeX04/preview" 
            className="iframe" 
            allow="autoplay">
          </iframe>
          <a href='Technical Session Schedule C3IT-2024.pdf' download="Technical Session Schedule C3IT-2024" className="download-btn">
            {/* <p className='download-icon'>Download PDF</p> */}
            <IoMdDownload className='download-icon'/>
          </a>
        </div>
      </div>
    </>
  );
  
}

export default Schedule
