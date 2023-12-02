import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Wraper = (props) => {
  return (
    <div className="container" style={{marginTop:"6rem"}}>
      {props.children}
    </div>
  )
}

export default Wraper
