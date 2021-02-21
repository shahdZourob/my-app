import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
class Maps extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: 30.620782267018573,
                    lng: 32.26980409883319
                }}
            />

        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyATukSpPD1lJcTArG36UPt_Xk3CKTVtpxs'
})(Maps)