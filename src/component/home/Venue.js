import React from 'react'
import "./Home.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {MdKeyboardArrowRight} from 'react-icons/md'
const Venue = () => {
  return (
    <div id='venue' className='row m-0 p-0'>
      <div className="col-6 SV-map m-0 p-0">
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9279490066565!2d88.37393101504554!3d22.95288048498847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930eeb863655%3A0xb3a6adf26d41d0b5!2sAcademy%20of%20Technology!5e0!3m2!1sen!2sin!4v1671910059265!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="col-6 SV-info">
        <h2 className="FM1">VENUE<span className='Icon'><MdKeyboardArrowRight/></span></h2>
        <h3 className="FM2 mt-2">AOT Block D</h3>
        <h3 className="FM3 mt-2">G.T.ROAD (ADISAPTAGRAM), AEDCONAGAR HOOGHLY-712121 WEST BENGAL, INDIA</h3>
        <h4 className="FM4 mt-4">Located at Adisaptagram on the side of G. T. Road in the industrial region of Hooghly under Kolkata Metropolitan Development Area, West Bengal, Academy of Technology is only 200 meters away from Adisaptagram Railway Station, next station to Bandel on Howrah Burdwan main line [Eastern Railway] and only 65 minutes journey from Howrah Railway Junction. Kolkata Airport is only 47 km away. Kalyani Railway Station (Nadia) is 10.4 KM from Academy of Technology.</h4>
      </div>
    </div>
  )
}

export default Venue
