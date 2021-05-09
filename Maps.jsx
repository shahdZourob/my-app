import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%'
};

            
          export class MapContainer extends Component {
            render() {
              return (
                <Map
                  google={this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{lat: 30.6206425, lng: 32.2760273}}
          
                >
                  <Marker position={{ lat: 30.6206425, lng: 32.27106}} />
                  </Map>
          
              );
            }
          }

        
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA1PfJ-166KWjv71L9w00nNxUzpZUR_5WM'
})(MapContainer);