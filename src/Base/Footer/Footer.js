import React from "react";

import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

/* import styles */
import "./Footer.scss";

export default class Footer extends React.Component{

    render(){
        return(
            <div className = "footer">
                <div className = "footer-child footer-special">
                    <h3>KHÁCH SẠN VỌNG XƯA</h3>
                    <div><span>Địa chỉ:</span> 193 Phố Vọng, Hai Bà Trưng, Hà Nội, Việt Nam</div>
                    <div><span>Điện thoại:</span> <p>(+84)933534999</p></div>
                    <div><span>Hotline:</span> <p>+84933534999</p></div>
                    <div><span>Email:</span> <p>vongxuahotel@gmail.com</p></div>
                </div>
                <div className = "footer-child">
                    <h4>VỀ VỌNG XƯA</h4>
                    <p>Giới thiệu</p>
                    <p>Thư viện ảnh</p>
                    <p>Vị trí khách sạn</p>
                    <p>Chính sách khách sạn</p>
                </div>
                <div className = "footer-child">
                    <h4>BẠN CẦN BIẾT</h4>
                    <p>Phòng & Giá</p>
                    <p>Ưu đãi</p>
                    <p>Tin tức & Sự kiện</p>
                </div>
                <div className = "footer-child footer-not-title">
                    <p>Dịch vụ & Tiện ích</p>
                    <p>Tours</p>
                    <p>Liên hệ</p>
                </div>
                <div className = "footer-child footer-icons">
                    <h4>TÌM CHÚNG TÔI TRÊN</h4>
                    <div className = "footer-icons-item">
                        <div className = "footer-icons-item-div1"><AiFillYoutube size={20} /></div>
                        <div className = "footer-icons-item-div2"><AiFillInstagram size={20} /></div>
                        <div className = "footer-icons-item-div3"><BsFacebook size={20} /></div>
                    </div>
                </div>
            </div>
        );
    }
}