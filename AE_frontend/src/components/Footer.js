import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FooterWrapper } from "../elements/FooterElements"

const Footer = () => {
  return (
    <FooterWrapper>
        <SocialLinks />
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Abraham Eishow</span> | all rights reserved
        </h4>
    </FooterWrapper>
  )
}

export default Footer
