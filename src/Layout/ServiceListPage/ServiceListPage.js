import { useEffect, useState } from "react";
import Banner from "../../Base/Banner/Banner";
import Footer from "../../Base/Footer/Footer";
import Header from "../../Base/Header/Header";
import ServiceShow from "../../Component/ServiceShow/ServiceShow";

import { hoavan } from "../../Base/UseImages/UseImages";
import { transport, vong_xua, facilities } from "../../Base/UseImages/UseImages";

/* import styles */
import "./ServiceListPage.scss";

export default function ServiceListPage(){

    const [services, setService] = useState(null);

    useEffect(() => {
        const services = [
            {
                src: transport,
                name: "Dịch vụ vận chuyển",
                des: "- Khách sạn Vọng Xưa có dịch vụ thuê xe oto và xe máy đi theo ngày - "
                    + "thuê xe đón Nội Bài về khách sạn và từ khách sạn đi Nội Bài"
            },
            {
                src: vong_xua,
                name: "Khách sạn Vọng Xưa- khách sạn gần đường Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
                des: ""
            },
            {
                src: facilities,
                name: "Dịch vụ và Tiện ích",
                des: ""
            }
        ];
        setService(services);
    }, []);

    return(
        <div className = "service">
            <Header />
            <div className = "service-main">
                <Banner />
                <div className = "service-main-des">
                    <h1 className = "service-main-des-title">Dịch vụ & tiện ích</h1>
                    <div className = "service-main-des-img"><img src = {hoavan} alt = "hoavan" /></div>
                </div>
            </div>
            {
                services ? (
                    <div className = "service-list">
                        {
                            services.map((element, key) => <ServiceShow key = {key} service = {element} />)
                        }
                    </div>
                ):null
            }
            <Footer />
            <div style = {{backgroundColor: "black", width: 100 + "%", height: 80 + "px", 
                display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
                © Bản quyền thuộc khachsanvongxua.com.vn
            </div>
        </div>
    );
}