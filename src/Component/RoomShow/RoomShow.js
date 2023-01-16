import React from "react";
import { FaCrop, FaEye, FaBed, FaUserPlus } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import { suite } from "../../Base/UseImages/UseImages";

/* import styles */
import "./RoomShow.scss";

export default class RoomShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            room: 
            {
                src: suite,
                name: "Hạng Phòng Suite",
                price: 700000,
                area: 35,
                view: "Window",
                bed: "1 giường đôi",
                opacity: "2 người lớn + 1 trẻ em (dưới 6 tuổi)"
            }
        };
    }

    render(){
        return(
            <div className = "room-show">
                <div className = "room-show-img">
                    <img src = {this.state.room.src} alt = "room-img" />
                </div>
                <div className = "room-show-attribute">
                    <div className = "room-show-type">
                        <p>HẠNG PHÒNG</p>
                        <h2>{this.state.room.name}</h2>
                        <p>{this.state.room.price}đ/ 1 đêm</p>
                    </div>
                    <div className = "room-show-des">
                        <div className = "room-show-des-child">
                            <FaCrop style={{marginRight: 5 + "px"}} />
                            <p>Kích cỡ phòng: {this.state.room.area} m2</p>
                        </div>
                        <div className = "room-show-des-child">
                            <FaEye style={{marginRight: 5 + "px"}} />
                            <p>Tầm nhìn: {this.state.room.view}</p>
                        </div>
                        <div className = "room-show-des-child">
                            <FaBed style={{marginRight: 5 + "px"}} />
                            <p>Giường: {this.state.room.bed}</p>
                        </div>
                        <div className = "room-show-des-child">
                            <FaUserPlus style={{marginRight: 5 + "px"}} />
                            <p>Max occupancy: {this.state.room.opacity}</p>
                        </div>
                        <div className = "room-show-des-child room-show-des-child-border-none">
                            <button>ĐẶT PHÒNG <BsArrowRightShort size={30} style={{fontWeight: "bold"}} /></button>
                            <div className = "room-show-more">
                                <p>Xem thêm <BsArrowRightShort size={25} /></p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}