import React from "react";

/* import styles */
import "./Notice.scss";

export default class Notice extends React.Component{
    
    render(){
        return(
            <div className = "notice">
                {this.props.content}
            </div>
        );
    }
}