import React from "react";
import { FaCrop, FaEye, FaBed, FaUserPlus } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

/* import styles */
import "./RoomShow.scss";

export default class RoomShow extends React.Component{

    render(){
        return(
            <div className = "room-show" style={{marginRight: this.props.margin + "px"}}>
                <div className = "room-show-img">
                    <img src = {this.props.room.src} alt = "room-img" />
                </div>
                <div className = "room-show-attribute" style = {{border: this.props.border, paddingTop: this.props.pd_top + "px"}}>
                    <div className = "room-show-type">
                        <p>HẠNG PHÒNG</p>
                        <h2>{this.props.room.name}</h2>
                        <p>{this.props.room.price}đ/ 1 đêm</p>
                    </div>
                    <div className = "room-show-des">
                        {
                        this.props.room.area  ? (<div className = "room-show-des-child">
                            <FaCrop style={{marginRight: 5 + "px"}} />
                            <p>Kích cỡ phòng: {this.props.room.area} m2</p>
                        </div>):null
                        }
                        {
                        this.props.room.view  ? (<div className = "room-show-des-child">
                            <FaEye style={{marginRight: 5 + "px"}} />
                            <p>Tầm nhìn: {this.props.room.view}</p>
                        </div>):null
                        }
                        {
                        this.props.room.bed ? (<div className = "room-show-des-child">
                            <FaBed style={{marginRight: 5 + "px"}} />
                            <p>Giường: {this.props.room.bed}</p>
                        </div>):null
                        }
                        {
                        this.props.room.opacity ? (<div className = "room-show-des-child">
                            <FaUserPlus style={{marginRight: 5 + "px"}} />
                            <p>Max occupancy: {this.props.room.opacity}</p>
                        </div>):null
                        }
                        <div className = "room-show-des-child room-show-des-child-border-none">
                            <button onClick={() => this.props.show()}>ĐẶT PHÒNG <BsArrowRightShort size={30} style={{fontWeight: "bold"}} /></button>
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