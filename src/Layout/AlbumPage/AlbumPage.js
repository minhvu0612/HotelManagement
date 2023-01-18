import { useEffect, useState } from "react";
import Banner from "../../Base/Banner/Banner";
import Footer from "../../Base/Footer/Footer";
import Header from "../../Base/Header/Header";

import { dulexe, family, hoavan, suite, superior } from "../../Base/UseImages/UseImages";
import RoomShow from "../../Component/RoomShow/RoomShow";
import { GrFormClose } from "react-icons/gr";

/* import styles */
import "./AlbumPage.scss";

export default function AlbumPage(){

    const [list, setList] = useState(null);

    const [order, setOrder] = useState("album-order-room-disable");

    const [infor, setInfor] = useState({
        title: "Ông",
        firt_name: "",
        last_name: "",
        email: "",
        phone: "",
        region: "",
        date_start: "",
        date_end: "",
        people: 1,
        children: 0,
        room_type: "",
        des: ""
    });

    const showForm = () => {
        setOrder("album-order-room");
    }

    const closeForm = () => {
        setOrder("album-order-room-disable");
    }

    useEffect(() => {
        const room = [
            {
                src: suite,
                name: "Hạng Phòng Suite",
                price: 700000,
                area: 35,
                view: "Window",
                bed: "1 giường đôi",
                opacity: "2 người lớn + 1 trẻ em (dưới 6 tuổi)"
            },
            {
                src: dulexe,
                name: "Phòng Deluxe",
                price: 550000,
                area: 30,
                view: "Window",
                bed: "1 giường đôi",
                opacity: "2 người lớn + 1 trẻ em"
            },
            {
                src: superior,
                name: "Phòng Superior",
                price: 500000,
                area: 30,
                view: "",
                bed: "1 giường đôi (1m6)",
                opacity: "2 người lớn + 1 trẻ em"
            },
            {
                src: family,
                name: "Phòng Family",
                price: 800000,
                area: 35,
                view: "Window",
                bed: "1 giường đôi + 1 giường đơn",
                opacity: "2 người lớn + 2 trẻ em hoặc 3 người lớn"
            }
        ];
        setList(room);
    }, []);

    return(
        <>
        <div className = "album album-order">
            <Header />
            <div className = "album-main">
                <Banner />
                <div className = "album-main-des">
                    <h1 className = "album-main-des-title">Thư Viện Ảnh</h1>
                    <h3 style = {{color: "black", fontWeight: "normal", textAlign: "center"}}>TẤT CẢ ẢNH</h3>
                    <div className = "album-main-des-img"><img src = {hoavan} alt = "hoavan" /></div>
                </div>
            </div>
            {
                list ? (
                    <div className = "album-rooms">
                        <div className = "album-rooms-child">
                        {
                            list.map((element, key) => (key === list.length-1) ? 
                            <RoomShow pd_top = {20} margin = {0} border = {"none"} key = {key} room = {element} show={showForm} />:
                            <RoomShow pd_top = {20} border = {"none"} key = {key} room = {element} show={showForm} />)
                        }
                        </div>
                    </div>
                ):null
            }
            <Footer />
            <div style = {{backgroundColor: "black", width: 100 + "%", height: 80 + "px", 
                display: "flex", alignItems: "center", justifyContent: "center", color: "white"}}>
                © Bản quyền thuộc khachsanvongxua.com.vn
            </div>
        </div>
        {
            // Đặt Phòng
        }
        <div className = {order}>
            <form className="album-order-form">
                <div className = "album-order-form-close" onClick={() => closeForm()}><GrFormClose size={35} /></div>
                <h1>ĐẶT PHÒNG</h1>
                <div className = "album-order-form-hr"><hr /></div>
                <h3>Thông tin của bạn</h3>

                <div className = "album-order-form-1">
                    <div>
                        <label>Tiêu đề:<span style={{color: "red"}}>*</span></label><br />
                        <select 
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, title: e.target.value
                            }))} 
                            defaultValue={infor.title} required>
                            <option value="Ông">Ông</option>
                            <option value="Bà">Bà</option>
                            <option value="Cô">Cô</option>
                            <option value="Tiến sĩ">Tiến sĩ</option>
                        </select>
                    </div>
                    <div>
                        <label>Họ:<span style={{color: "red"}}>*</span></label><br />
                        <input type="text" 
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, firt_name: e.target.value
                            }))} 
                            defaultValue={infor.firt_name} required />
                    </div>
                    <div>
                        <label>Tên:<span style={{color: "red"}}>*</span></label><br />
                        <input type="text"
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, last_name: e.target.value
                            }))}  
                            defaultValue={infor.last_name} required />
                    </div>
                    <div>
                        <label>Email:<span style={{color: "red"}}>*</span></label><br />
                        <input type="email" 
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, email: e.target.value
                            }))}
                            defaultValue={infor.email} required />
                    </div>
                    <div>
                        <label>Điện thoại:</label><br />
                        <input type="text"
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, phone: e.target.value
                            }))}
                            defaultValue={infor.phone} />
                    </div>
                    <div>
                        <label>Quốc gia cư trú:<span style={{color: "red"}}>*</span></label><br />
                        <select
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, region: e.target.value
                            }))} 
                            defaultValue={infor.region} required>
                            <option value="">Please Select..</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla/St Kitts">Anguilla/St Kitts</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bonaire,Saba,St Eustatius">Bonaire,Saba,St Eustatius</option>
                            <option value="Bosnia And Herzegovina">Bosnia And Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Fasa">Burkina Fasa</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of the">Congo, The Democratic Republic of the</option>
                            <option value="Cook Island">Cook Island</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curacao">Curacao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">Falkland Islands</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Souther Territories">French Souther Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea Bissau">Guinea Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle Of Man">Isle Of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Republic Of">Korea, Republic Of</option>
                            <option value="Korea,Democratic People's Republic of">Korea,Democratic People's Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgzstan">Kyrgzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint BarthÃ©lemy">Saint BarthÃ©lemy</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Martin">Saint Martin</option>
                            <option value="Saint Pierre And Miquelon">Saint Pierre And Miquelon</option>
                            <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten">Sint Maarten</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria Arab Republic">Syria Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United Nations">United Nations</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Unknown">Unknown</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, US">Virgin Islands, US</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Yugoslavia">Yugoslavia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </div>
                </div>

                <h3>Yêu cầu của bạn</h3>
                <div className = "album-order-form-1">
                    <div>
                        <label>Ngày đến:<span style={{color: "red"}}>*</span></label><br />
                        <input type="date" 
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, date_start: e.target.value
                            }))} 
                            defaultValue={infor.date_start} required />
                    </div>
                    <div>
                        <label>Ngày đi:<span style={{color: "red"}}>*</span></label><br />
                        <input type="date"
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, date_end: e.target.value
                            }))} 
                            defaultValue={infor.date_end} required />
                    </div>
                    <div>
                        <label>Người lớn:<span style={{color: "red"}}>*</span></label><br />
                        <input type="text"
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, people: e.target.value
                            }))}
                            defaultValue={infor.people} required />
                    </div>
                    <div>
                        <label>Trẻ em:<span style={{color: "red"}}>*</span></label><br />
                        <input type="text"
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, children: e.target.value
                            }))} 
                            defaultValue={infor.children} required />
                    </div>
                    <div>
                        <label>Phòng:<span style={{color: "red"}}>*</span></label><br />
                        <select
                            onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, room_type: e.target.value
                            }))} 
                            defaultValue={infor.room_type} required>
                            <option value="">Chọn một phòng...</option>
                            <option value='Superior Room'>Superior Room</option>
                            <option value='Deluxe Room'>Deluxe Room</option>
                            <option value='Suite Room'>Suite Room</option>
                            <option value='Family Room'>Family Room</option>
                        </select>
                    </div>
                </div>
                
                <div className = "album-order-form-des">
                    <label className="">Tin nhắn/ câu hỏi của bạn</label>
                    <textarea onChange={(e) => setInfor(prevInfor => ({
                                ...prevInfor, des: e.target.value
                            }))} defaultValue={infor.des}></textarea>
                </div>
                <div className = "album-order-form-btn">
                    <button onClick={
                    (e) => {
                        //e.preventDefault();
                        console.log(infor);
                    }}>Gửi tin nhắn</button>
                </div>
            </form>
        </div>
        </>
    );
}