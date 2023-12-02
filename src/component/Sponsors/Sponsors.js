import React from 'react'
import Heading from '../Heading'
import "./Sponser.css"
const imgData=[
  {
  img:"img/ieee-computer-society-logo.png"
}
];

const Sponsors = () => {
  return (
    <div className='mt-5'>
    {<Heading>Sponsors</Heading>}
    <div className="container-fluid spon-wrap">
    <div className="row spon-row">
    
     { imgData.map((e,i)=><div className="col-md-4 " >
     <div className='spon-col'>
     <div className='img-cover'>
        {
           
  
          (i==2)?<img src={e.img} alt="" style={{height: 130, width: 130,border: "2.5px solid #6381DC",padding: "1.5px"}} />
          :<img src={e.img} alt="" style={{height: 130, width: 130}} />
        }
        </div>
        </div>
      </div>)
     }
      
    </div>
    </div>
   </div>

  )
}

export default Sponsors
