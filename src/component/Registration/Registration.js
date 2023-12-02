import React from 'react'
import "./Registration.css"
import Heading from '../Heading'
const Registration = () => {
  return (
    <div className='container mt-5 Registration'>
     

     <h3>Registration Procedure</h3>
     <h4>Register Here (Coming Soon)</h4>
    {/* table  */}
    <div className="table mb-4">
      <div className="row">
        <div className="col-6 td">Student Delegates</div>
        <div className="col-6 td">Coming Soon</div>
      </div>
      <div className="row">
        <div className="col-6 td">Delegates from Abroad</div>
        <div className="col-6 td">Coming Soon</div>
      </div>
      <div className="row">
        <div className="col-6 td">SAARC and BRICS Countries (Students only)</div>
        <div className="col-6 td">Coming Soon</div>
      </div>
    </div>
  {/* table end */}

  <p>Registration fee can be paid through online fund transfer/ Demand Draft drawn in favour of ICIC3 payable at State Bank of India (SBI), Adisaptragram (Branch 0202). One may transfer the money through online into the ICIC3 account as per the following details:</p>

  <h2 className='mt-3'>Account Information</h2>

  {/* table */}
  <div className="table down mt-3">
      <div className="row">
        <div className="col-6 td">Account Name:</div>
        <div className="col-6 td">Will be updated..</div>
      </div>
      <div className="row">
        <div className="col-6 td">Account Number:</div>
        <div className="col-6 td">Will be updated..</div>
      </div>
      <div className="row">
        <div className="col-6 td">Bank Name:</div>
        <div className="col-6 td">Will be updated..</div>
      </div>
      <div className="row">
        <div className="col-6 td">Branch Name :</div>
        <div className="col-6 td">Will be updated..</div>
      </div>
      <div className="row">
        <div className="col-6 td">IFSC Code:</div>
        <div className="col-6 td">Will be updated..</div>
      </div>
      <div className="row">
        <div className="col-6 td">NEFT (IFSC) Code:</div>
        <div className="col-6 td">Will be updated..</div>
      </div>
    </div>
    {/* table end */}

    <div className="note my-5">
      <div className="row" style={{textAlign:'left',padding: '2px',fontWeight:"bold"}}>Note:</div>
      <div className="row" style={{minHeight:"50px",display:"flex",alignItems:"center",fontSize:"14px",lineHeight:"1.2",padding: '8px 5px'}}>Delegate’s name must be incorporated in the bank transaction. Transaction number should be sent to the organizing secretary through email after completion of transaction.</div>
    </div>
    </div>
  )
}

export default Registration
