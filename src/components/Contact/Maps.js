import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Maps extends React.Component{
  render() {
    return (
      <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{lat: 9.927089, lng: 78.120056}}
      >
        <Marker
            title="My Home"
            name={'Home'}
            position={{lat: 9.927089, lng: 78.120056}}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyCywSm7S3UN_fw12pQU_YfLFXeu3u_bRuE" })(Maps);