/* Header Component */
import React from "react";
/* Logo */
import { logo, vietNam, england } from "../UseImages/UseImages";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
/* import component */
import Notice from "../../Common/Notice/Notice";
import ButtonGroup from "../../Common/ButtonGroup/ButtonGroup";
/* import styles */
import './Header.scss';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rooms: [
                { 
                    name: "HẠNG PHÒNG SUITE"
                },
                {
                    name: "PHÒNG DELUXE",
                },
                {
                    name: "PHÒNG SUPERIOR",
                },
                {
                    name: "PHÒNG FAMILY"
                }
            ],
            scroll: ""
        }
    }

    componentDidMount() {
        // do something
        var x = document.getElementById("header").offsetTop;
        console.log(x);
    }

    render(){
        return(
            <div id="header" className = {"header" + this.state.scroll}>
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
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">TRANG CHỦ</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Trang chủ" />
                                    </span>
                                </li>
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">GIỚI THIỆU</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Giới thiệu" />
                                    </span>
                                </li>
                                <li className = "header-right-menu-nav-item header-right-menu-nav-item-group">
                                    <p className = "header-right-menu-nav-item-content">PHÒNG & GIÁ <IoIosArrowDown size={20} style={{marginLeft: 6 + "px"}} /></p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Phòng & Giá" />
                                    </span>
                                    <span className = "header-right-menu-nav-item-btn-group"><ButtonGroup typeRoom = {this.state.rooms} /></span>
                                </li>
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">DỊCH VỤ & TIỆN ÍCH</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Dịch vụ và tiện tích" />
                                    </span>
                                </li>
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">ƯU ĐÃI</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Ưu đãi" />
                                    </span>
                                </li>
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">THƯ VIỆN ẢNH</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Thư viện ảnh" />
                                    </span>
                                </li>
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">TOURS</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Tours" />
                                    </span>
                                </li>
                                <li className = "header-right-menu-nav-item">
                                    <p className = "header-right-menu-nav-item-content">ĐẶT PHÒNG</p>
                                    <span className = "header-right-menu-nav-item-notice">
                                        <Notice content = "Đặt phòng" />
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}