import { useEffect } from "react";
import Banner from "../../Base/Banner/Banner";
import Footer from "../../Base/Footer/Footer";
import Header from "../../Base/Header/Header";

import { hoavan } from "../../Base/UseImages/UseImages";

/* import styles */
import "./IntroducePage.scss";

export default function IntroducePage(){

    useEffect(() => {
        document.getElementById("title").innerHTML = "Giới thiệu";
    }, []);

    return(
        <div className = "introduce">
            <Header />
            <div className = "introduce-main">
                <Banner />
                <div className = "introduce-main-des">
                    <h1 className = "introduce-main-des-title">Giới thiệu</h1>
                    <div className = "introduce-main-des-img"><img src = {hoavan} alt = "hoavan" /></div>
                    <h2>Giới thiệu về khách Sạn Vọng Xưa.</h2>
                    <p className = "introduce-main-des-content">
                    Khách sạn Vọng Xưa  tọa lạc tại một vị trí lý tưởng – ngay trên con Phố rất Hà Nội - Phố Vọng, 
                    nằm trong khu vực khu kinh tế, thương mại, dịch vụ phát triển nhất của Thành phố Hà Nội. 
                    Với vị trí giao thông thuận tiện, Quý khách chỉ mất 30 phút để đến cảng hàng không Quốc tế Nội Bài 
                    bằng xe buýt / Taxi. Khách sạn Vọng Xưa nằm tại vị trí vô cùng thuận tiện, gần các trường Đại học 
                    nổi tiếng như Đại học Kinh Tế Quốc Dân, Đại học Xây Dựng, Đại học Bách Khoa.  
                    Ngoài ra còn gần các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Thanh Nhàn, Bệnh viện Tai Mũi Họng... 
                    Từ Khách sạn Vọng Xưa các Chuyên gia có thể chỉ mất 20 phút để di chuyển tới các khu công nghiệp cách Hà nội 
                    30 km như Hưng Yên, Bắc Ninh, khu công nghiệp Quang Minh…Dọc theo đường Giải phóng tới Lê Duẩn, quý khách 
                    có thể tìm thấy các nhà hàng, quán bar, các dịch vụ vui chơi, các nhà hàng Việt nam, Hàn Quốc, Nhật Bản, 
                    các trung tâm giải trí, các spa... tại phố cổ Hà Nội. Khách sạn Vọng Xưa được đầu tư bài bản phù hợp với 
                    quý khách đến Hà nội cho các chuyến công tác, du lịch nghỉ dưỡng và muốn tìm một nơi nghỉ ngơi với chất 
                    lượng phục vụ tốt. Chỉ mất 10 phút từ phố cổ Hà Nội và hồ Hoàn Kiếm, đây chắc chắn sẽ là nơi thuận tiện cho 
                    các nhu cầu giao dịch, đầu tư, công tác, nghỉ dưỡng và mua sắm. Khách sạn Vọng Xưa được trang bị với các 
                    thiết bị đạt chuẩn của khách sạn 3 sao, phong cách hiện đại, nội thất sang trọng, trang nhã, sạch sẽ và đội 
                    ngũ nhân viên chuyên nghiệp, trẻ trung, năng động giỏi ngoại ngữ nhưng vẫn mang đậm nép đẹp truyền thống 
                    sẽ luôn làm hài lòng quý khách. Chúng tôi cam kết sẽ đem đến những dịch vụ chất lượng nhất, 
                    chế độ hậu mãi tốt nhất cho khách hàng đến với khách sạn Vọng Xưa, đặc biệt khách sạn sẽ giảm giá 
                    cho khách đi công tác dài ngày hoặc các tour du lịch. Khách sạn cung cấp các dịch vụ miễn phí: 
                    Wi-Fi tốc độ cao, thang máy, thông tin về du lịch và các dịch vụ, cafe & trà, tư vấn đặt chương trình 
                    du lịch, đặt vé tàu, máy bay. Chúng tôi hy vọng khách sạn Vọng Xưa sẽ là nơi dừng chân lý tưởng cho 
                    những chuyến nghỉ ngơi hay công tác của Quý khách!<br />
                    Đến với khách sạn Vọng Xưa, quý khách sẽ được tận hưởng một không gian như đang ở chính ngôi nhà thân yêu của mình.
                    </p>
                    <h4>Khách sạn vọng xưa</h4>
                    <p>
                    193 Phố Vọng, Quận Hai Bà Trưng, Hà Nội<br />
                    Điện thoại: 0933534999
                    </p>
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