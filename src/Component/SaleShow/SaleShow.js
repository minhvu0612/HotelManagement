import React from "react";

import { BsArrowRight } from "react-icons/bs";

// import styles
import "./SaleShow.scss";


export default class SaleShow extends React.Component{

    render(){
        return(
            <div className = "sale-show">
                <img src = {this.props.sale.src} alt = "sale-img" />
                <div className = "sale-show-content">
                    <h3>{this.props.sale.name}</h3>
                    <p className = "sale-show-content-des">{this.props.sale.des}</p>
                    <div className = "sale-show-content-order">
                        <button>Gửi yêu cầu <BsArrowRight style={{marginLeft: 5 + "px"}} /></button>
                        <div className="sale-show-more">
                            <div className = "sale-show-more-btn">Xem thêm <BsArrowRight style={{marginLeft: 7 + "px"}} /></div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}