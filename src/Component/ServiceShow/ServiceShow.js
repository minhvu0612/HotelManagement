import React from "react";

import { BsArrowRight } from "react-icons/bs";

// import styles
import "./ServiceShow.scss";


export default class ServiceShow extends React.Component{

    render(){
        return(
            <div className = "service-show">
                <img src = {this.props.service.src} alt = "service-img" />
                <div className = "service-show-content">
                    <h3>{this.props.service.name}</h3>
                    <p className = "service-show-content-des">{this.props.service.des}</p>
                    <div className="service-show-more">
                        <div className = "service-show-more-btn">Xem thêm <BsArrowRight style={{marginLeft: 7 + "px"}} /></div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}