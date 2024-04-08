import React, {useState, useEffect} from "react";
import Heading from "../../Heading";
import {Data} from "./Data"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Technical = () => {

  const [width,setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    })


  return (
    <>
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className={(width>768)?"mt-5":"mt-2"}>
        {(width>768)?<Heading>Technical Programme Chairs </Heading>:<><br/><br/><h2 style={{paddingLeft:"5%"}}>Technical Programme Chairs</h2></>}
      </div>
      <div className="container" style={{ fontSize: (width>768)?20:14, padding: (width>768)?50:30}}>
        <div className="row">
        <ul>
          {Data.chaire.map((i)=><li style={{paddingBottom: 10}}>{i.details}</li>)}
        </ul>
        </div>
      </div> 


      <div className={(width>768)?"mt-5":"mt-2"}>
        {(width>768)?<Heading>Technical Programme Co-Chairs</Heading>:<><br/><br/><h2 style={{paddingLeft:"3%"}}>Technical Programme Co-Chairs</h2></>}
      </div>
      <div className="container" style={{ fontSize: (width>768)?20:14, padding: (width>768)?50:30}}>
        <div className="row">
        <ul>
        {Data.cochaire.map((i)=><li style={{paddingBottom: 10}}>{i.details}</li>)}
        </ul>
        </div>
      </div>


      <div className={(width>768)?"mt-5":"mt-2"}>
        {(width>768)?<Heading>Technical Program Committee</Heading>:<><br/><br/><h2 style={{paddingLeft:"5%"}}>Technical Program Committee</h2></>}
      </div>
      <div className="container" style={{ fontSize: (width>768)?20:14, padding: (width>768)?50:30}}>
        <div className="row">
        <ul>
          {Data.comitte.map((i)=><li style={{paddingBottom: 10}}>{i.details}</li>)}
        </ul>
        </div>
      </div>
    </div>


    {/* <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className="mt-5">
        {<Heading> Technical Programme Chairs </Heading>}
      </div>

      <div className="container" style={{ fontSize: 20 }}>
        <div className="row">
          <ul>
            {Data.chaire.map((i)=><li>{i.details}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        {<Heading>Technical Programme Co-Chairs</Heading>}
      </div>

      <div className="container" style={{ fontSize: 20 }}>
        <div className="row">
          <ul>
            {Data.cochaire.map((i)=><li>{i.details}</li>)}
          </ul>
        </div>
      </div>
      
      <div className="mt-5">
        {<Heading>Technical Program Committee</Heading>}
      </div>

      <div className="container" style={{ fontSize: 20, paddingBottom: 50 }}>
        <div className="row">
          {Data.comitte.map((i)=><li>{i.details}</li>)}
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Technical;
