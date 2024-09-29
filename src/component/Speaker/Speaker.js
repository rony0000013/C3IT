import React, {useState, useEffect} from "react";
import Heading from "../Heading";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Speaker.css";
// import $ from "jquery";
// import Generator from "../Committee/Generator";
import Data from "./Data";
import Data1 from "./Data1";
import Data2 from "./Data2";

const Speaker = () => {
  const [width,setwidth]=useState(window.innerWidth);
    useEffect(()=>{
      window.addEventListener("resize",()=>{
        setwidth(window.innerWidth)
      })
    })

  return (
    <div className="spwrapper m-0 pb-5" style={{ width: "100%", backgroundColor: "white", padding: "1rem 0" }}>
    <div className="mt-5 container " >
      {/* {(width>768)?<Heading>KEYNOTE SPEAKERS</Heading>:<Heading><h1 style={{fontWeight: "bold"}}>KEYNOTE SPEAKERS</h1></Heading>} */}
      {(width>768)?<Heading>CHIEF GUEST</Heading>:<Heading><h1 style={{fontWeight: "bold"}}>CHIEF GUEST</h1></Heading>}
      <div className=" " style={{width:"100%", display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      {
      
        Data2.map((e,index)=>{
          const value1= <div className="sp-wrap">
            
            <div className="row">
          
              <div className="col-md-8 sp-info">
              <div className="sp-info-child">
              <div className="sp-topic-wrap m-2">
                <span className="sp-topic">Name :  <p>{e.name}</p></span>
                
                </div>
                {/* <div className="sp-topic-wrap m-2">
                <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
                </div>
                <div className="sp-topic-wrap m-2">
                <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
                </div> */}
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
            <div className="col-md-3 sp-img " style={{padding:"0px",paddingLeft:(width>768)?"50px":"0px",display:"flex",justifyContent:"center",alignItems:"center" }} >
              <img src={e.profileImg} alt="" />
              </div>
              <div className="col-md-9 sp-info" style={(width>768)?{paddingLeft:"30px" ,paddingRight:"50px"}:{paddingLeft: "30px", paddingRight: "30px"}}>
                <div className="sp-info-child">
                <div className="sp-topic-wrap m-2">
                  <span className="sp-topic">Name :  <p>{e.name}</p></span>
                  </div>
                  {/* <div className="sp-topic-wrap m-2">
                  <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
                  </div> */}
                  {/* <div className="sp-topic-wrap m-2">
                  <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
                  </div> */}
                  <div className="sp-topic-wrap m-2">
                  <span className="sp-topic">Details :  <p>{e.details}</p></span>
                  </div>
                  </div>
              </div>
            </div>
          </div>
          return(
              (width>768)?(index%2==0)?value1:value2:value2
            )
      })
      }
      </div>
      {(width>768)?<Heading>KEYNOTE SPEAKER</Heading>:<Heading><h1 style={{fontWeight: "bold"}}>KEYNOTE SPEAKER</h1></Heading>}
      <div className=" " style={{width:"100%", display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
{
 
  Data1.map((e,index)=>{
    const value1= <div className="sp-wrap">
      
      <div className="row">
     
        <div className="col-md-8 sp-info">
        <div className="sp-info-child">
        <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Name :  <p>{e.name}</p></span>
          
          </div>
          {/* <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
          </div> */}
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
      <div className="col-md-3 sp-img " style={{padding:"0px",paddingLeft:(width>768)?"50px":"0px",display:"flex",justifyContent:"center",alignItems:"center" }} >
         <img src={e.profileImg} alt="" />
        </div>
        <div className="col-md-9 sp-info" style={(width>768)?{paddingLeft:"30px" ,paddingRight:"50px"}:{paddingLeft: "30px", paddingRight: "30px"}}>
          <div className="sp-info-child">
          <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Name :  <p>{e.name}</p></span>
            </div>
            {/* <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
            </div> */}
            {/* <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
            </div> */}
            <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Details :  <p>{e.details}</p></span>
            </div>
            </div>
        </div>
      </div>
    </div>
    return(
        (width>768)?(index%2==0)?value1:value2:value2
      )
 })
}
</div>

      {(width>768)?<Heading>SPEAKERS</Heading>:<Heading><h1 style={{fontWeight: "bold"}}>SPEAKERS</h1></Heading>}

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
          {/* <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
          </div>
          <div className="sp-topic-wrap m-2">
          <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
          </div> */}
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
      <div className="col-md-3 sp-img " style={{padding:"0px",paddingLeft:(width>768)?"50px":"0px",display:"flex",justifyContent:"center",alignItems:"center" }} >
         <img src={e.profileImg} alt="" />
        </div>
        <div className="col-md-9 sp-info" style={(width>768)?{paddingLeft:"30px" ,paddingRight:"50px"}:{paddingLeft: "30px", paddingRight: "30px"}}>
          <div className="sp-info-child">
          <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Name :  <p>{e.name}</p></span>
            </div>
            {/* <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Designation :  <p>{e.designation}</p></span>
            </div> */}
            {/* <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Topic of Speech :  <p>{e.topic}</p></span>
            </div> */}
            <div className="sp-topic-wrap m-2">
            <span className="sp-topic">Details :  <p>{e.details}</p></span>
            </div>
            </div>
        </div>
      </div>
    </div>
    return(
        (width>768)?(index%2==0)?value1:value2:value2
      )
 })
}
</div>
    <br/><br/>
    </div>
    </div>
  );
};

export default Speaker;
