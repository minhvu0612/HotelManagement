import { useEffect, useState } from "react";
import Banner from "../../Base/Banner/Banner";
import Header from "../../Base/Header/Header";

import { BsArrowRight } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { dulexe, family, suite, superior } from "../../Base/UseImages/UseImages";

import "./HomePage.scss";
import Room from "../../Base/Room/Room";
import Footer from "../../Base/Footer/Footer";

function HomePage(){
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        setRooms([
            {
                src: suite,
                name: "Hạng Phòng Suite",
                price: 700000
            },
            {
                src: dulexe,
                name: "Phòng Deluxe",
                price: 550000
            },
            {
                src: superior,
                name: "Phòng Superior",
                price: 500000
            },
            {
                src: family,
                name: "Phòng Family",
                price: 800000
            },
        ])
    }, []);
    
    return (
    <div className = "home">
        <Header />
        <div className = "main">
            <Banner />
            <div className = "main-des">
                <h2 className = "main-des-title">KHÁCH SẠN VỌNG XƯA</h2>
                <p className = "main-des-content">Khách sạn Vọng Xưa  tọa lạc tại một vị trí lý tưởng 
                    - ngay trên con Phố rất Hà Nội - Phố Vọng, nằm trong khu vực khu kinh tế,
                     thương mại, dịch vụ phát triển nhất của Thành phố Hà Nội. 
                     Với vị trí giao thông thuận tiện, Quý khách chỉ mất 30 phút để đến cảng hàng không Quốc 
                     tế Nội Bài bằng xe buýt / Taxi. Khách sạn Vọng Xưa nằm tại vị trí vô cùng thuận tiện, 
                     gần các trường Đại học nổi tiếng như Đại học Kinh Tế Quốc Dân, Đại học Xây Dựng, Đại học Bách Khoa.  
                     Ngoài ra còn gần các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Thanh Nhàn, Bệnh viện Tai Mũi Họng...
                </p>
            </div>
        </div>

        <div className = "des-hotel">
            <div className = "des-hotel-sidebar">
                <div className = "des-hotel-sidebar-child">
                    <h3>CHÍNH SÁCH KHÁCH SẠN</h3>
                    <hr />
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Nhận phòng từ 13:00;</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Trả phòng vào 12:00;</p>
                    </div>
                    <div style = {{color: "black", fontWeight: 700, marginBottom: 10 + "px"}}>
                        Chính sách Huỷ / Trả trước...
                    </div>
                    <div className = "des-hotel-sidebar-child-more">
                        <p>Thông tin thêm</p>
                        <BsArrowRight style = {{marginLeft: 5 + "px"}} />
                    </div>
                </div>
                <div className = "des-hotel-sidebar-child">
                    <h3>ĐẶC ĐIỂM CỦA KHÁCH SẠN</h3>
                    <hr />
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Tủ lạnh</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Tivi</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Truyền hình vệ tinh / cáp</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Tivi</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Bàn chải đánh răng / Kem đánh răng</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Nhà hàng quốc tế</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Check in / check out nhanh (đăng ký trước)</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-item">
                        <GiCheckMark style = {{color: "black", marginRight: 5 + "px"}} />
                        <p>Nhà hàng quốc tế</p>
                    </div>
                    <div className = "des-hotel-sidebar-child-more">
                        <p>Thông tin thêm</p>
                        <BsArrowRight style = {{marginLeft: 5 + "px"}} />
                    </div>
                </div>
            </div>

            {
                rooms ? (
                    <div className = "des-hotel-rooms">
                        {
                            rooms.map((element, key) => 
                                <Room src = {element.src} name = {element.name} price = {element.price} key = {key} />
                            ) 
                        }
                    </div>
                ) : null
            }
        </div>
        <Footer />
        <div style = {{backgroundColor: "black", width: 100 + "%", height: 80 + "px", 
            display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
            © Bản quyền thuộc khachsanvongxua.com.vn
        </div>
    </div>
    );
}

export default HomePage;