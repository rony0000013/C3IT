import React from 'react'
import Heading from '../Heading'
import "./Sponser.css"
import {imgData} from "./imgData.js"

const Sponsors = () => {
  return (
    <>
    <Heading>Sponsors</Heading>
    <div className="spon-wrap">
      {/* <div className="spon-row"> */}
        { imgData.map((e,i)=>
          <div className='spon-col'>
              <div className='img-cover'>
                  {
                    (i==2)?<img src={e.img} alt="" style={{height: 100, width: 100,border: "2.5px solid #6381DC",padding: "1.5px"}} />
                    :<img src={e.img} alt="" style={{height: 100, width: 100}} />
                  }
              </div>
          </div>)
        }
      {/* </div> */}
    </div>
   {/* </div> */}
   </>
  )
}

export default Sponsors
