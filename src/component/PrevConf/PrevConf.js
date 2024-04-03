import React from "react";
import Heading from "../Heading";
import "./styles.css";

const PrevConf = () => {
  return (
    <div className="mt-5">
      {<Heading> Previous Conferences </Heading>}
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="card">
        <iframe          
          title="1stConf"
          src="https://drive.google.com/file/d/18ZkbgTSizFqSYeL7ydta-Fy9-HocXBgs/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        />
        <span className="caption">Website link: Not Available</span>
        </div>
        <div className="card">
        <iframe
          title="2ndConf"
          src="https://drive.google.com/file/d/1yDj_XV0zBooWXEsk3tVOyxoHMkdRjct5/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        />
        <span className="caption">Website link: Not Available</span>
        </div>
        <div className="card">
        <iframe          
          title="3rdConf"
          src="https://drive.google.com/file/d/1j4E1ymaOeU9lwFuHHwjZ7oqaUjEmKg2u/preview"
          width="100%"
          height="100%"
          allow="autoplay"
        />
        <span className="caption">Website link: <a href="https://c3it2015.aot.edu.in">https://c3it2015.aot.edu.in</a></span>
        </div>

      </div>
    </div>
  );
};

export default PrevConf;
