import React from 'react'
import Nav from "./nav/nav"
import Footer from './footer/Footer'
import Wraper from './Wraper'
const Wrap = (props) => {
  return (
    <>
    <Nav/>
    <Wraper>
    {props.children}
    </Wraper>
    <Footer/>
    </>
  )
}

export default Wrap
