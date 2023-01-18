import { useEffect, useState } from "react";
import Banner from "../../Base/Banner/Banner";
import Footer from "../../Base/Footer/Footer";
import Header from "../../Base/Header/Header";

import { hoavan, sale_1, sale_2, sale_3 } from "../../Base/UseImages/UseImages";
import SaleShow from "../../Component/SaleShow/SaleShow";

/* import styles */
import "./SaleListPage.scss";

export default function SaleListPage(){

    const [sales, setSale] = useState(null);

    useEffect(() => {
        const sales = [
            {
                src: sale_1,
                name: "ƯU ĐÃI KHỦNG CHO NGÀY QUỐC TẾ THIẾU NHI 1/6_ VONGXUA HOTEL",
                des: "ƯU ĐÃI KHỦNG CHO NGÀY QUỐC TẾ THIẾU NHI 1/6_ VONGXUA HOTEL"
            },
            {
                src: sale_2,
                name: "Khuyến mại 20% ngày quốc tế phụ nữ",
                des: "Khuyến mại 20% ngày quốc tế phụ nữ"
            },
            {
                src: sale_3,
                name: "Tưng bừng khuyến mại nhân ngày 30/04- 01/05",
                des: "Chào mừng ngày 30/04- 01/05 khách sạn Vọng Xưa tưng bừng khuyến mại giảm giá 10% tất cả các loại phòng trong 2 ngày 30/04 và 01/05."
            }
        ];
        setSale(sales);
    }, []);

    return(
        <div className = "sale">
            <Header />
            <div className = "sale-main">
                <Banner />
                <div className = "sale-main-des">
                    <h1 className = "sale-main-des-title">Ưu đãi</h1>
                    <div style={{textAlign: "center", marginTop: -20 + "px", marginBottom: 30 + "px"}}>Ưu đãi mới</div>
                    <div className = "sale-main-des-img"><img src = {hoavan} alt = "hoavan" /></div>
                </div>
            </div>
            {
                sales ? (
                    <div className = "sale-list">
                        {
                            sales.map((element, key) => <SaleShow key = {key} sale = {element} />)
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