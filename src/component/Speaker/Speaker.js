import React from "react";
import Heading from "../Heading";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Speaker.css";
import $ from "jquery";
import Generator from "../Committee/Generator";
import Data from "./Data";

const Speaker = () => {
  return (
    <div className="spwrapper m-0 pb-5" style={{ width: "100%", backgroundColor: "white", padding: "1rem 0" }}>
    <div className="mt-5 container " >
      <Heading>KEYNOTE SPEAKERS</Heading>

      {/* <div style={{"marginBottom": 100}}>
        <Generator data={Data} />
      </div> */}
<div className=" " style={{width:"100%", display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
{
 
  Data.map((e,index)=>{
    const value1= <div className="sp-wrap">
      
      <div className="row">
     
        <div className="col-md-8 sp-info">
        <div className="sp-info-child">
        <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Name :  <p>{e.name}</p></span>
          
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Details :  <p>{e.details}</p></span>
          </div>
          </div>
         

        </div>
        <div className="col-md-4 sp-img text-center" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }} >
         <img src={e.profileImg} alt="" />
        </div>
      </div>
    </div>
  const value2= <div className="sp-wrap">
      
      <div className="row">
      <div className="col-md-3 sp-img " style={{padding:"0px",paddingLeft:"50px",display:"flex",justifyContent:"center",alignItems:"center" }} >
         <img src={e.profileImg} alt="" />
        </div>
        <div className="col-md-9 sp-info" style={{paddingLeft:"30px" ,paddingRight:"50px"}}>
        <div className="sp-info-child">
        <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Name :  <p>{e.name}</p></span>
          
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Details :  <p>{e.details}</p></span>
          </div>
          </div>
          

        </div>
        
      </div>
    </div>
    return(
   (index%2==0)?value1:value2
      )
 })
}
   
      </div>
      
    </div>
    </div>
  );
};

export default Speaker;
