import React, { useState } from 'react';
import "./Registration.css";
import Heading from '../Heading';
import RegData from './RegistrationData';
const Registration = () => {
  const [colour,serColor]=useState("rgb(39, 29, 84)");
  const data=RegData;
  const key=Object.keys(data[0].pay);
  // console.log(data[0].details);
  // console.log(key);
  return (

  <>
    <div className="regmain">
      {/* <img src="https://aot.edu.in/wp-content/uploads/2017/05/Rules-for-Fees-Payment-Image.jpg"></img> */}
        {/* publication */}
        <div className='publicaiton'>
          {/* <img src="https://cdn.pixabay.com/photo/2017/06/05/16/24/megaphone-2374502_1280.png" alt="AOT"/> */}
          <div>
            <h1 style={{textAlign:"center"}}>PUBLICATION</h1><br/>
            <p style={{textAlign:"justify"}}>
              Accepted and presented papers will be published in the final Conference Proceedings which are eligible for publication in IEEE Xplore® also. Author(s) of accepted papers will be requested to submit camera ready paper in pdf format using IEEE PDF eXpress along with IEEE copyright transfer form during the submission of camera ready paper.
            </p>
            <a href="#" style={{textDecoration:"none", color: "orange",fontWeight:700,fontSize:"20px",textAlign:"center"}}><p>Learn more about our previous IEEE Conference, ACES-2014 Publication (IEEE Xplore).</p></a>
          </div>
        </div>
        <hr></hr>
        {/* Registration */}
        <div className="register">
          <h1 style={{textAlign:"center"}}>REGISTRATION</h1><br/>
          <p className='regcontents'>
            It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the Proceedings and be included in the Technical Program. For authors with multiple accepted papers, one full registration is valid for up to 2 papers. Registration fee, which includes the conference registration kit, participation in all the activities of the conference, and intersession refreshments, is as follows:
          </p>          
          <div className="regtables">

            <table className='regtable1'>
              <th style={{backgroundColor:colour}}><p style={{color:"white"}}>Event</p></th><th style={{backgroundColor:colour}}><p style={{color:"white"}}>Date</p></th>
              <tr>
              <td style={{backgroundColor:colour}}><p style={{color:"white"}}>Last date for submission</p><p style={{color:"white"}}>of full paper</p></td>
                <td>15.03.2024</td>
              </tr>
              <tr>
                <td style={{backgroundColor:colour}}><p style={{color:"white"}}>Intimation of acceptance</p></td>
                <td>01.08.2024</td>
              </tr>
              <tr>
              <td style={{backgroundColor:colour}}><p style={{color:"white"}} >Last date for submission</p><p style={{color:"white"}}>of camera ready paper</p></td>
                <td>01.09.2024</td>
              </tr>
              <tr>
                <td style={{backgroundColor:colour}}><p style={{color:"white"}}>Registration deadline</p></td>
                <td>01.09.2024</td>
              </tr>
              <tr>
                <td style={{backgroundColor:colour}}><p style={{color:"white"}}>Conference</p></td>
                <td>
                  <tr>28.09.2024</tr>
                  <tr>29.09.2024</tr>
                </td>
              </tr>
            </table>
            <table className='regtable2'>
              <th style={{backgroundColor:colour}}><p style={{color:"white"}}>Category</p></th>
              <th style={{backgroundColor:colour}}><p style={{color:"white"}}>Member</p></th>
              <th style={{backgroundColor:colour}}><p style={{color:"white"}}>INDIAN</p></th>
              <th style={{backgroundColor:colour}}><p style={{color:"white"}}>FOREIGN</p></th>
              <tr>
                <td style={{backgroundColor:colour}}>
                  <p style={{color:"white"}}>Academician/Research</p>
                  <p style={{color:"white"}}>Scholar/Industry Professionals</p>
                </td>
                <td>
                  <tr>IEEE Member</tr>
                  <tr>Non-IEEE Member</tr>
                </td>
                <td>
                  <tr>7000(INR)</tr>
                  <tr>8000(INR)</tr>
                </td>
                <td>
                  <tr>US $150</tr>
                  <tr>US $200</tr>
                </td>
              </tr>
              <tr>
                <td style={{backgroundColor:colour}}><p style={{color:"white"}}>Conference</p></td>
                <td>
                  <tr>IEEE Member</tr>
                  <tr>Non-IEEE Member</tr>
                </td>
                <td>
                  <tr>6000(INR)</tr>
                  <tr>7000(INR)</tr>
                </td>
                <td>
                  <tr>US $100</tr>
                  <tr>US $120</tr>
                </td>
              </tr>
              <tr>
                <td style={{backgroundColor:colour}}><p style={{color:"white"}}>Attendee only</p></td>
                <td>
                  <tr>IEEE Member</tr>
                  <tr>Non-IEEE Member</tr>
                </td>
                <td>
                  <tr>2500(INR)</tr>
                  <tr>3000(INR)</tr>
                </td>
                <td>
                  <tr>US $40</tr>
                  <tr>US $50</tr>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <hr/><br/>
      {/* Guidelines */}
      <div className="Guidelines">
        <h1 style={{textAlign:"center"}}>Important <span style={{textDecoration:"none", color: "orange",fontWeight:700}}>Guidelines</span> for Authors / Participants</h1><br/>
        <div>
            <h3>Registration Guidelines</h3><br/>
            <ul>
              {
                data[0].details.map((e)=>(<li style={{textAlign:"justify"}}>{e}</li>))
              }
            </ul>
            <h5 style={{color:"red"}}>
            Rs. 500/- will be charged for the late registration.
            </h5><br/>
            <h3>Non Refund Guidelines</h3><br/>
            <ul>
              {
                data[0].nonrefund.map((e)=>(<li style={{textAlign:"justify"}}>{e}</li>))
              }
            </ul>
            <a href="#" style={{textDecoration:"none", color: "orange",fontWeight:700}}><p>DOWNLOAD THE REGISTRATION FORM</p></a>
            <a href="#" style={{textDecoration:"none", color: "orange",fontWeight:700}}><p>DOWNLOAD THE LIST OF ACCEPTED PAPERS</p></a>
        </div>
      </div> 
      <hr/>
      {/* MODE OF PAYMENT  */}
      <div className='pay'>
            <h1 style={{textAlign:"center"}}>MODE OF PAYMENT</h1><br/>
            <p>
              <span style={{textDecoration:"none", color: "orange",fontWeight:700}}>Payment for registration can be made by way of Demand Draft</span> (from any nationalized bank) and should be drawn in favour of <span style={{textDecoration:"none", color: "black",fontWeight:700}}>"Academy of Technology Conference Account"</span> payable at <span style={{textDecoration:"none", color: "black",fontWeight:700}}>Kolkata.</span>
            </p>
            <ul>
              <li>Mention the paper ID, Phone No. and e-mail id on back side of the DD.</li>
              <li>DD acknowledgement will be sent to the e-mail id mentioned on the back side of the DD.</li>
            </ul>
            <p style={{textDecoration:"none", color: "orange",fontWeight:700, fontSize: "20px"}}>Payment for registration can also be made by way of bank transfer.</p>
            <ul>
              {key.map((k)=>(<p><span style={{fontWeight:700, fontSize: "16px"}}>{k}</span>: {data[0].pay[k]}</p>))}
            </ul>
      </div><hr/>

    {/* COMMUNICATION */}
    <div className='communication'>
        <div>
        <h1 style={{textAlign:"center"}}>COMMUNICATION</h1><br/>
        <div>
          <p style={{textDecoration:"none", color: "orange",fontWeight:700, fontSize: "20px"}}>For Softcopy (Registration Form and Bank Transfer Receipt):</p>
          <ul>
          {data[0].soft.map((s)=>(<li>{s}</li>))}
          </ul>
        </div>
          <p style={{textDecoration:"none", color: "orange",fontWeight:700, fontSize: "20px"}}>For Hardcopy (DD/ Bank Transfer Receipt and Registration Form):</p>
          <ul>
          {data[0].hard.map((s)=>(<li>{s}</li>))}
          </ul>
        </div>
        <h5 style={{color:"red"}}>
            Rs. 500/- will be charged for the late registration.
        </h5>
    </div>
    </div>
  </>
  );
}

export default Registration
