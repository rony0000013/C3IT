import React,{useState, useEffect} from "react";
import Heading from "../../Heading";
import {Data} from "./Data";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Advisory = () => {

  const [width,setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    })

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className={(width>768)?"mt-5":"mt-2"}>
        {(width>768)?<Heading> Advisory Committee </Heading>:<><br/><br/><h2 style={{paddingLeft:"20%"}}>Advisory Committee</h2></>}
      </div>

      <div className="container" style={{ fontSize: (width>768)?20:14, padding: (width>768)?50:30}}>
        <div className="row">
        <ul>
          {Data.map((i)=><li style={{paddingBottom: 10}}>{i.details}</li>)}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
