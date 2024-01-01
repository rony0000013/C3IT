import React from 'react'
import Heading from '../Heading'
import "./Scope.css";
import ScopeData from './ScopeData/ScopeData';
import { ScopeCard } from './ScopeCard';
const Scope = () => {
  return (
    <>
    <div className='mt-5'>
      {/* {<Heading>THE C3IT 2024</Heading>} */}
      <h1 style={{textAlign:"center", padding:"5vh 0"}}>
      THE C3IT 2024
      </h1>
      <p style={{padding: "0 8vw"}}>
      Organizing committee of C3IT2024 cordially invites the young and dedicated engineers, scientists, and researchers from industries, academic institutions and research centers to present their original ideas and findings in the emerging areas of Computer, Communication, Control and Information Technology.</p>
      <p style={{padding: "0 8vw"}}>
      We also have the pleasure to invite challenging papers from the elite persons in research, industry and academics in the exciting and emerging interdisciplinary area in which a wide range of theory and methodologies are being investigated and developed to tackle complex and challenging problems.
      </p>
      <h3 style={{textAlign:"center", padding:"5vh 0"}}>
      Topics of interest for submission include, but are not limited to:
      </h3>
      <div className="container scope">

      {/* passing props to ScopeCard component */}
      {ScopeData.map((i)=>(
          <ScopeCard data={i}/>
      ))}

      </div>
    </div>
    </>
  )
}

export default Scope;
