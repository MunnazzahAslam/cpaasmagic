import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Card from '@material-ui/core/Card';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <Card style={{ margin: '2rem', height: '600px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD9LDJdrqc0aDzNu3IpJ3tuS5d9pW_XE_I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </Card>
    );
  }
}
 
export default Maps;