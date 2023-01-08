import Banner from "../../Base/Banner/Banner";
import Header from "../../Base/Header/Header";

import "./HomePage.scss";

function HomePage(){
  return (
    <div className = "home">
        <Header />
        <div className = "main">
            <Banner />
            <div className = "main-des">
                <h2>KHÁCH SẠN VỌNG XƯA</h2>
                <p>Khách sạn Vọng Xưa  tọa lạc tại một vị trí lý tưởng 
                    - ngay trên con Phố rất Hà Nội - Phố Vọng, nằm trong khu vực khu kinh tế,
                     thương mại, dịch vụ phát triển nhất của Thành phố Hà Nội. 
                     Với vị trí giao thông thuận tiện, Quý khách chỉ mất 30 phút để đến cảng hàng không Quốc 
                     tế Nội Bài bằng xe buýt / Taxi. Khách sạn Vọng Xưa nằm tại vị trí vô cùng thuận tiện, 
                     gần các trường Đại học nổi tiếng như Đại học Kinh Tế Quốc Dân, Đại học Xây Dựng, Đại học Bách Khoa.  
                     Ngoài ra còn gần các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Thanh Nhàn, Bệnh viện Tai Mũi Họng...
                </p>
            </div>
        </div>
    </div>
  );
}

export default HomePage;