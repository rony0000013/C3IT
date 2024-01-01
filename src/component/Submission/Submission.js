import React from "react";
import "./Submission.css";
const Submission=()=>{
    return(
        <>
            <div className="main">
                {/* 1st div */}
                    <img className="head" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSZf47xF0flsx19lWyFL38md5pMEw4tRL0DbatY-_cFurNH_6DKguM-KLcWxtnf96vRE&usqp=CAU" alt="AOT"/>

                    <img className="header" src="https://aot.edu.in/wp-content/uploads/2017/02/About-Image.jpg" alt="AOT"/>
                {/* </div> */}

                {/* 2nd div */}
                <div className="submissionContent">
                    <h1>Online</h1><h1><span style={{color:"orange"}}>Paper</span> Submission</h1>
                    <br/>
                    <p>
                        <span style={{fontSize:'25px'}}>We</span> encourage you to contribute to and help shape the conference through submissions. For the technical research track, we invite high quality submissions of papers describing original and unpublished results of conceptual, constructive, empirical, experimental, or theoretical work in all areas of Computer, Communication, Control and Information Technology. Please review the submission and formatting instructions carefully. Submissions that do not comply with the instructions and size limits will be rejected without review.
                    </p>
                    <br/>
                    <p>
                        Prospective authors are requested to submit their manuscript <span>(full length paper)</span> in PDF format, not exceeding 6 pages in A4 size. The manuscript should be in IEEE conference format. Authors may also access Template given in this website. Submitted papers must not have been published previously and they must not be currently under consideration for publication at another venue. All submissions will be handled electronically and submitted papers will be peer reviewed by the panel of reviewers maintaining the standard of IEEE.
                    </p>
                    <br/>
                    <p>
                        Only online submission is allowed for C3IT-2024. All papers should be submitted through
                    </p>
                    <p><span>Microsoft CMT [<a href="https://cmt3.research.microsoft.com/C3IT2024" style={{textDecoration:"none",color:"orange"}}>https://cmt3.research.microsoft.com/C3IT2024</a>]</span>. </p>
                    <p>
                    Email submission will NOT be accepted. The instructions for submitting your paper in C3IT-2024 is given below.
                    </p>
                    <br/>


                    <p style={{color:"orange",fontWeight: 700}}>The submitted paper should NOT have the authors name in it.</p>
                    <p>Charges for extra pages will be <span>@ INR 1000 (USD 50)</span> per page.</p>
                    <br/>




                    <div className="submissonLink">
                    
                    <p>Click on this link</p>
                    {/* <a href="https://cmt3.research.microsoft.com/C3IT2024" style={{color:"orange",textDecoration:"none",fontWeight: 700}}>https://cmt3.research.microsoft.com/C3IT2024</a> */}
                    
                    
                    <a href="https://docs.google.com/document/d/10KuczbfUAwfr-IQFVAcOd9F77P5dmPzd/edit?usp=sharing&ouid=115520160363554315095&rtpof=true&sd=true" style={{textDecoration:"none",color:"orange"}}><p>Click here to download the IEEE conference template <span style={{textDecoration:"underline"}}>word</span> format.</p></a>

                    <a href="https://drive.google.com/file/d/1g7BdbxOVujjA0jBGPrWpFE4xUr1TBkGA/view?usp=sharing" style={{textDecoration:"none",color:"orange"}}><p>Click here to download the IEEE conference template <span style={{textDecoration:"underline"}}>LaTeX</span> format.</p></a>
                </div>
                </div>
                {/* 3rd div */}
                {/* <div className="submissonLink">
                    
                    <p>Click on this link</p>
                    <a href="https://cmt3.research.microsoft.com/C3IT2024" style={{color:"orange",textDecoration:"none",fontWeight: 700}}>https://cmt3.research.microsoft.com/C3IT2024</a>
                    <br/>
                    <br/>
                    
                    <a href="#" style={{textDecoration:"none",color:"orange"}}><p>Click here to download the IEEE conference template.</p></a>
                    <a href="#" style={{color:"orange",textDecoration:"none"}}><p>Click here to download the IEEE conference template.</p></a>
                </div> */}
            </div>
        </>
    );
}

export default Submission;