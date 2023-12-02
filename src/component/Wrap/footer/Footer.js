import React from 'react'
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillInstagram,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import Style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={Style.footerCustom}>
    <div className={Style.iconsFooter}>
          
          <a href="mailto:admin@aot.edu.in"><span className={Style.icon}><BsEnvelopeFill/></span></a>
          <a href="https://www.instagram.com/aotconnect/"><span className={Style.icon}><AiFillInstagram/></span></a>
          <a href="https://www.linkedin.com/school/academy-of-technology/"><span className={Style.icon}><AiFillLinkedin/></span></a>
          <a href="https://youtube.com/channel/UC1lroAhlIz6Reni_I2dpaHA"><span className={Style.icon}><AiFillYoutube/></span></a>
        </div>
    <span>© Copyright Academy of Technology 2022 | All rights reserved</span>
</div>
  )
}

export default Footer
