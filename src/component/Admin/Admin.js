import React, { useState } from 'react'
import Header from '../Heade/Header'
import Home from '../Home/Home'
import Sidebar from '../Sidebar/Sidebar'
import './Admin.css'

function Admin() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Home />
        </div>
    )
}

export default Admin