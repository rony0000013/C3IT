import React from "react";
import Heading from "../../Heading";
import {Data} from "./Data";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Advisory = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      
      <div className="mt-5">
        {<Heading> Advisory Committee </Heading>}
      </div>

      <div className="container" style={{ fontSize: 20, paddingBottom: 50}}>
        <div className="row">
        <ul>
          {Data.map((i)=><li>{i.details}</li>)}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
