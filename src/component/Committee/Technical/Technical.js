import React from "react";
import Heading from "../../Heading";
import {Data} from "./Data"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Technical = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className="mt-5">
        {<Heading> Technical Programme Chairs </Heading>}
      </div>

      <div className="container" style={{ fontSize: 20 }}>
        <div className="row">
          <ul>
            {/* <li>Dr. Dilip Kumar Maity, Principal, Academy of Technology</li> */}
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
    </div>
  );
};

export default Technical;
