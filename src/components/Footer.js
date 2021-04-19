import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Footer extends Component{
    render(){
        return(
            
            <div className="Footer">
                <div className="row">
  <div className="col-sm-6">
    <div className="card">
                <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     
 </InfoWindow>
</Map>  
</div>
  </div>

  <div className="col-sm-6">
  <div className="card-body">
    <h5 className="card-title">Contact Us</h5>
      <p className="card-text"> 
          <li> Address: Egypt - Ismailia - Kilo Ring Road 4.5 </li><br />
          <li> Email : President_office@suez.edu.eg </li> <br />
          <li> Ismailia : (+2064) 3223007 - 32001258 </li> <br />
          <li> Cairo office : (+202) 22621218 - 22621216 </li> <br />
          <li> Fax : (+202) 22621217 - (+2064) 3205208  </li> <br />
          </p> 
  </div>
  </div>

          <div className="under" >
<nav className="navbar navbar-expand-lg navbar-hight bg-light">
  <div className="container-fluid">
    <h5 className="fw-bolder text-dark ">All Rights Reserved© 2019 Suez Canal University - Portal</h5>
  </div>
</nav>
    </div>


</div>
            </div>
        );

    }
}

        
        export default GoogleApiWrapper({
            apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
          })(Footer)