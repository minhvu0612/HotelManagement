import Banner from "../../Base/Banner/Banner";
import Footer from "../../Base/Footer/Footer";
import Header from "../../Base/Header/Header";

import { hoavan } from "../../Base/UseImages/UseImages";

/* import styles */
import "./SaleListPage.scss";

export default function SaleListPage(){

    return(
        <div className = "introduce">
            <Header />
            <div className = "introduce-main">
                <Banner />
                <div className = "introduce-main-des">
                    <h1 className = "introduce-main-des-title">Ưu đãi</h1>
                    <div style={{textAlign: "center", marginTop: -20 + "px", marginBottom: 30 + "px"}}>Ưu đãi mới</div>
                    <div className = "introduce-main-des-img"><img src = {hoavan} alt = "hoavan" /></div>
                </div>
            </div>
            <Footer />
            <div style = {{backgroundColor: "black", width: 100 + "%", height: 80 + "px", 
                display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
                © Bản quyền thuộc khachsanvongxua.com.vn
            </div>
        </div>
    );
}