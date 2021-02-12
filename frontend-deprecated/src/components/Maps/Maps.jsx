import React, { Component } from 'react';
import SvgTest from '../../assets/mapsSvg/Test';
import './Maps.css';
import { nominalTypeHack } from 'prop-types';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredArea: null,
      clickedArea: null,
    };
    this.onHandleArea = this.onHandleArea.bind(this);
    this.onHandleMouseEnter = this.onHandleMouseEnter.bind(this);
    this.onHandleMouseLeave = this.onHandleMouseLeave.bind(this);
  }

  onHandleArea(event) {}

  onHandleMouseEnter(event) {
    this.setState({
      hoveredArea: event.target.id,
    })
  }

  onHandleMouseLeave(event) {
    this.setState({
      hoveredArea: null,
    })
  }

  render() { 
    return ( 
      <div
        className="map-container"
      >
        <SvgTest 
          handleArea={(event) => {console.log("Event: ", event.target.id)}} 
          handleMouseEnter={this.onHandleMouseEnter} 
          handleMouseLeave={this.onHandleMouseLeave}
          hoveredArea={this.state.hoveredArea}
        />
      </div>
    );
  }
}
 
export default Maps;
