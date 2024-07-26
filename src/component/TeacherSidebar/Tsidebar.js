import React from 'react'
import './Tsidebar.css'
import { Link } from 'react-router-dom'
import {
    BsFillHouseFill, BsFillPeopleFill, BsFillCalendarFill, BsFillBookFill, BsFillPersonLinesFill,
    BsFillPieChartFill, BsFillGearFill, BsFillCheckCircleFill
}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebarT" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsFillHouseFill className='icon_header' /> TEACHER
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
                        <BsFillPeopleFill className='icon' /> My Students
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillPersonLinesFill className='icon' /> My Classes
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillCalendarFill className='icon' /> Attendance
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillBookFill className='icon' /> Lesson Plans
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillCheckCircleFill className='icon' /> Grades
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
