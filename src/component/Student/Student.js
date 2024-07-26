import React, { useState } from 'react'
import Header from '../Heade/Header'
import Ssidebar from '../Stsidebat/Ssidebar'
import Home from '../Home/Home'

function Teacher() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            < Ssidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Home />
        </div>
    )

}

export default Teacher