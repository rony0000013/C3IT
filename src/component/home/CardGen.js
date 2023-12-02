import React from 'react'
import "./CardGen.css"
import {BsFacebook} from "react-icons/bs"
import {RxLinkedinLogo} from "react-icons/rx"
import {GrTwitter} from "react-icons/gr"
const CardGen = (props) => {
   const Data=props.data;
  return (

    <div className='container CardGenerator mb-5'>
   
      {
        Data.map((e)=>{
            return(
                <div className='itemContainer'>
                <div className='item'>
                <h2 className="name m-0 mb-1 p-0">{e.name}</h2>
                <p className='post m-0 mb-2 p-0'>{e.post}</p>
                <p className="info m-0 mb-2 p-0">{e.detail}</p>
                <p className='post m-0 mb-2 p-0'>{e.mail}</p>
                <p className='post m-0 mb-2 p-0'>{e.phone}</p>
                {/* <div className="social m-0 p-0">
                   <span>
                   <a href={e.twLink}>
                    <GrTwitter/>
                    </a>
                    </span>
                    <span>
                    <a href={e.lnLink}>
                    <RxLinkedinLogo/>
                    </a>
                    </span>
                    <span>
                    <a href={e.fbLink}>
                    <BsFacebook/>
                    </a>
                    </span>
                </div> */}
                </div>
                </div>
            )
        })
      }
    </div>

  )
}

/*
F3F4F6 //body
286*116
*/

export default CardGen
