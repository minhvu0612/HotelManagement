import React from "react";

/* import styles */
import './ButtonGroup.scss';

export default class ButtonGroup extends React.Component{
    render(){
        return(
            this.props.typeRoom ? (
            <>
            <div className = "button-group">
                {
                    this.props.typeRoom.map((element, key) => 
                        <button className = "button-group-item" key = {key}>{element.name}</button>
                    )
                }
            </div>
            </>) : null
        );
    }
}