import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class Maps extends Component {
    render() {
        return (
            <Map
                google = {this.props.google}
                zoom = {8}
                
                initialCenter={{lat: 30.624101250813, lng: 32.278003692627}}
              >

                <Marker position={{ lat: 30.62147474123568, lng: 32.26960025397569}} />

              </Map>

        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyA1PfJ-166KWjv71L9w00nNxUzpZUR_5WM'
  })(Maps)