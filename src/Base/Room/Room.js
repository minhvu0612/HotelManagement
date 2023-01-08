import React from "react";

/* import styles */
import "./Room.scss";
export default class Room extends React.Component{

    render(){
        return(
            <div className = "room">
                <div className = "room-img">
                    <img className = "room-img-content" src = {this.props.src} alt = "room-img" />
                </div>
                <div className = "room-attribute">
                    <h3 className = "room-attribute-name">{this.props.name}</h3>
                    <p className = "room-attribute-price">{this.props.price}đ/ 1 đêm</p>
                </div>
            </div>
        );
    }
}