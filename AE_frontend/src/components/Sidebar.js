import React from "react"
import Links from "../constants/links"
import { SidebarWrapper } from "../elements/SidebarElements"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarWrapper isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <button onClick={toggleSidebar} toggleSidebar={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <Links toggleSidebar={toggleSidebar} />
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar
