import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class Maps extends React.Component {
  render() {
    const { map_initial_coordinates, home_coordinates, mapZoom } = this.props.mapData;
    return (
      <Map
        google={this.props.google}
        zoom={mapZoom}
        initialCenter={map_initial_coordinates}
      >
        <Marker
          title="My Home"
          name="Home"
          position={home_coordinates}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyCywSm7S3UN_fw12pQU_YfLFXeu3u_bRuE' })(Maps);
