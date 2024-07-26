import React from 'react'
import {
    BsFillHouseFill, BsFillPeopleFill, BsFillCalendarFill, BsFillBookFill, BsFillPersonLinesFill,
    BsFillPieChartFill, BsFillGearFill
}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsFillHouseFill className='icon_header' /> SCHOOL
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillHouseFill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillPeopleFill className='icon' /> Students
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillPersonLinesFill className='icon' /> Teachers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillCalendarFill className='icon' /> Attendance
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillBookFill className='icon' /> Courses
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillPieChartFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
