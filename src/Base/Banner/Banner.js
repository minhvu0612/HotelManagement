import React from "react";
import { banner_01, banner_02, previous, next } from "../UseImages/UseImages";

/* import styles */
import "./Banner.scss";

export default class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name1: "banner-child-img",
            name2: "banner-child-img banner-child-img-after"
        }
    }

    setBanner(){
        if (this.state.name1 === "banner-child-img"){
            this.setState({
                name1: "banner-child-img banner-child-img-after",
                name2: "banner-child-img"
            });
        }
        if (this.state.name2 === "banner-child-img"){
            this.setState({
                name1: "banner-child-img",
                name2: "banner-child-img banner-child-img-after"
            });
        }
    }
    
    render(){
        return(
            <div className = "banner">
                <div className = "banner-child-previous" onClick={() => this.setBanner()}>
                    <img className = "banner-child-previous-img" src = {previous} alt = "banner-img" />
                </div> 
                <div className = "banner-child">
                    <img className = {this.state.name1} src = {banner_01} alt = "banner-img" />
                    <img className = {this.state.name2} src = {banner_02} alt = "banner-img" />
                </div>
                <div className = "banner-child-next" onClick={() => this.setBanner()}>
                    <img className = "banner-child-next-img" src = {next} alt = "banner-img" />
                </div>
            </div>
        );
    }
}