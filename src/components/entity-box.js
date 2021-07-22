import React, { Component } from 'react';
import './entity-box.css';

class EntityBox extends Component {

    state = {};

    getStatusClass() {
        let classes = 'status ';
        classes += this.props.entity.connected ?  'connected' : 'disconnected';
        return classes;
    }
    
    render() {
        return(
            <div className="entity-box"> 
                <div className="type ellipsis " >{this.props.entity.type}</div>
                <div className="name ellipsis">{this.props.entity.name}</div>
                <div className={this.getStatusClass()} >
                    <div className="circle"></div>
                    <div className="circle-filled"></div>
                    <div className="circle"></div>
                </div>
                <div className="count">{this.props.entity.count}</div>
            </div>
        )
    }
}
export default EntityBox;