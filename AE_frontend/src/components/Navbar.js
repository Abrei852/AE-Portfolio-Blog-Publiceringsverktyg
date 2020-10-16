import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import { NavWrapper, Div, NavHeaderWrapper } from "../elements/NavElements"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavWrapper>
      <Div>
        <NavHeaderWrapper>
          <img src={logo} alt="logo" />
          <button onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </NavHeaderWrapper>
        <PageLinks/>
      </Div>
    </NavWrapper>
  )
}

export default Navbar
