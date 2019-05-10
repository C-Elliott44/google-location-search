import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pointer from './MapComponents/pointer.png';
import "../Styles/map.css";

const AnyReactComponent = ({ text }) => <div className="MapPointer"><img className='PointerImg' src={Pointer} alt="Map Pointer"></img></div>;


 
class SimpleMap extends Component {
 
  render() {
    return (
      <div className='MapView'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0fgzm00Nx4vGdj6EqJTA8oGBgOQkKj60" }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;