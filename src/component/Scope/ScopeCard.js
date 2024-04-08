import React from "react";
import "./Scope.css"
export const ScopeCard=(props)=>{
    // console.log(props);
    return(
        <>
            <div className="tracks row">
            <div className="col-12">
              {/* <h1 className="FM1">Hello there</h1> */}
              <h1 className="FM1">{props.data.track}</h1>
              <ul>
                {
                    props.data.point.map((i)=>(
                        <li style={{paddingBottom: 10}}>{i}</li>
                    ))
                }
              </ul>
            </div>
            <div className="col-3">
              <img src="./img/track11.png" alt="" />
            </div>
            </div>        
        </>
    );
}
