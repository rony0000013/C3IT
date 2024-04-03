import React from 'react'
import Heading from '../Heading'
import "./Attraction.css"
import {ImLocation} from "react-icons/im"
import Dummy from "../home/Dummy"
const Attractions = () => {
  return (
    <div className='mt-5 container'>
      {<Heading>Attractions</Heading>}
      {/* item-start */}
      <div className="row">
     
        <div className="col-md-4 ">
          <div className="Attraction-page">

            <img
              src="https://lh3.googleusercontent.com/p/AF1QipN8MI--BvroAI2ZYYSOtAcYksF7slvzwePAlvEM=s1360-w360-h102"
              alt="speaker img"  />
            <ul>
              <li>Bandel Church</li>
              <li>
                <a href="https://goo.gl/maps/tELkuxPDw7nonep18">
                  <p style={{margin:"0"}}> <ImLocation/>Open Map </p>
                </a>
              </li>
              <li><a href="https://en.wikipedia.org/wiki/Basilica_of_the_Holy_Rosary,_Bandel"
                >Read More</a></li>
            </ul>

          </div>
        </div>
    
{/* item-end */}
{/* item-start */}

        <div className="col-md-4">
          <div className="Attraction-page">

            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMNtRpyPTi5tmt1a_rZfeJttU-_3Oq2ssZ8lCH4=s1360-w1360-h102"
              alt="speaker img"  />
            <ul>
              <li>Hooghly Imambara</li>
              <li>
                <a href="https://goo.gl/maps/xsg8wcbaFzRUSQ9g6" >
                  <p style={{margin:"0"}}> <ImLocation/>Open Map </p>
                </a>
              </li>
              <li><a href="https://en.wikipedia.org/wiki/Hooghly_Imambara"
                >Read More</a></li>
            </ul>

          </div>
        </div>
 
{/* item-end */}
{/* item start */}

        <div className="col-md-4">
          <div className="Attraction-page">

            <img
              src="https://lh3.googleusercontent.com/p/AF1QipP4VKz78PIl8flQOSA1Ew15ugeXgZszeE-smsAf=s260-w160-h120"
              alt="speaker img"  />
            <ul>
              <li>Hanseswari Temple</li>
              <li>
                <a href="https://goo.gl/maps/s1Wx7heECiWvk4U37">
                  <p style={{margin:"0"}}> <ImLocation/>Open Map </p>
                </a>
              </li>
              <li><a href="https://en.wikipedia.org/wiki/Hangseshwari_Temple"
                >Read More</a></li>
            </ul>

          </div>
        </div>
    
{/* item end */}
    </div>
    <Dummy height="68px"/>
     </div>
     
  )
}

export default Attractions
