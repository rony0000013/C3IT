import React from "react";
import Heading from "../../Heading";
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
            <li>Prof. Dilip Kumar Maity, Principal, Academy of Technology</li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        {<Heading>Technical Programme Co-Chairs</Heading>}
      </div>

      <div className="container" style={{ fontSize: 20 }}>
        <div className="row">
          <ul>
            <li>Dr. Abhijit Banerjee, HoD, Department of Electronics & Communication Engg, Academy of Technology</li>
            <li>Dr. Sandip S. Chowdhury, HoD, Department of Electrical Engg, Academy of Technology</li>
            <li>Dr. Hironmay Mondal, HoD, Department of Electrical & Electronics Engg, Academy of Technology</li>
            <li>Dr. Krishna Bhowal, Registrar, Academy of Technology</li>
            <li>Dr. Jhumpa De, Professor, Department of Mechanical Engg, Academy of Technology</li>
            <li>Dr. Arindrajit Pal, Professor, Department of Computer Science Engg, Academy of Technology</li>
            <li>Dr. Srinjoy Bid, HoD, Department of Engineering Sciences & Humanities, Academy of Technology</li>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        {<Heading>Technical Program Committee</Heading>}
      </div>

      <div className="container" style={{ fontSize: 20, paddingBottom: 50 }}>
        <div className="row">
          <li>Prof. Bhabani P. Sinha, ISI, Kolkata</li>
          <li>Prof. Bhaskar Gupta, Jadavpur University</li>
          <li>Prof. Chandan Sarkar, Jadavpur University</li>
          <li>Prof. Hironmay Saha, IIEST, Shibpur</li>
          <li>
            Prof. Indranil Sengupta, Vice Chancellor, JIS; earlier CSE-IIT
            Kharagpur
          </li>
          <li>Prof. Basabi Chakraborty, Iwate Prefectural University, Japan</li>
          <li>Prof. Sudhesna Sarkar, CSE- IITKGP</li>
          <li>Prof. Jayanta Mukherjee, CSE- IITKGP</li>
          <li>Prof. Pallab Dasgupta, CSE- IITKGP</li>
          <li>Prof. Mritunjoy Chakaraborty, ECE IIT Kharagpur</li>
          <li>Prof. Tarun Bhattacharya, ECE IIT Kharagpur</li>
          <li>Prof. Prasanta K. Dasgupta, Calcutta University</li>
          <li>Prof. Pradeep K. Saha, Calcutta University</li>
          <li>Prof. Susmita Sur, ISI, Kolkata</li>
          <li>Prof. Santu Sarkar, Calcutta University</li>
          <li>Prof. Jaya Sil, IIEST, Shibpur</li>
          <li>Prof. Koushik Mondal, Calcutta University</li>
          <li>Prof. Surojit k. Roy, Calcutta University</li>
          <li>Prof. Bandana Majumder, IIT Kharagpur</li>
          <li>Prof. Amitabha Mondal, Calcutta University</li>
          <li>Prof. Suman Sengupta, Academy of Technology</li>
        </div>
      </div>
    </div>
  );
};

export default Technical;
