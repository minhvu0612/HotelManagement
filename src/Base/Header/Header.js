/* Header Component */
import React from "react";
/* Logo */
import { logo, vietNam, england } from "../UseImages/UseImages";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
/* import styles */
import './Header.scss';

export default class Header extends React.Component{
    render(){
        return(
            <div className = "header">
                {/* Header Left Code */}
                <div className = "header-left">
                    <img className = "header-left-logo" src = {logo} alt="khachsanvongxua-logo" />
                </div>
                {/* Header Right Code */}
                <div className = "header-right">
                    {/* Header Information Code */}
                    <div className = "header-right-information">
                        <div className = "header-right-information-child phone">
                            <FaPhone size={15} /> 
                            <p className = "header-right-information-child-script">+84933534999</p>
                        </div>
                        <div className = "header-right-information-child email">
                            <MdEmail size={17} /> 
                            <p className = "header-right-information-child-script">vongxuahotel@gmail.com</p>
                        </div>
                        <div className = "header-right-information-bolder"></div>
                        <div className = "header-right-information-child">
                            <img src={england} alt="text-eng" className = "header-right-information-text" /> 
                            <p className = "header-right-information-child-script">ENGLISH</p>
                        </div>
                        <div className = "header-right-information-child">
                            <img src={vietNam} alt="text-vie" className = "header-right-information-text" /> 
                            <p className = "header-right-information-child-script">TIẾNG VIỆT</p>
                        </div>
                    </div>
                    {/* Header Menu Code */}
                    <div className = "header-right-menu">
                        <nav className = "header-right-menu-nav">
                            <ul className = "header-right-menu-nav-content">
                                <li className = "header-right-menu-nav-item">TRANG CHỦ</li>
                                <li className = "header-right-menu-nav-item">GIỚI THIỆU</li>
                                <li className = "header-right-menu-nav-item">
                                    PHÒNG & GIÁ <IoIosArrowDown size={20} style={{marginLeft: 6 + "px"}} />
                                </li>
                                <li className = "header-right-menu-nav-item">DỊCH VỤ & TIỆN ÍCH</li>
                                <li className = "header-right-menu-nav-item">ƯU ĐÃI</li>
                                <li className = "header-right-menu-nav-item">THƯ VIỆN ẢNH</li>
                                <li className = "header-right-menu-nav-item">TOURS</li>
                                <li className = "header-right-menu-nav-item">ĐẶT PHÒNG</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}